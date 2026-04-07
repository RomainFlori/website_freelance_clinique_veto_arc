<template>
  <div class="min-h-screen bg-slate-50 py-20 px-4">
    <div class="max-w-4xl mx-auto">
      
      <div class="mb-12 space-y-4 text-center md:text-left">
        <h1 class="text-4xl font-extrabold text-slate-900">
          Mentions <span class="text-emerald-600 font-black italic">Légales</span>
        </h1>
        <p class="text-slate-400 text-sm tracking-widest uppercase">Transparence & Réglementation</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div class="bg-white/70 backdrop-blur-md border border-white/20 rounded-[2rem] p-8 shadow-xl space-y-4">
          <h2 class="text-lg font-bold text-emerald-700 uppercase tracking-wider">L'Éditeur</h2>
          <div class="text-slate-600 space-y-2 text-sm leading-relaxed">
            <p class="font-bold text-slate-900">Clinique Vétérinaire de l'Arc</p>
            <p>SELARL au capital de 10 000€</p>
            <p>123 Avenue du Code, 75000 Paris</p>
            <p>SIRET : 123 456 789 00012</p>
            <p>Tél : +33 1 23 45 67 89</p>
          </div>
        </div>

        <div class="bg-white/70 backdrop-blur-md border border-white/20 rounded-[2rem] p-8 shadow-xl space-y-4">
          <h2 class="text-lg font-bold text-emerald-700 uppercase tracking-wider">Hébergement</h2>
          <div class="text-slate-600 space-y-2 text-sm leading-relaxed">
            <p><span class="font-bold text-slate-900">Directeur de publication :</span> Dr. Sophie Martin</p>
            <div class="pt-4 border-t border-slate-100">
              <p class="font-bold text-slate-900">Hébergeur :</p>
              <p>Vercel Inc.</p>
              <p>440 N Barranca Ave #4133, Covina, CA 91723</p>
              <p>https://vercel.com</p>
            </div>
          </div>
        </div>

        <div class="md:col-span-2 bg-emerald-900/5 backdrop-blur-md border border-emerald-500/10 rounded-[2rem] p-8 shadow-xl space-y-4">
          <h2 class="text-lg font-bold text-emerald-700 uppercase tracking-wider">Ordre des Vétérinaires</h2>
          <div class="text-slate-600 text-sm leading-relaxed">
            <p>La Clinique Vétérinaire de l'Arc est inscrite au tableau de l'Ordre des Vétérinaires de la région [Ta Région].</p>
            <p class="mt-2 italic">L’exercice professionnel est régi par le Code de déontologie vétérinaire, consultable sur le site : 
              <a href="https://www.veterinaire.fr" target="_blank" class="text-emerald-600 font-bold hover:underline">www.veterinaire.fr</a>.
            </p>
          </div>
        </div>

        <div class="md:col-span-2 bg-white/40 border border-white/20 rounded-[2rem] p-8 text-center">
          <p class="text-slate-500 text-xs italic leading-relaxed">
            L'ensemble de ce site (structure, textes, logos, photographies) est protégé par le droit d'auteur. 
            Toute reproduction, même partielle, est interdite sans accord préalable de la Clinique Vétérinaire de l'Arc.
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
  </div>
</template>