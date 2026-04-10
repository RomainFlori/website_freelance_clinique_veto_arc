<script setup>
import { db } from '~/lib/firebase'
import { doc, onSnapshot } from 'firebase/firestore'

  const services = [
    { title: "Médecine générale", description: "Consultations de prévention, vaccinations et suivis de santé réguliers." },
    { title: "Radiologie", description: "Imagerie médicale haute définition pour un diagnostic précis et rapide." },
    { title: "Échographie", description: "Examens non-invasifs pour l'exploration abdominale." },
    { title: "Analyses sanguines", description: "Laboratoire sur place pour des résultats immédiats lors des urgences." },
    { title: "Chirurgie", description: "Bloc opératoire équipé pour les interventions de convenance ou spécialisées." },
    { title: "Études comportementales", description: "Évaluation et rééducation pour les troubles du comportement et chiens mordeurs." },
    { title: "Ostéopathie", description: "Approche manuelle pour soulager les douleurs chroniques et troubles moteurs." }
  ]

const annonceData = ref(null)

onMounted(() => {
  onSnapshot(doc(db, "annonces", "alerte_principale"), (doc) => {
    if (doc.exists()) {
      annonceData.value = doc.data()
    }
  })
})

// Logique de vérification des dates
const isVisible = computed(() => {
  if (!annonceData.value || !annonceData.value.isActive) return false
  
  const today = new Date().toISOString().split('T')[0] // Format YYYY-MM-DD
  const start = annonceData.value.startDate
  const end = annonceData.value.endDate

  // Si aucune date n'est saisie, on considère qu'elle est toujours visible si active
  if (!start && !end) return true

  // Vérification de la période
  const afterStart = start ? today >= start : true
  const beforeEnd = end ? today <= end : true

  return afterStart && beforeEnd
})
</script>


