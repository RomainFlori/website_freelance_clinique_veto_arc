<template>
  <div class="min-h-screen bg-slate-50 py-20 px-4">
    <div class="max-w-3xl mx-auto text-center space-y-12">
      
      <div class="flex justify-center">
        <div class="w-20 h-20 bg-emerald-500/10 rounded-3xl flex items-center justify-center text-emerald-600 shadow-xl shadow-emerald-500/5">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
      </div>

      <div class="space-y-4">
        <h1 class="text-4xl font-extrabold text-slate-900 leading-tight">
          Navigation <span class="text-emerald-600 italic">sans cookie</span>
        </h1>
        <p class="text-slate-500 text-lg font-medium">Votre vie privée ne nous regarde pas.</p>
      </div>

      <div class="bg-white/80 backdrop-blur-xl border border-white/20 rounded-[2.5rem] shadow-xl p-10 space-y-6 text-slate-700">
        <p class="text-lg leading-relaxed">
          À la <span class="font-bold text-slate-900">Clinique Vétérinaire de l'Arc</span>, nous pensons que vous n'avez pas besoin d'être "pisté" pour recevoir les meilleurs soins pour votre animal.
        </p>
        
        <div class="h-[1px] w-12 bg-emerald-200 mx-auto"></div>

        <p class="text-slate-500">
          Ce site a été conçu pour être <span class="text-emerald-600 font-semibold">totalement dépourvu de cookies</span> de traçage ou publicitaires. Nous n'utilisons aucun outil de collecte de données invisible.
        </p>
      </div>

      <NuxtLink to="/" class="inline-flex items-center gap-2 text-emerald-600 font-bold hover:gap-4 transition-all duration-500">
        <span>Retour à l'accueil</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </NuxtLink>

    </div>
  </div>
</template>