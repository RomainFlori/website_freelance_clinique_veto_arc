<script setup>
import { db } from '~/lib/firebase'
import { doc, getDoc, setDoc } from 'firebase/firestore'

definePageMeta({ layout: 'admin' })

const title = ref('')
const isActive = ref(false)
const startDate = ref('') // Nouveau
const endDate = ref('')   // Nouveau
const isLoading = ref(false)
const statusMsg = ref('')

onMounted(async () => {
  const docRef = doc(db, "annonces", "alerte_principale")
  const docSnap = await getDoc(docRef)
  if (docSnap.exists()) {
    const data = docSnap.data()
    title.value = data.title
    isActive.value = data.isActive
    startDate.value = data.startDate || ''
    endDate.value = data.endDate || ''
  }
})

const saveAnnonce = async () => {
  isLoading.value = true
  try {
    await setDoc(doc(db, "annonces", "alerte_principale"), {
      title: title.value,
      isActive: isActive.value,
      startDate: startDate.value,
      endDate: endDate.value,
      updatedAt: new Date()
    })
    statusMsg.value = "✅ Annonce programmée !"
    setTimeout(() => statusMsg.value = "", 3000)
  } catch (e) {
    statusMsg.value = "❌ Erreur de sauvegarde"
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="max-w-2xl">
    <h1 class="text-3xl font-black text-slate-800 mb-8">Programmer une annonce</h1>

    <div class="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
      <div class="space-y-6">
        <div class="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
          <div>
            <span class="font-bold text-slate-700 block">Activer l'annonce</span>
            <span class="text-xs text-slate-500">L'annonce doit être active ET dans les dates pour s'afficher.</span>
          </div>
          <button @click="isActive = !isActive" :class="isActive ? 'bg-emerald-500' : 'bg-slate-300'" class="w-14 h-8 rounded-full relative transition-colors">
            <div :class="isActive ? 'translate-x-7' : 'translate-x-1'" class="absolute top-1 w-6 h-6 bg-white rounded-full transition-transform"></div>
          </button>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-bold text-slate-700 mb-2 pl-1">Date de début</label>
            <input v-model="startDate" type="date" class="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
          <div>
            <label class="block text-sm font-bold text-slate-700 mb-2 pl-1">Date de fin</label>
            <input v-model="endDate" type="date" class="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500" />
          </div>
        </div>

        <div>
          <label class="block text-sm font-bold text-slate-700 mb-2 pl-1">Message</label>
          <textarea v-model="title" class="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none h-32 focus:ring-2 focus:ring-red-500"></textarea>
        </div>

        <button @click="saveAnnonce" :disabled="isLoading" class="w-full py-4 bg-slate-800 text-white rounded-2xl font-bold hover:bg-black transition-all">
          {{ isLoading ? 'Enregistrement...' : 'Enregistrer le programme' }}
        </button>
      </div>
    </div>
  </div>
</template>