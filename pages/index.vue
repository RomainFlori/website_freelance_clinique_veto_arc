<template>
  <div class="">
        <ImageBG />
  </div>

  <FormContact />

  <div class="container md:py-24 mx-auto px-4 py-16">


    <section class="py-20 px-4 md:px-10 bg-gradient-to-b from-white to-emerald-50/30">
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
    <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8186.021331875723!2d5.732843837547963!3d43.498255010799824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c982aa83caf97b%3A0xe928995ff52a2c8d!2sClinique%20V%C3%A9t%C3%A9rinaire%20de%20l&#39;Arc%20SELARL!5e0!3m2!1sfr!2sfr!4v1775471445524!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>  </div> -->
  </div>


</template>

<script setup>
  const services = [
    { title: "Médecine générale", description: "Consultations de prévention, vaccinations et suivis de santé réguliers." },
    { title: "Radiologie", description: "Imagerie médicale haute définition pour un diagnostic précis et rapide." },
    { title: "Échographie", description: "Examens non-invasifs pour l'exploration abdominale et cardiaque." },
    { title: "Analyses sanguines", description: "Laboratoire sur place pour des résultats immédiats lors des urgences." },
    { title: "Chirurgie", description: "Bloc opératoire équipé pour les interventions de convenance ou spécialisées." },
    { title: "Études comportementales", description: "Évaluation et rééducation pour les troubles du comportement et chiens mordeurs." },
    { title: "Ostéopathie", description: "Approche manuelle pour soulager les douleurs chroniques et troubles moteurs." }
  ]
</script>