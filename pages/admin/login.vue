<script setup>
definePageMeta({
  layout: false
})

import { 
  signInWithEmailAndPassword, 
  setPersistence, 
  browserSessionPersistence, 
  signInWithPopup 
} from 'firebase/auth'
import { auth, googleProvider } from '~/lib/firebase'

const email = ref('')
const password = ref('')
const errorMsg = ref('')
const isLoading = ref(false)

// --- FONCTION CONNEXION GOOGLE ---
const loginWithGoogle = async () => {
  isLoading.value = true
  errorMsg.value = ""

  try {    
    const result = await signInWithPopup(auth, googleProvider)
    const user = result.user

    // Liste blanche des emails autorisés
    const allowedEmails = ['deltataggeur@gmail.com', 'associe@gmail.com']

    if (!allowedEmails.includes(user.email)) {
      await auth.signOut()
      errorMsg.value = "🚫 Accès refusé : votre compte n'est pas autorisé."
      return
    }

    // Si OK, on gère la session
    localStorage.setItem('admin_login_time', Date.now().toString())
    await navigateTo('/admin/articles')
    
  } catch (error) {
    console.error("Erreur Google:", error)
    errorMsg.value = "La connexion Google a échoué ou a été annulée."
  } finally {
    isLoading.value = false
  }
}

// --- FONCTION CONNEXION EMAIL CLASSIQUE ---
const handleLogin = async () => {
  if (!email.value || !password.value) {
    errorMsg.value = "Veuillez remplir tous les champs."
    return
  }

  isLoading.value = true
  errorMsg.value = ''
  
  try {
    await setPersistence(auth, browserSessionPersistence)
    await signInWithEmailAndPassword(auth, email.value, password.value)
    
    localStorage.setItem('admin_login_time', Date.now().toString())
    await navigateTo('/admin/articles') // On redirige vers les articles
  } catch (error) {
    console.error("Erreur de login:", error.code)
    errorMsg.value = "Identifiants incorrects."
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-slate-50 p-4 font-sans text-slate-900">
    <div class="w-full max-w-md bg-white p-8 rounded-[2.5rem] shadow-xl border border-emerald-100">
      
      <div class="text-center mb-8">
        <div class="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <span class="text-2xl">🔐</span>
        </div>
        <h1 class="text-2xl font-black text-slate-800 italic leading-tight">
          Espace Admin <br>
          <span class="text-emerald-600 not-italic font-medium text-lg">Clinique Vétérinaire de l'Arc</span>
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

        <p v-if="errorMsg" class="text-red-500 text-sm font-bold pl-2 text-center animate-pulse">
          {{ errorMsg }}
        </p>

        <button 
          @click="handleLogin" 
          :disabled="isLoading"
          class="w-full p-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-bold shadow-lg shadow-emerald-600/20 transition-all active:scale-95 disabled:opacity-50"
        >
          {{ isLoading ? 'Connexion...' : 'Se connecter' }}
        </button>

        <div class="relative py-2">
           <div class="absolute inset-0 flex items-center"><div class="w-full border-t border-slate-100"></div></div>
           <div class="relative flex justify-center text-xs uppercase"><span class="bg-white px-2 text-slate-400 font-bold">Ou</span></div>
        </div>

        <button 
          @click="loginWithGoogle"
          :disabled="isLoading"
          type="button"
          class="w-full flex items-center justify-center gap-3 py-4 bg-white border border-slate-200 rounded-2xl font-bold text-slate-700 hover:bg-slate-50 hover:shadow-md transition-all active:scale-[0.98] disabled:opacity-50"
        >
          <svg class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Google Admin Login
        </button>
      </div>
    </div>
  </div>
</template>