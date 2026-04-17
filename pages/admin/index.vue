<script setup>

definePageMeta({
  layout: 'admin'
})
import { auth, db, storage } from '~/lib/firebase'
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
      return
    }

    // --- LOGIQUE DE DÉCONNEXION AUTO APRÈS 1H ---
    const loginTime = localStorage.getItem('admin_login_time')
    const oneHour = 60 * 60 * 1000 // 3600000 ms

    if (loginTime) {
      const currentTime = Date.now()
      const timeElapsed = currentTime - parseInt(loginTime)

      if (timeElapsed > oneHour) {
        alert("Votre session a expiré (1h max).")
        handleLogout()
        return
      }
    }
    // --------------------------------------------

    user.value = currentUser
  })
})

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
  <div v-if="user" class="min-h-screen bg-slate-50">
    <main class="max-w-7xl mx-auto p-6 md:p-12">
      
      <header class="flex justify-between items-center mb-10">
        <h1 class="text-3xl font-black text-slate-800 tracking-tight">Rédiger un article</h1>
      </header>

      <div class="grid lg:grid-cols-2 gap-8 items-start">
        
        <div class="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 space-y-6">
          <div>
            <label class="block text-sm font-bold text-slate-700 mb-2 pl-1">Titre de l'article</label>
            <input 
              v-model="title"
              type="text" 
              placeholder="Ex: Conseils pour l'été..."
              class="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
            />
          </div>

          <div>
            <label class="block text-sm font-bold text-slate-700 mb-2 pl-1">Contenu de l'article</label>
            <TiptapEditor v-model="content" />
          </div>

          <div>
            <label class="block text-sm font-bold text-slate-700 mb-2 pl-1">Image d'illustration</label>
            <input 
              type="file" 
              accept="image/*"
              @change="handleFileChange"
              class="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-bold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100"
            />
          </div>

          <p v-if="statusMsg" :class="statusMsg.includes('✅') ? 'text-emerald-600' : 'text-red-500'" class="font-bold text-sm pl-1">
            {{ statusMsg }}
          </p>

          <button 
            @click="publishArticle"
            :disabled="isLoading"
            class="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-bold shadow-lg shadow-emerald-600/20 transition-all active:scale-95 disabled:opacity-50"
          >
            {{ isLoading ? 'Publication...' : '🚀 Publier maintenant' }}
          </button>
        </div>

        <div class="sticky top-8 space-y-4">
          <label class="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">Aperçu final sur le site</label>
          <div class="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-200 min-h-[600px] overflow-hidden">
            <h2 class="text-4xl font-black text-slate-900 mb-8 leading-tight">
              {{ title || 'Titre de l\'article...' }}
            </h2>
            <div class="prose prose-emerald max-w-none text-slate-600" v-html="content || '<p class=\'text-slate-300 italic\'>Le contenu apparaîtra ici...</p>'"></div>
          </div>
        </div>

      </div>
    </main>
  </div>
</template>