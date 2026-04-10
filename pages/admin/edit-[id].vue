<script setup>
import { db, storage } from '~/lib/firebase'
import { doc, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore'
import { ref as storageRef, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'
import imageCompression from 'browser-image-compression'

definePageMeta({ layout: 'admin' })

const route = useRoute()
const articleId = route.params.id

const title = ref('')
const content = ref('')
const currentImageUrl = ref('')
const imageFile = ref(null)
const isLoading = ref(false)
const statusMsg = ref('')

// 1. Charger les données de l'article au démarrage
onMounted(async () => {
  try {
    const docRef = doc(db, "articles", articleId)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      const data = docSnap.data()
      title.value = data.title
      content.value = data.content
      currentImageUrl.value = data.imageUrl
    } else {
      statusMsg.value = "❌ Article introuvable."
    }
  } catch (e) {
    console.error(e)
  }
})

const handleFileChange = (e) => {
  imageFile.value = e.target.files[0]
}

// 2. Fonction de mise à jour
const updateArticle = async () => {
  isLoading.value = true
  statusMsg.value = "⏳ Mise à jour en cours..."

  try {
    let finalImageUrl = currentImageUrl.value

    // Si une nouvelle image est sélectionnée
    if (imageFile.value) {
      // Optionnel : supprimer l'ancienne image du storage si elle existe
      if (currentImageUrl.value) {
        const oldImageRef = storageRef(storage, currentImageUrl.value)
        await deleteObject(oldImageRef).catch(() => {})
      }

      // Compresser et uploader la nouvelle
      const options = { maxSizeMB: 0.8, maxWidthOrHeight: 1200, useWebWorker: true }
      const compressedFile = await imageCompression(imageFile.value, options)
      
      const fileName = `${Date.now()}-edited.jpg`
      const fileRef = storageRef(storage, `blog/${fileName}`)
      await uploadBytes(fileRef, compressedFile)
      finalImageUrl = await getDownloadURL(fileRef)
    }

    // Mise à jour Firestore
    const docRef = doc(db, "articles", articleId)
    await updateDoc(docRef, {
      title: title.value,
      content: content.value,
      imageUrl: finalImageUrl,
      updatedAt: serverTimestamp()
    })

    statusMsg.value = "✅ Article mis à jour avec succès !"
    setTimeout(() => navigateTo('/admin/articles'), 1500)
  } catch (e) {
    statusMsg.value = "❌ Erreur : " + e.message
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="max-w-3xl">
    <div class="flex items-center gap-4 mb-8">
      <NuxtLink to="/admin/articles" class="p-3 bg-white rounded-2xl border border-slate-200 hover:bg-slate-50 transition-all">
        ⬅️
      </NuxtLink>
      <h1 class="text-3xl font-black text-slate-800">Modifier l'article</h1>
    </div>

    <div class="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 space-y-6">
      <div>
        <label class="block text-sm font-bold text-slate-700 mb-2 pl-1">Titre</label>
        <input v-model="title" type="text" class="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500" />
      </div>

      <div>
        <label class="block text-sm font-bold text-slate-700 mb-2 pl-1">Contenu</label>
        <textarea v-model="content" rows="10" class="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500"></textarea>
      </div>

      <div>
        <label class="block text-sm font-bold text-slate-700 mb-2 pl-1">Image actuelle</label>
        <div class="relative w-40 h-40 mb-4">
          <img :src="currentImageUrl" class="w-full h-full object-cover rounded-2xl border border-slate-200" />
        </div>
        <label class="block text-sm font-bold text-slate-700 mb-2 pl-1">Remplacer l'image (optionnel)</label>
        <input type="file" @change="handleFileChange" accept="image/*" class="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl" />
      </div>

      <p v-if="statusMsg" :class="statusMsg.includes('✅') ? 'text-emerald-600' : 'text-red-500'" class="font-bold">
        {{ statusMsg }}
      </p>

      <div class="flex gap-4">
        <button @click="updateArticle" :disabled="isLoading" class="flex-1 py-4 bg-emerald-600 text-white rounded-2xl font-bold shadow-lg hover:bg-emerald-700 transition-all disabled:opacity-50">
          {{ isLoading ? 'Enregistrement...' : 'Enregistrer les modifications' }}
        </button>
      </div>
    </div>
  </div>
</template>