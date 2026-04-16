<template>
  <div class="container mx-auto px-4 py-16 md:py-24">
    <div class="grid md:grid-cols-12 gap-12 lg:gap-20 items-center">
      
      <div class="md:col-span-6 relative group">
        <div class="absolute -inset-4 bg-emerald-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
        
        <div class="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl transition-all duration-1000 group-hover:shadow-emerald-500/10 group-hover:scale-[1.01]">
          <img 
            src="/public/cliniqueveto1.png" 
            alt="Contactez-nous"
            class="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          />
        </div>
    
      </div>

      <div class="md:col-span-6 space-y-12">
        
        <div class="space-y-3">
          <span class="text-sm font-bold uppercase tracking-widest text-emerald-600">Contact</span>
          <h2 class="text-4xl lg:text-5xl font-extrabold text-slate-950 leading-tight">
            Confiez-nous la santé de vos  <span class="text-emerald-600">compagnons</span>
          </h2>
          <!-- <p class="text-lg text-slate-600 max-w-md">
            Notre équipe est à votre disposition pour toute question ou projet.
          </p> -->
        </div>

        <div class="bg-white/40 backdrop-blur-lg border border-white/20 rounded-3xl shadow-xl p-6 space-y-8 transition-all duration-1000 hover:shadow-emerald-500/5 group/card">
          
          <div class="flex items-start gap-5 group/item">
            <div class="p-3 bg-emerald-500/10 rounded-xl text-emerald-600 transition-all duration-700 group-hover/item:bg-emerald-500 group-hover/item:text-white group-hover/item:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 class="text-xs font-bold uppercase tracking-widest text-emerald-700/70 mb-1">Notre adresse</h3>
              <p class="text-slate-800 font-semibold leading-relaxed">
                561 Rte de Trets<br />
                83910 Pourrières, France
              </p>
            </div>
          </div>

          <div class="flex items-start gap-5 group/item">
            <div class="p-3 bg-emerald-500/10 rounded-xl text-emerald-600 transition-all duration-700 group-hover/item:bg-emerald-500 group-hover/item:text-white group-hover/item:scale-110">
              <a href="tel:+33494784606" >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              </a>

            </div>
            <div>
              <h3 class="text-xs font-bold uppercase tracking-widest text-emerald-700/70 mb-1">Téléphone</h3>
              <a href="tel:+33494784606" class="text-slate-800 font-semibold hover:text-emerald-500 transition-colors duration-500">
                0494784606
              </a>
            </div>
          </div>

          <div class="flex items-start gap-5 group/item">
            <div class="p-3 bg-emerald-500/10 rounded-xl text-emerald-600 transition-all duration-700 group-hover/item:bg-emerald-500 group-hover/item:text-white group-hover/item:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="w-full">
              <h3 class="text-xs font-bold uppercase tracking-widest text-emerald-700/70 mb-3">Horaires d'ouverture</h3>
              
              <div class="space-y-3 mt-2">
                <div class="flex justify-between items-start text-sm">
                  <span class="text-slate-800 font-semibold leading-tight">Lundi, Mardi</span>
                  <div class="flex flex-col items-end gap-1 whitespace-nowrap">
                    <span class="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full font-bold text-[11px]">08:30 — 12:00</span>
                    <span class="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full font-bold text-[11px]">15:00 — 19:00</span>
                  </div>
                </div>

                <div class="flex justify-between items-start text-sm pt-1 border-t border-slate-100">
                  <span class="text-slate-800 font-semibold mt-1">Mercredi</span>
                  <div class="flex flex-col items-end gap-1 mt-1">
                    <span class="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full font-bold text-[11px]">08:30 — 12:00</span>
                    <span class="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full font-bold text-[11px]">15:00 — 18:00</span>
                  </div>
                </div>

                <div class="flex justify-between items-start text-sm pt-1 border-t border-slate-100">
                  <span class="text-slate-800 font-semibold leading-tight">Jeudi, Vendredi</span>
                  <div class="flex flex-col items-end gap-1 whitespace-nowrap">
                    <span class="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full font-bold text-[11px]">08:30 — 12:00</span>
                    <span class="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full font-bold text-[11px]">15:00 — 19:00</span>
                  </div>
                </div>

                <div class="flex justify-between items-center text-sm pt-1 border-t border-slate-100">
                  <span class="text-slate-800 font-semibold">Samedi</span>
                  <span class="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full font-bold text-[11px]">08:30 — 12:00</span>
                </div>

                <div class="flex justify-between items-center text-sm text-slate-400 pt-1 border-t border-slate-50">
                  <span class="font-medium">Dimanche</span>
                  <span class="font-bold text-[10px] uppercase tracking-wider bg-slate-50 px-3 py-1 rounded-full">Fermé</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>