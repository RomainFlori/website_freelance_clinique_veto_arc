<script setup>
import { db, storage } from '~/lib/firebase'
import { collection, query, orderBy, onSnapshot, doc, deleteDoc } from 'firebase/firestore'
import { ref as storageRef, deleteObject } from 'firebase/storage'

definePageMeta({ layout: 'admin' })

const articles = ref([])
const isLoading = ref(true)

// --- ÉTAT DU MODAL ---
const showDeleteModal = ref(false)
const articleToDelete = ref(null)
const isDeleting = ref(false)

onMounted(() => {
  const q = query(collection(db, "articles"), orderBy("createdAt", "desc"))
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    articles.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    isLoading.value = false
  })
  onUnmounted(() => unsubscribe())
})

// Ouvrir le modal
const confirmDelete = (article) => {
  articleToDelete.value = article
  showDeleteModal.value = true
}

// Fermer le modal
const closeModal = () => {
  showDeleteModal.value = false
  articleToDelete.value = null
}

// Action de suppression réelle
const processDelete = async () => {
  if (!articleToDelete.value) return
  
  isDeleting.value = true
  try {
    if (articleToDelete.value.imageUrl) {
      const imageToDelRef = storageRef(storage, articleToDelete.value.imageUrl)
      await deleteObject(imageToDelRef).catch(e => console.warn("Image déjà absente"))
    }
    await deleteDoc(doc(db, "articles", articleToDelete.value.id))
    closeModal()
  } catch (error) {
    console.error(error)
  } finally {
    isDeleting.value = false
  }
}
</script>

<template>
  <div>
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-3xl font-black text-slate-800">Gérer les articles</h1>
    </div>

    <div class="grid gap-4">
      <div v-for="article in articles" :key="article.id" class="bg-white p-4 rounded-[2rem] border border-slate-200 flex items-center gap-6">
        <img :src="article.imageUrl || 'https://placehold.co/200'" class="w-20 h-20 object-cover rounded-2xl" />
        <div class="flex-1">
          <h2 class="font-bold text-slate-800">{{ article.title }}</h2>
        </div>
        <button 
            @click="navigateTo(`/admin/edit-${article.id}`)" 
            class="p-3 bg-slate-50 text-slate-600 rounded-xl hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
            >
            ✏️ <span class="ml-1 font-bold text-xs uppercase">Modifier</span>
            </button>
        <button @click="confirmDelete(article)" class="p-4 text-red-500 hover:bg-red-50 rounded-2xl transition-all">
          🗑️
        </button>
      </div>
    </div>

    <Transition name="fade">
      <div v-if="showDeleteModal" class="fixed inset-0 z-[999] flex items-center justify-center p-4">
        <div class="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" @click="closeModal"></div>
        
        <div class="relative bg-white w-full max-w-md rounded-[2.5rem] p-8 shadow-2xl scale-in">
          <div class="text-center">
            <div class="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
              ⚠️
            </div>
            <h3 class="text-xl font-black text-slate-800 mb-2">Supprimer l'article ?</h3>
            <p class="text-slate-500 text-sm leading-relaxed mb-8">
              Êtes-vous sûr de vouloir supprimer <span class="font-bold text-slate-700">"{{ articleToDelete?.title }}"</span> ?<br>
              Cette action est définitive.
            </p>

            <div class="flex gap-4 mt-8">
                <button 
                    @click="closeModal" 
                    class="flex-1 py-4 rounded-2xl font-bold text-slate-500 bg-slate-100 hover:zinc-500 transition-all border"
                >
                    Annuler
                </button>

                <button 
                    @click="processDelete" 
                    :disabled="isDeleting"
                    class="flex-1 py-4 rounded-2xl text-white font-bold transition-all active:scale-95 disabled:opacity-50 shadow-lg shadow-red-600/20"
                    style="background-color: #dc2626 !important;" 
                    onmouseover="this.style.backgroundColor='#b91c1c'" 
                    onmouseout="this.style.backgroundColor='#dc2626'"
                >
                    {{ isDeleting ? 'Suppression...' : 'Supprimer définitivement' }}
                </button>
                </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.scale-in {
  animation: scaleIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes scaleIn {
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
</style>