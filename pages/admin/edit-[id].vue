<script setup>
import { db, storage } from '~/lib/firebase'
import { doc, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore'
import { ref as storageRef, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'
import imageCompression from 'browser-image-compression'

definePageMeta({ layout: 'admin' })

const route = useRoute()
const articleId = route.params.id

const title = ref('')
const content = ref('') // Contiendra le HTML de Tiptap
const currentImageUrl = ref('')
const imageFile = ref(null)
const isLoading = ref(false)
const isFetching = ref(true) // Pour attendre le chargement initial
const statusMsg = ref('')

// 1. Charger l'article
onMounted(async () => {
  try {
    const docRef = doc(db, "articles", articleId)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      const data = docSnap.data()
      title.value = data.title
      content.value = data.content // Le HTML est injecté ici
      currentImageUrl.value = data.imageUrl
    } else {
      statusMsg.value = "❌ Article introuvable."
    }
  } catch (e) {
    console.error(e)
  } finally {
    isFetching.value = false
  }
})

const handleFileChange = (e) => {
  imageFile.value = e.target.files[0]
}

// 2. Mise à jour
const updateArticle = async () => {
  if (!title.value || !content.value) {
    statusMsg.value = "⚠️ Le titre et le contenu ne peuvent pas être vides."
    return
  }

  isLoading.value = true
  statusMsg.value = "⏳ Mise à jour..."

  try {
    let finalImageUrl = currentImageUrl.value

    if (imageFile.value) {
      // Nettoyage ancienne image
      if (currentImageUrl.value) {
        const oldImageRef = storageRef(storage, currentImageUrl.value)
        await deleteObject(oldImageRef).catch(() => {})
      }

      const options = { maxSizeMB: 0.8, maxWidthOrHeight: 1200, useWebWorker: true }
      const compressedFile = await imageCompression(imageFile.value, options)
      
      const fileName = `${Date.now()}-edited.jpg`
      const fileRef = storageRef(storage, `blog/${fileName}`)
      await uploadBytes(fileRef, compressedFile)
      finalImageUrl = await getDownloadURL(fileRef)
    }

    const docRef = doc(db, "articles", articleId)
    await updateDoc(docRef, {
      title: title.value,
      content: content.value, // Sauvegarde du HTML stylisé
      imageUrl: finalImageUrl,
      updatedAt: serverTimestamp()
    })

    statusMsg.value = "✅ Mis à jour !"
    setTimeout(() => navigateTo('/admin/articles'), 1500)
  } catch (e) {
    statusMsg.value = "❌ Erreur : " + e.message
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="max-w-6xl mx-auto pb-20">
    <div class="flex items-center gap-4 mb-8">
      <NuxtLink to="/admin/articles" class="p-3 bg-white rounded-2xl border border-slate-200 hover:bg-slate-50 transition-all">
        ⬅️
      </NuxtLink>
      <h1 class="text-3xl font-black text-slate-800">Modifier l'article</h1>
    </div>

    <div v-if="!isFetching" class="grid lg:grid-cols-2 gap-8">
      
      <div class="space-y-6 bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
        <div>
          <label class="block text-sm font-bold text-slate-700 mb-2 pl-1">Titre</label>
          <input v-model="title" type="text" class="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500" />
        </div>

        <div>
          <label class="block text-sm font-bold text-slate-700 mb-2 pl-1">Contenu (Éditeur stylisé)</label>
          <TiptapEditor v-model="content" />
        </div>

        <div>
          <label class="block text-sm font-bold text-slate-700 mb-2 pl-1">Image</label>
          <div class="flex items-center gap-4 mb-4">
            <img :src="currentImageUrl" class="w-20 h-20 object-cover rounded-xl border border-slate-100" />
            <input type="file" @change="handleFileChange" accept="image/*" class="text-xs" />
          </div>
        </div>

        <button @click="updateArticle" :disabled="isLoading" class="w-full py-4 bg-emerald-600 text-white rounded-2xl font-bold hover:bg-emerald-700 transition-all">
          {{ isLoading ? 'Enregistrement...' : 'Enregistrer les modifications' }}
        </button>

        <p v-if="statusMsg" :class="statusMsg.includes('✅') ? 'text-emerald-600' : 'text-red-500'" class="text-center font-bold">
          {{ statusMsg }}
        </p>
      </div>

      <div class="sticky top-10">
        <label class="block text-xs font-black text-slate-400 uppercase tracking-widest mb-4 pl-1">Rendu sur le site</label>
        <div class="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm min-h-[500px]">
          <h2 class="text-4xl font-black text-slate-900 mb-6 leading-tight">{{ title }}</h2>
          <div class="prose prose-emerald max-w-none text-slate-600" v-html="content"></div>
        </div>
      </div>

    </div>

    <div v-else class="text-center py-20">
      <p class="text-slate-400 animate-pulse font-bold">Chargement de l'article...</p>
    </div>
  </div>
</template>