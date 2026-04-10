<script setup>

definePageMeta({
  layout: 'admin'
})


// 1. On ajoute "storage" aux imports de la lib
import { auth, db, storage } from '~/lib/firebase'
// 2. On importe les outils nécessaires depuis le SDK Firebase Storage
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { signOut } from 'firebase/auth'
import imageCompression from 'browser-image-compression'

const user = ref(null)
const title = ref('')
const content = ref('')
const isLoading = ref(false)
const statusMsg = ref('')

const imageFile = ref(null)

// Vérifier si l'utilisateur est connecté au chargement
onMounted(() => {
  auth.onAuthStateChanged((currentUser) => {
    if (!currentUser) {
      navigateTo('/admin/login')
    } else {
      user.value = currentUser
    }
  })
})

// 3. FONCTION MANQUANTE : Récupérer le fichier quand on le choisit
const handleFileChange = (e) => {
  imageFile.value = e.target.files[0]
}

// Fonction pour publier l'article
const publishArticle = async () => {
  // On vérifie aussi l'image ici
  if (!title.value || !content.value) {
    statusMsg.value = "⚠️ Veuillez remplir tous les champs et choisir une image."
    return
  }

  isLoading.value = true
  statusMsg.value = "⏳ Publication en cours..."

  try {

    const options = {
      maxSizeMB: 0.8,          // Taille max (ici moins de 1Mo)
      maxWidthOrHeight: 1200,  // Redimensionne si l'image est immense (4K etc.)
      useWebWorker: true,      // Plus rapide, ne bloque pas l'écran
      fileType: 'image/jpeg'   // Force le format JPEG pour plus de légèreté
    }

    const compressedFile = await imageCompression(imageFile.value, options)

    // 1. Upload de l'image dans le dossier "blog" sur Storage
    const fileName = `${Date.now()}-${imageFile.value.name}`
    const fileRef = storageRef(storage, `blog/${fileName}`)
    
    await uploadBytes(fileRef, compressedFile)
    const imageUrl = await getDownloadURL(fileRef)

    // 2. Ajout de l'article dans Firestore avec l'URL de l'image
    await addDoc(collection(db, "articles"), {
      title: title.value,
      content: content.value,
      author: user.value.email,
      createdAt: serverTimestamp(),
      imageUrl: imageUrl, // On enregistre le lien généré
    })

    statusMsg.value = "✅ Article et image publiés avec succès !"
    
    // Reset du formulaire
    title.value = ""
    content.value = ""
    imageFile.value = null
  } catch (e) {
    console.error("Erreur :", e)
    statusMsg.value = "❌ Erreur : " + e.message
  } finally {
    isLoading.value = false
  }
}

const handleLogout = async () => {
  await signOut(auth)
  navigateTo('/admin/login')
}
</script>

<template>
  <div v-if="user" class="min-h-screen bg-slate-50 flex">

    <main class="flex-1 p-6 md:p-12">
      <header class="flex justify-between items-center mb-10">
        <h1 class="text-3xl font-bold text-slate-800">Rédiger un article</h1>
      </header>

      <div class="max-w-3xl bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200">
        <div class="space-y-6">
          <div>
            <label class="block text-sm font-bold text-slate-700 mb-2 pl-1">Titre de l'article</label>
            <input 
              v-model="title"
              type="text" 
              placeholder="Ex: Les chatons c'est trop mignion hihi..."
              class="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
            />
          </div>

          <div>
              <label class="block text-sm font-bold text-slate-700 mb-2 pl-1">Contenu de l'article</label>
            <div>
            <TiptapEditor v-model="content" />
          </div>
          </div>

          <div>
            <label class="block text-sm font-bold text-slate-700 mb-2 pl-1">Image d'illustration</label>
            <input 
              type="file" 
              accept="image/*"
              @change="handleFileChange"
              class="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none"
            />
          </div>

          <p v-if="statusMsg" :class="statusMsg.includes('✅') ? 'text-emerald-600' : 'text-red-500'" class="font-medium pl-1">
            {{ statusMsg }}
          </p>

          <button 
            @click="publishArticle"
            :disabled="isLoading"
            class="px-10 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-bold shadow-lg shadow-emerald-600/20 transition-all active:scale-95 disabled:opacity-50"
          >
            {{ isLoading ? 'Publication...' : 'Publier maintenant' }}
          </button>
        </div>
      </div>
    </main>
  </div>
</template>