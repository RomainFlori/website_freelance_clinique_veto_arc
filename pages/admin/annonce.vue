<script setup>
import { db } from '~/lib/firebase'
import { doc, getDoc, setDoc } from 'firebase/firestore'

definePageMeta({ layout: 'admin' })

const title = ref('')
const isActive = ref(false)
const startDate = ref('') 
const endDate = ref('')   
const isLoading = ref(false)
const statusMsg = ref('')
const bgColor = ref('bg-red-600')
const isSuccess = ref(false)


const colorOptions = [
  { name: 'Urgence', class: 'bg-red-600' },
  { name: 'Info', class: 'bg-blue-600' },
  { name: 'Succès/Event', class: 'bg-emerald-600' },
  { name: 'Avertissement', class: 'bg-orange-500' },
  { name: 'Sobre', class: 'bg-slate-900' },
]

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
      bgColor: bgColor.value,
      updatedAt: new Date()
    })
    statusMsg.value = "✅ Annonce mise à jour !"
    setTimeout(() => statusMsg.value = "", 3000)

    isSuccess.value = true
    setTimeout(() => {
      isSuccess.value = false
    }, 3000)

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


        <div>
          <label class="block text-sm font-bold text-slate-700 mb-3 pl-1">Couleur de fond</label>
          <div class="flex flex-wrap gap-3">
            <button 
              v-for="color in colorOptions" 
              :key="color.class"
              @click="bgColor = color.class"
              class="h-10 px-4 rounded-xl text-xs font-bold text-white transition-all border-2"
              :class="[color.class, bgColor === color.class ? 'border-slate-900 scale-105 shadow-md' : 'border-transparent opacity-70']"
            >
              {{ color.name }}
            </button>
          </div>
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
        <div v-if="title" class="p-4 rounded-2xl text-white text-center font-bold text-sm" :class="bgColor">
            Aperçu : {{ title }}
          </div>

        <button 
          @click="saveAnnonce" 
          :disabled="isLoading || isSuccess" 
          class="w-full py-4 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
          :class="[
            isSuccess ? 'bg-emerald-500 text-white scale-[1.02]' : 'bg-slate-800 text-white hover:bg-black',
            isLoading ? 'opacity-70 cursor-not-allowed' : ''
          ]"
        >
          <template v-if="isSuccess">
            <Icon name="heroicons:check-circle-solid" class="text-2xl" />
            Annonce mise à jour !
          </template>

          <template v-else-if="isLoading">
            <div class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            Enregistrement...
          </template>

          <template v-else>
            Sauvegarder les modifications
          </template>
        </button>
      </div>
    </div>
  </div>
</template>