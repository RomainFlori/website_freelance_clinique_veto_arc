<template>
  <section id="equipe" class="py-24 px-4 md:px-10 bg-white">
    <div class="container mx-auto">
      
      <div class="mb-16 space-y-4">
        <h2 class="text-sm font-bold uppercase tracking-[0.3em] text-emerald-600">Notre Equipe</h2>
        <h3 class="text-4xl md:text-5xl font-extrabold text-slate-900">
          Une équipe <span class="text-emerald-500 italic font-black">passionnée</span>
        </h3>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div 
          v-for="(member, index) in team" 
          :key="index"
          class="group relative"
        >
          <div class="relative aspect-[3/4] overflow-hidden rounded-2xl md:rounded-[2.5rem] shadow-xl transition-all duration-1000 group-hover:shadow-emerald-500/20 group-hover:-translate-y-3">
            <NuxtImg 
              :src="member.image" 
              :alt="member.name"
              class="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
              loading="lazy"
            />
            
            <div class="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div class="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 z-10">
              <p class="text-white/80 text-xs uppercase tracking-widest font-bold mb-1">Biographie</p>
              <p class="text-white text-sm font-medium leading-snug">{{ member.bio }}</p>
            </div>
          </div>

          <div class="mt-6 space-y-1 px-2">
            <h4 class="text-xl font-bold text-slate-900 transition-colors duration-500 group-hover:text-emerald-600">
              {{ member.name }}
            </h4>
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 bg-emerald-500 rounded-full"></span>
              <p class="text-sm font-bold text-emerald-600 uppercase tracking-wider">
                {{ member.role }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
    const team = [
    { 
        name: "Dr. Myriam Cantrelle", 
        role: "Vétérinaire", 
        image: "https://images.unsplash.com/photo-1559839734-2b71f153678f?q=80&w=400&auto=format&fit=crop",
        bio: "Diplomée de l'école nationale vétérinaire de Nantes."
    },
    { 
        name: "Dr. Lucie Fischer", 
        role: "Vétérinaire", 
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop",
        bio: "Diplomée de l'école nationale vétérinaire de Lyon."
    },
    { 
        name: "Aurélia", 
        role: "ASV", 
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=400&auto=format&fit=crop",
        bio: "Assistante vétérinaire confirmée."
    },
    { 
        name: "Emilie", 
        role: "ASV", 
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
        bio: "Assistante vétérinaire."
    }
    ]
</script>