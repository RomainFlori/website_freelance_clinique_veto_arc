<script setup>
import { db } from '~/lib/firebase'
import { collection, query, orderBy, getDocs } from 'firebase/firestore'

const articles = ref([])
const isLoading = ref(true)

// Récupérer les articles au chargement
onMounted(async () => {
  try {
    const q = query(collection(db, "articles"), orderBy("createdAt", "desc"))
    const querySnapshot = await getDocs(q)
    
    articles.value = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
  } catch (e) {
    console.error("Erreur lecture :", e)
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <div class="max-w-4xl mx-auto p-6">
    <h1 class="text-4xl font-black text-emerald-900 mb-10 italic">Le Blog de l'Arc</h1>

    <div v-if="isLoading" class="text-center py-20">
      <p class="animate-pulse text-slate-400">Chargement des articles...</p>
    </div>

    <div v-else-if="articles.length === 0" class="text-center py-20">
      <p>Aucun article pour le moment. Allez dans l'admin pour en écrire un !</p>
    </div>

    <div v-else class="grid gap-8">
      <article v-for="post in articles" :key="post.id" class="p-8 bg-white border border-slate-100 shadow-sm rounded-[2rem]">
        <h2 class="text-2xl font-bold text-slate-800 mb-4">{{ post.title }}</h2>
        <div class="text-sm text-emerald-600 font-medium">
          Publié le {{ post.createdAt?.toDate().toLocaleDateString('fr-FR') }}
        </div>
        <img 
          v-if="post.imageUrl" 
          :src="post.imageUrl" 
          class="w-full h-64 object-cover rounded-2xl mb-6" 
          alt="Illustration article"
        />
        <p class="text-slate-600 leading-relaxed mb-6">{{ post.content }}</p>
      </article>
    </div>
  </div>
</template>