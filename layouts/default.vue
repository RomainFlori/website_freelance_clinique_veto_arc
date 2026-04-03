<script setup>
const isMenuOpen = ref(false)
</script>

<template>
  <div class="min-h-screen bg-white font-sans text-slate-800">
    <nav class="bg-white sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <!-- <div class="font-bold text-emerald-600 text-xl">🐾 VetoPastel</div> -->

        <div>

          <NuxtImg class="block h-full w-full object-cover" src="/logo.png" sizes="lg:150px" format="webp" />
        </div>

        
        <div class="hidden md:flex gap-6">
          <NuxtLink to="/" class="">Accueil</NuxtLink>
          <NuxtLink to="/contact" class="">Contact</NuxtLink>
        </div>


        <AppHamburger 
          :is-open="isMenuOpen" 
          @toggle="isMenuOpen = !isMenuOpen" 
        />
      </div>

      <div 
        class="grid transition-[grid-template-rows] duration-1000 ease-in-out md:hidden"
        :class="isMenuOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
      >
        <div class="overflow-hidden">
          <div class="mt-0 p-6 flex flex-col gap-5 
                      bg-gradient-to-b from-emerald-50/50 to-white 
                      ">
            
           <div class="flex flex-col gap-2 p-2">
              <NuxtLink 
                to="/" 
                class="nav-link group flex items-center justify-between p-4 rounded-2xl transition-all duration-500 hover:bg-emerald-50/50"
              >
                <span class="text-slate-600 font-medium group-[.router-link-active]:text-emerald-700 transition-colors">
                  Accueil
                </span>
                <div class="h-5 w-1 bg-emerald-500 rounded-full scale-y-0 opacity-0 group-[.router-link-active]:scale-y-100 group-[.router-link-active]:opacity-100 transition-all duration-700"></div>
              </NuxtLink>

              <NuxtLink 
                to="/contact" 
                class="nav-link group flex items-center justify-between p-4 rounded-2xl transition-all duration-500 hover:bg-emerald-50/50"
              >
                <span class="text-slate-600 font-medium group-[.router-link-active]:text-emerald-700 transition-colors">
                  Contact
                </span>
                <div class="h-5 w-1 bg-emerald-500 rounded-full scale-y-0 opacity-0 group-[.router-link-active]:scale-y-100 group-[.router-link-active]:opacity-100 transition-all duration-700"></div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <main><slot /></main>
  </div>
</template>