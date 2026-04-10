<template>
  <div class="min-h-screen bg-slate-50 flex">
    <aside class="w-72 bg-emerald-900 text-white flex flex-col fixed h-full shadow-2xl">
      <div class="p-8">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 bg-emerald-400 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-400/20">
            <span class="text-emerald-900 font-black">ARC</span>
          </div>
          <div>
            <h2 class="font-black italic text-xl tracking-tight">CLINIQUE <span class="text-emerald-400">ARC</span></h2>
            <p class="text-[10px] uppercase tracking-[0.2em] text-emerald-300/60 font-bold">Administration</p>
          </div>
        </div>
      </div>

      <nav class="flex-1 px-4 py-4 space-y-2">
        <NuxtLink 
          to="/admin" 
          class="flex items-center gap-3 px-4 py-3 rounded-xl transition-all hover:bg-emerald-800 group"
          active-class="bg-emerald-800 text-emerald-300 shadow-inner"
        >
          <span class="text-xl">📝</span>
          <span class="font-bold">Rédiger un blog</span>
        </NuxtLink>

        <NuxtLink 
          to="/admin/articles" 
          class="flex items-center gap-3 px-4 py-3 rounded-xl transition-all hover:bg-emerald-800 group"
          active-class="bg-emerald-800 text-emerald-300 shadow-inner"
        >
          <span class="text-xl">📚</span>
          <span class="font-bold">Gérer les articles</span>
        </NuxtLink>

        <NuxtLink 
          to="/admin/annonce" 
          class="flex items-center gap-3 px-4 py-3 rounded-xl transition-all hover:bg-red-800/40 text-red-200 group border border-transparent"
          active-class="bg-red-600/20 !text-red-400 border-red-500/30 shadow-inner"
        >
          <span class="text-xl">⚠️</span>
          <span class="font-bold">Annonce Urgente</span>
        </NuxtLink>
      </nav>

      <div class="p-6 border-t border-emerald-800/50 bg-emerald-950/30">
        <div class="flex items-center gap-3 mb-6 px-2">
          <div class="w-8 h-8 rounded-full bg-emerald-700 flex items-center justify-center text-xs border border-emerald-500/30 font-bold">
            {{ userEmail?.charAt(0).toUpperCase() || 'A' }}
          </div>
          <div class="truncate">
            <p class="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">Admin</p>
            <p class="text-xs truncate text-emerald-100 font-medium">{{ userEmail }}</p>
          </div>
        </div>

        <button 
          @click="handleLogout"
          class="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition-all font-bold text-sm"
        >
          <span>🚪</span>
          Déconnexion
        </button>
      </div>
    </aside>

    <main class="flex-1 ml-72">
      <div class="p-8 md:p-12">
        <slot />
      </div>
    </main>
  </div>
</template>

<script setup>
import { auth } from '~/lib/firebase'
import { signOut } from 'firebase/auth'

const userEmail = ref('')

onMounted(() => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      userEmail.value = user.email
    }
  })
})

const handleLogout = async () => {
  if (confirm('Voulez-vous vraiment vous déconnecter ?')) {
    await signOut(auth)
    navigateTo('/admin/login')
  }
}
</script>