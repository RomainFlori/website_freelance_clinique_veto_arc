<script setup>
definePageMeta({
  layout: false
})

// 1. On importe l'instance auth depuis notre fichier lib
import { auth } from '~/lib/firebase' 
import { signInWithEmailAndPassword } from 'firebase/auth'

const email = ref('')
const password = ref('')
const errorMsg = ref('')
const isLoading = ref(false)

const handleLogin = async () => {
  isLoading.value = true
  errorMsg.value = ''
  
  try {
    // 2. Connexion avec les identifiants créés dans la console Firebase
    await signInWithEmailAndPassword(auth, email.value, password.value)
    
    // 3. Redirection vers le tableau de bord si ça réussit
    await navigateTo('/admin')
  } catch (error) {
    console.error("Erreur de login:", error.code)
    // Petit message d'erreur sympa pour l'utilisateur
    errorMsg.value = "Identifiants incorrects ou problème de connexion."
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-slate-50 p-4">
    <div class="w-full max-w-md bg-white p-8 rounded-[2.5rem] shadow-xl border border-emerald-100">
      
      <div class="text-center mb-8">
        <h1 class="text-2xl font-black text-emerald-800 italic">Espace Admin - Clinique vétérinaire de l'arc</h1>
        <p class="text-slate-500 text-sm">Connectez-vous pour gérer le blog</p>
      </div>

      <div class="space-y-4">
        <input 
          v-model="email" 
          type="email" 
          placeholder="Email" 
          class="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
        />

        <input 
          v-model="password" 
          type="password" 
          placeholder="Mot de passe" 
          class="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
          @keyup.enter="handleLogin" 
        />

        <p v-if="errorMsg" class="text-red-500 text-sm pl-2">{{ errorMsg }}</p>

        <button 
          @click="handleLogin" 
          :disabled="isLoading"
          class="w-full p-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-bold shadow-lg shadow-emerald-600/20 transition-all active:scale-95 disabled:opacity-50"
        >
          {{ isLoading ? 'Connexion...' : 'Se connecter' }}
        </button>
      </div>
      
    </div>
  </div>
</template>