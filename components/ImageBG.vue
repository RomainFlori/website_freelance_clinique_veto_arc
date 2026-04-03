<template>
  <div class="relative w-full min-h-[60vh] md:min-h-[80vh] flex items-center overflow-hidden my-8 shadow-2xl group">
    
    <div class="container mx-auto px-6 md:px-12 lg:px-20 z-20 relative">
      <div class="grid md:grid-cols-12 gap-8 items-center">
        <div class="md:col-span-7 space-y-6 lg:space-y-8 p-8 md:p-12 
                    bg-black/20 backdrop-blur-sm rounded-3xl 
                    border border-white/10 shadow-xl 
                    transition-all duration-1000 group-hover:bg-black/30 group-hover:backdrop-blur-md">
          
          <div class="flex items-center gap-3">
            <span class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            <span class="text-sm font-semibold uppercase tracking-widest text-emerald-400">
              Notre Univers
            </span>
          </div>

          <h1 class="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
            Découvrez <br /> Notre <span class="text-emerald-400">Expertise</span>
          </h1>

          <p class="text-xl md:text-2xl text-slate-200 max-w-xl font-medium leading-relaxed">
            Une approche innovante pour des résultats exceptionnels. L'excellence au service de vos projets.
          </p>

          <div class="flex flex-wrap items-center gap-5 pt-4">
            <button class="px-8 py-4 bg-emerald-500 text-white rounded-xl font-bold text-lg 
                           shadow-lg shadow-emerald-500/20 
                           transition-all duration-700 hover:bg-emerald-600 hover:shadow-emerald-500/40 hover:-translate-y-1">
              Commencer
            </button>
            <button class="px-8 py-4 bg-white/10 text-white rounded-xl font-bold text-lg 
                           backdrop-blur-sm border border-white/20
                           transition-all duration-700 hover:bg-white/20 hover:border-white/40 hover:-translate-y-1">
              En savoir plus
            </button>
          </div>

        </div>
      </div>
    </div>

    <NuxtImg 
      src="/bg_1.png" 
      format="webp"
      alt="Arrière-plan"
      class="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-1000 group-hover:scale-105"
      sizes="sm:100vw md:100vw lg:100vw"
    />

    <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10"></div>
    
    <div class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-emerald-950/40 to-transparent z-10 opacity-60"></div>

  </div>
</template>