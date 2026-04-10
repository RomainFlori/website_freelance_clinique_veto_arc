<script setup>
import { db } from '~/lib/firebase'
import { doc, getDoc } from 'firebase/firestore'

const route = useRoute()
const article = ref(null)
const isLoading = ref(true)

onMounted(async () => {
  try {
    const docRef = doc(db, "articles", route.params.id)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      article.value = docSnap.data()
    }
  } catch (e) {
    console.error(e)
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <div class="max-w-5xl mx-auto p-6 pt-20">
    <NuxtLink to="/blog" class="text-emerald-600 font-bold flex items-center gap-2 mb-10 hover:-translate-x-2 transition-transform">
      ← Retour au blog
    </NuxtLink>

    <div v-if="isLoading" class="text-center py-20">
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-emerald-500 mx-auto"></div>
    </div>

    <article v-else-if="article">
      <h1 class="text-5xl font-black text-slate-900 mb-6 leading-tight">{{ article.title }}</h1>
      
      <div class="flex items-center gap-4 mb-10 text-slate-500">
        <span class="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold uppercase">
          Clinique de l'Arc
        </span>
        <span class="text-sm">
          {{ article.createdAt?.toDate().toLocaleDateString('fr-FR') }}
        </span>
      </div>

      <img 
        v-if="article.imageUrl" 
        :src="article.imageUrl" 
        class="w-full h-[400px] object-cover rounded-[3rem] mb-12 shadow-2xl" 
      />

      <div 
        class="prose prose-emerald prose-lg max-w-none text-slate-700" 
        v-html="article.content"
      ></div>
    </article>
  </div>
</template>