<template>

  <div>
    <Transition name="fade">
      <div v-if="isVisible" class="bg-red-600 text-white py-6 px-4 shadow-xl relative z-40">
        <div class="max-w-6xl mx-auto flex items-center justify-center gap-4 text-center">
          <span class="text-2xl hidden md:inline">⚠️</span>
          <p class="text-xl font-black uppercase tracking-wide">{{ annonceData.title }}</p>
          <span class="text-2xl hidden md:inline">⚠️</span>
        </div>
      </div>
    </Transition>
    </div>

  <ImageBG id="acceuil"/>

  <div class="container md:py-24 mx-auto px-4 py-16">

    <section class="py-20 px-4 md:px-10 bg-gradient-to-b from-white rounded-3xl" id="expertise">
      <div class="container mx-auto">
        
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 class="text-sm font-bold uppercase tracking-[0.3em] text-emerald-600">Nos Expertises</h2>
          <h3 class="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Une prise en charge <span class="text-emerald-500">complète</span> pour vos compagnons
          </h3>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(service, index) in services" 
            :key="index"
            class="group relative p-8 bg-white/60 backdrop-blur-md border border-white/20 rounded-[2rem] shadow-xl hover:shadow-emerald-500/10 transition-all duration-1000 hover:-translate-y-2 overflow-hidden"
          >
            <div class="absolute -right-8 -top-8 w-24 h-24 bg-emerald-500/5 rounded-full group-hover:bg-emerald-500/10 transition-all duration-1000 group-hover:scale-150"></div>

            <div class="relative z-10 space-y-4">
              <!-- <div class="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-700">
                <span class="font-bold text-lg leading-none">+</span>
              </div> -->
              
              <h4 class="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors duration-700">
                {{ service.title }}
              </h4>
              
              <p class="text-slate-500 leading-relaxed text-sm">
                {{ service.description }}
              </p>

              <!-- <div class="pt-4 flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-widest opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-1000">
                Détails
                <span class="w-4 h-[1px] bg-emerald-600"></span>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="notre-clinique" class="py-24 bg-white overflow-hidden">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-col lg:flex-row items-center gap-16">
          
          <div class="flex-1 relative">
            <div class="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="/public/facade.jpg" 
                alt="Clinique Vétérinaire de l'Arc" 
                class="w-full h-[500px] object-cover"
              />
            </div>
            <div class="absolute  -bottom-6 -left-6 w-64 h-64 bg-emerald-100 rounded-full -z-10 blur-3xl opacity-60"></div>
            <div class="absolute h-24 w-24 -top-10 -right-10 p-8 bg-emerald-600 rounded-[2rem] shadow-xl hidden lg:block">
            </div>
          </div>

          <div class="flex-1 space-y-8">
            <div class="space-y-4">
              <span class="text-emerald-600 font-bold uppercase tracking-[0.3em] text-sm">Qui sommes-nous ?</span>
              <h2 class="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                Une équipe passionnée au service de <span class="text-emerald-600 italic">vos compagnons.</span>
              </h2>
            </div>

            <p class="text-lg text-slate-600 leading-relaxed">
              Située à Pourrières, au pied de la Sainte-Victoire, la <strong>Clinique Vétérinaire de l'Arc</strong> fondée il y a plus de 20 ans par le Dr. Myriam Cantrelle.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center shrink-0">
                  <Icon name="heroicons:heart-solid" class="text-emerald-600 text-2xl" />
                </div>
                <div>
                  <h4 class="font-bold text-slate-800">Où se stationner ?</h4>
                  <p class="text-sm text-slate-500 text-balance">Parking gratuit devant la clinique.</p>
                </div>
              </div>
            </div>

            <div class="pt-6">
              <NuxtLink 
                to="/#equipe" 
                class="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-emerald-600 transition-all hover:shadow-xl hover:shadow-emerald-200 active:scale-95"
              >
                Découvrez notre equipe
                <Icon name="heroicons:arrow-right" class="text-xl" />
              </NuxtLink>
            </div>
          </div>

        </div>
      </div>
    </section>

    <NotreEquipe/>

    <FormContact id="contact" />

    <section class="relative w-full h-[400px] md:h-[550px] overflow-hidden group ">
      
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8186.021331875723!2d5.732843837547963!3d43.498255010799824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c982aa83caf97b%3A0xe928995ff52a2c8d!2sClinique%20V%C3%A9t%C3%A9rinaire%20de%20l&#39;Arc%20SELARL!5e0!3m2!1sfr!2sfr!4v1775471445524!5m2!1sfr!2sfr"
        class="w-full h-full border-0"
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
  
      <div class="absolute top-6 right-6 z-20 bg-white/70 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-white/20 flex items-center gap-3 transition-all duration-1000 group-hover:translate-y-1">
        <div class="p-2 bg-emerald-500 rounded-lg text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          </svg>
        </div>
        <span class="text-sm font-semibold text-slate-800 pr-2">Nous trouver</span>
      </div>
  
    </section>
  </div>


  <!-- <section class="relative -mt-16 z-20 pb-20 px-4 md:px-10 overflow-hidden group">
    
    <div class="container mx-auto">
      <div class="grid md:grid-cols-12 items-center gap-12">
        
        <div class="md:col-span-8 relative">
          <div class="absolute -inset-10 bg-emerald-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

          <div class="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl border-4 border-white transition-all duration-1000 group-hover:shadow-emerald-500/10 group-hover:scale-[1.01]">
            
            <img 
              src="/public/facade.jpg" 
              alt="Façade moderne de la clinique"
              class="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
            />

            <div class="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent"></div>
          </div>
        </div>

        <div class="md:col-span-4 space-y-3 opacity-80 group-hover:opacity-100 transition-opacity duration-700">
          <div class="flex items-center gap-2">
            <span class="w-1 h-1 bg-emerald-500 rounded-full animate-pulse"></span>
            <span class="text-xs font-bold uppercase tracking-widest text-emerald-600">
              Notre facade
            </span>
          </div>
          <p class="text-slate-500 text-sm leading-relaxed font-medium">
            Parking gratuit devant la clinique.
          </p>
        </div>

      </div>
    </div>
  </section> -->
  


</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: all 0.5s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(-100%); }
</style>