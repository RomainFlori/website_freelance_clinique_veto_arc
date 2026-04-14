<script setup>
definePageMeta({
  layout: false
})

import { auth } from '~/lib/firebase' 
import { signInWithEmailAndPassword, setPersistence, browserSessionPersistence } from 'firebase/auth'

const email = ref('')
const password = ref('')
const errorMsg = ref('')
const isLoading = ref(false)

const handleLogin = async () => {
  if (!email.value || !password.value) {
    errorMsg.value = "Veuillez remplir tous les champs."
    return
  }

  isLoading.value = true
  errorMsg.value = ''
  
  try {
    // 1. On force la persistance à "SESSION" 
    // (Déconnexion automatique à la fermeture de l'onglet/navigateur)
    await setPersistence(auth, browserSessionPersistence)
    
    // 2. Connexion
    await signInWithEmailAndPassword(auth, email.value, password.value)
    
    // 3. On enregistre l'heure pour la limite de 1h
    localStorage.setItem('admin_login_time', Date.now().toString())
    
    // 4. Redirection
    await navigateTo('/admin')
  } catch (error) {
    console.error("Erreur de login:", error.code)
    errorMsg.value = "Identifiants incorrects ou session expirée."
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-slate-50 p-4">
    <div class="w-full max-w-md bg-white p-8 rounded-[2.5rem] shadow-xl border border-emerald-100">
      
      <div class="text-center mb-8">
        <div class="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <span class="text-2xl">🔐</span>
        </div>
        <h1 class="text-2xl font-black text-emerald-800 italic leading-tight">
          Espace Admin <br>
          <span class="text-slate-400 not-italic font-medium text-lg text-emerald-600">Clinique Vétérinaire de l'Arc</span>
        </h1>
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

        <p v-if="errorMsg" class="text-red-500 text-sm font-bold pl-2 text-center">{{ errorMsg }}</p>

        <button 
          @click="handleLogin" 
          :disabled="isLoading"
          class="w-full p-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-bold shadow-lg shadow-emerald-600/20 transition-all active:scale-95 disabled:opacity-50"
        >
          {{ isLoading ? 'Connexion en cours...' : 'Se connecter' }}
        </button>
      </div>
      
    </div>
  </div>
</template>