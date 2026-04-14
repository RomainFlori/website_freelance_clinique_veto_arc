<script setup>
  const isMenuOpen = ref(false)
</script>

<template>
    <nav class="bg-white sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 flex items-center justify-between">
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


        <div class="hidden md:flex gap-8 items-center">
        <NuxtLink 
            to="/#acceuil" 
            class="hover:text-emerald-600 transition-colors cursor-pointer nav-link">
            Accueil
        </NuxtLink>
          <NuxtLink 
            to="/#expertise" 
            class="hover:text-emerald-600 transition-colors cursor-pointer nav-link"
            >
            Expertise
        </NuxtLink>
        <NuxtLink 
            to="/#quisommesnous" 
            class="hover:text-emerald-600 transition-colors cursor-pointer nav-link">
            Qui sommes-nous ?
        </NuxtLink>
        <NuxtLink 
            to="/#notre-equipe" 
            class="hover:text-emerald-600 transition-colors cursor-pointer nav-link">
            Notre equipe
        </NuxtLink>
        <NuxtLink 
            to="/blog" 
            class="hover:text-emerald-600 transition-colors cursor-pointer nav-link">
            Notre blog
        </NuxtLink>
        <NuxtLink 
            to="/#contact" 
            class="hover:text-emerald-600 transition-colors cursor-pointer nav-link">
            Contact
        </NuxtLink>
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
          <div class="mt-0 p-6 flex flex-col gap-5 bg-gradient-to-b from-emerald-50/50 to-white">
           <div class="flex flex-col gap-2 p-2">
                <NuxtLink 
                  to="/" 
                  class="nav-link group flex items-center justify-between p-4 rounded-2xl transition-all duration-500 hover:bg-emerald-50/50"
                  @click="$emit('close')"
                >
                  <span class="text-slate-600 font-medium group-[.router-link-active]:text-emerald-700 transition-colors">
                    Accueil
                  </span>
                    <div class="h-5 w-1 bg-emerald-500 rounded-full scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 transition-all duration-700"></div>

                </NuxtLink>

                <NuxtLink 
                  to="/#expertise" 
                  class="nav-link group flex items-center justify-between p-4 rounded-2xl transition-all duration-500 hover:bg-emerald-50/50"
                  @click="$emit('close')"
                >
                  <span class="text-slate-600 font-medium group-hover:text-emerald-700 transition-colors">
                    Expertise
                  </span>
                  <div class="h-5 w-1 bg-emerald-500 rounded-full scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 transition-all duration-700"></div>
                </NuxtLink>

                <NuxtLink 
                  to="/#quisommesnous" 
                  class="nav-link group flex items-center justify-between p-4 rounded-2xl transition-all duration-500 hover:bg-emerald-50/50"
                  @click="$emit('close')"
                >
                  <span class="text-slate-600 font-medium group-hover:text-emerald-700 transition-colors">
                    Qui sommes-nous ?
                  </span>
                  <div class="h-5 w-1 bg-emerald-500 rounded-full scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 transition-all duration-700"></div>
                </NuxtLink>

                <NuxtLink 
                  to="/#notre-equipe" 
                  class="nav-link group flex items-center justify-between p-4 rounded-2xl transition-all duration-500 hover:bg-emerald-50/50"
                  @click="$emit('close')"
                >
                  <span class="text-slate-600 font-medium group-hover:text-emerald-700 transition-colors">
                    Notre équipe
                  </span>
                  <div class="h-5 w-1 bg-emerald-500 rounded-full scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 transition-all duration-700"></div>
                </NuxtLink>

                <NuxtLink
                  to="/blog" 
                  class="nav-link group flex items-center justify-between p-4 rounded-2xl transition-all duration-500 hover:bg-emerald-50/50"
                  @click="$emit('close')"
                >
                  <span class="text-slate-600 font-medium group-[.router-link-active]:text-emerald-700 transition-colors">
                    Notre blog
                  </span>
                  <div class="h-5 w-1 bg-emerald-500 rounded-full scale-y-0 opacity-0 group-[.router-link-active]:scale-y-100 group-[.router-link-active]:opacity-100 transition-all duration-700"></div>
                </NuxtLink>

                <NuxtLink 
                  to="/#contact" 
                  class="nav-link group flex items-center justify-between p-4 rounded-2xl transition-all duration-500 hover:bg-emerald-50/50"
                  @click="$emit('close')"
                >
                  <span class="text-slate-600 font-medium group-hover:text-emerald-700 transition-colors">
                    Contact
                  </span>
                  <div class="h-5 w-1 bg-emerald-500 rounded-full scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 transition-all duration-700"></div>
                </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </nav>

</template>