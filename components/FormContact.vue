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
            Venez nous <span class="text-emerald-600">rencontrer</span>
          </h2>
          <p class="text-lg text-slate-600 max-w-md">
            Notre équipe est à votre disposition pour toute question ou projet.
          </p>
        </div>

        <div class="bg-white/40 backdrop-blur-lg border border-white/20 rounded-3xl shadow-xl p-8 space-y-8 transition-all duration-1000 hover:shadow-emerald-500/5 group/card">
          
          <div class="flex items-start gap-5 group/item">
            <div class="p-3 bg-emerald-500/10 rounded-xl text-emerald-600 transition-all duration-700 group-hover/item:bg-emerald-500 group-hover/item:text-white group-hover/item:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 class="text-xs font-bold uppercase tracking-widest text-emerald-700/70 mb-1">Notre agence</h3>
              <p class="text-slate-800 font-semibold leading-relaxed">
                123 Avenue du Code<br />
                75000 Paris, France
              </p>
            </div>
          </div>

          <div class="flex items-start gap-5 group/item">
            <div class="p-3 bg-emerald-500/10 rounded-xl text-emerald-600 transition-all duration-700 group-hover/item:bg-emerald-500 group-hover/item:text-white group-hover/item:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h3 class="text-xs font-bold uppercase tracking-widest text-emerald-700/70 mb-1">Téléphone</h3>
              <a href="tel:+33123456789" class="text-slate-800 font-semibold hover:text-emerald-500 transition-colors duration-500">
                +33 (0)1 23 45 67 89
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
              <h3 class="text-xs font-bold uppercase tracking-widest text-emerald-700/70 mb-1">Horaires</h3>
              <div class="space-y-1.5 mt-2">
                <div class="flex justify-between items-center text-sm">
                  <span class="text-slate-800 font-semibold">Lundi - Vendredi</span>
                  <span class="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full font-bold text-xs">09:00 — 18:00</span>
                </div>
                <div class="flex justify-between items-center text-sm text-slate-500">
                  <span class="font-medium">Samedi - Dimanche</span>
                  <span class="font-bold text-xs uppercase tracking-wider">Fermé</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>