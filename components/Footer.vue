<template>
  <footer class="relative mt-10 md:mt-20 pb-6 md:pb-10 px-4 md:px-10">
    <div class="container mx-auto bg-white/40 backdrop-blur-xl border border-white/20 rounded-[2rem] md:rounded-[3rem] shadow-2xl p-8 md:p-16 overflow-hidden relative group">
      
      <div class="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full transition-all duration-1000 group-hover:bg-emerald-500/20"></div>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 relative z-10">
        
        <div class="md:col-span-6 space-y-6 text-center md:text-left">
          <div class="flex items-center justify-center md:justify-start gap-3">
              <div class="flex">
                <a href="#">
                  <NuxtImg class="block h-full w-full object-cover" src="/logo.png" sizes="lg:150px" format="webp" />
                </a>
                <!-- <div class="font-bold text-emerald-600 text-xl">Clinique vétérinaire de l'arc</div> -->

              <div class="flex flex-col justify-center py-1">
                <span class="font-black text-slate-900 leading-none text-lg md:text-xl uppercase tracking-tighter">
                  Clinique vétérinaire
                </span>
                <span class="font-bold text-emerald-600 leading-none text-base md:text-lg">
                  de l'arc
                </span>
              </div>
              
            </div>
          </div>
          <p class="text-slate-600 leading-relaxed max-w-sm mx-auto md:mx-0 text-base md:text-lg">
            Alliant technologies de pointe et regard humain, notre clinique offre un diagnostic de haute précision pour assurer la sérénité et la santé de vos compagnons.
          </p>
          <!-- <div class="flex justify-center md:justify-start gap-4">
            <a v-for="i in 3" :key="i" href="#" class="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 transition-all duration-700 hover:border-emerald-500 hover:text-emerald-500 hover:-translate-y-2 hover:bg-emerald-50">
              <span class="text-[10px] font-bold tracking-widest uppercase">Social</span>
            </a>
          </div> -->
        </div>

        <div class="md:col-span-6 space-y-6">
          <h4 class="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 text-center md:text-left">Navigation</h4>
          <ul class="grid grid-cols-2 md:grid-cols-1 gap-4 text-center md:text-left">
            <li v-for="link in ['Accueil', 'Services', 'Projets', 'Contact']" :key="link">
              <NuxtLink :to="link === 'Accueil' ? '/' : '/' + link.toLowerCase()" 
                class="group flex items-center justify-center md:justify-start gap-3 text-slate-500 hover:text-slate-900 transition-all duration-500">
                <span class="hidden md:block w-0 h-[2px] bg-emerald-500 transition-all duration-700 group-hover:w-4"></span>
                <span class="group-hover:translate-x-1 transition-transform duration-700 font-medium text-sm md:text-base">{{ link }}</span>
              </NuxtLink>
            </li>
          </ul>
        </div>

      </div>

      <div class="mt-12 md:mt-16 pt-8 border-t border-slate-200/50 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 text-[11px] md:text-xs">
        <p class="order-2 md:order-1">
        © {{ currentYear }} Clinique vétérinaire de l'arc
        </p>
        <div class="flex gap-6 order-1 md:order-2 font-medium">
          <a href="/mentions" class="hover:text-emerald-600 transition-colors">Mentions</a>
          <a href="/cookie" class="hover:text-emerald-600 transition-colors">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
    const currentYear = new Date().getFullYear()
</script>