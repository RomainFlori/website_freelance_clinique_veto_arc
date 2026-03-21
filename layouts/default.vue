<script setup>
const isMenuOpen = ref(false)
</script>

<template>
  <div class="min-h-screen bg-white font-sans text-slate-800">
    <nav class="bg-white border-b border-emerald-100 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div class="font-bold text-emerald-600 text-xl">🐾 VetoPastel</div>
        
        <div class="hidden md:flex gap-6">
          <NuxtLink to="/" class="hover:text-emerald-500">Accueil</NuxtLink>
          <NuxtLink to="/contact" class="hover:text-emerald-500">Contact</NuxtLink>
        </div>

        <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-2xl">
          {{ isMenuOpen ? '✕' : '☰' }}
        </button>
      </div>

      <div v-if="isMenuOpen" class="md:hidden bg-emerald-50 p-4 flex flex-col gap-4">
        <NuxtLink to="/" @click="isMenuOpen = false">Accueil</NuxtLink>
        <NuxtLink to="/contact" @click="isMenuOpen = false">Contact</NuxtLink>
      </div>
    </nav>

    <main><slot /></main>
  </div>
</template>