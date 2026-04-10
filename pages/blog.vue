<template>
  <div class="max-w-4xl mx-auto p-6 pt-20">
    <h1 class="text-4xl font-black text-emerald-900 mb-10 italic text-center">Le Blog de l'Arc</h1>

    <div v-if="isLoading" class="text-center py-20">
      <p class="animate-pulse text-slate-400">Chargement des articles...</p>
    </div>

    <div v-else-if="articles.length === 0" class="text-center py-20">
      <p>Aucun article pour le moment.</p>
    </div>

    <div v-else class="grid gap-8">
      <NuxtLink 
        v-for="post in articles" 
        :key="post.id" 
        :to="`/${post.id}`" 
        class="block p-8 bg-white border border-slate-100 shadow-sm rounded-[2rem] transition-all hover:shadow-xl hover:scale-[1.01] group"
      >
        <h2 class="text-2xl font-bold text-slate-800 mb-2 group-hover:text-emerald-700 transition-colors">
          {{ post.title }}
        </h2>
        
        <div class="text-sm text-emerald-600 font-medium mb-4">
          Publié le {{ post.createdAt?.toDate().toLocaleDateString('fr-FR') }}
        </div>

        <img 
          v-if="post.imageUrl" 
          :src="post.imageUrl" 
          class="w-full h-64 object-cover rounded-2xl mb-6 shadow-inner" 
          alt="Illustration article"
        />
        
        <div class="text-slate-600 leading-relaxed mb-4 line-clamp-3 prose prose-sm" v-html="post.content"></div>
        
        <div class="text-emerald-600 font-bold text-sm flex items-center gap-2">
          Lire la suite <span class="group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { db } from '~/lib/firebase'
import { collection, query, orderBy, getDocs } from 'firebase/firestore'

const articles = ref([])
const isLoading = ref(true)

onMounted(async () => {
  try {
    const q = query(collection(db, "articles"), orderBy("createdAt", "desc"))
    const querySnapshot = await getDocs(q)
    articles.value = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
  } catch (e) {
    console.error(e)
  } finally {
    isLoading.value = false
  }
})
</script>