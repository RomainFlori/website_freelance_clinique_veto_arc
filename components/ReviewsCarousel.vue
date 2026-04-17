<template>
  <section class="py-20 relative overflow-hidden">
    <div class="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
    
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <span class="text-sm font-bold uppercase tracking-widest text-emerald-600">LEURS AVIS</span>
        <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">
          La confiance des propriétaires
        </h2>
        <div class="flex items-center justify-center gap-2 mt-4">
          <div class="flex text-yellow-400">
            <span v-for="n in 5" :key="n">★</span>
          </div>
          <span class="font-bold text-slate-700">5.0/5</span>
          <span class="text-slate-400 text-sm">sur Google Maps</span>
        </div>
      </div>

      <div class="relative max-w-5xl mx-auto overflow-hidden">
        <div 
          class="flex transition-transform duration-1000 ease-in-out"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <div 
            v-for="(review, index) in reviews" 
            :key="index"
            class="w-full flex-shrink-0 px-4"
          >
            <div class="bg-white/40 backdrop-blur-md border border-white/40 p-8 md:p-12 rounded-[2.5rem] shadow-xl max-w-3xl mx-auto text-center relative group">

              <div class="flex justify-center gap-1.5 mb-8">
                <span v-for="n in 5" :key="n" 
                  class="text-2xl transition-transform duration-500 group-hover:scale-110"
                  :class="n <= review.rating ? 'text-yellow-400' : 'text-slate-200'"
                >★</span>
              </div>

              <p class="text-slate-700 text-lg md:text-2xl italic font-medium leading-relaxed line-clamp-4 md:line-clamp-none">
                "{{ review.text }}"
              </p>

              <div class="mt-10 flex flex-col items-center">
                <div class="h-px w-12 bg-emerald-100 mb-6"></div>
                <p class="font-black text-slate-900 tracking-wider uppercase text-sm">{{ review.author }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-center gap-4 mt-12">
          <button 
            v-for="(_, index) in reviews" 
            :key="index"
            @click="currentIndex = index"
            class="h-1 rounded-full transition-all duration-700"
            :class="currentIndex === index ? 'w-12 bg-emerald-500' : 'w-4 bg-slate-200'"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const reviews = [
  {
    author: "Camille C.",
    text: "Une équipe vraiment très gentille, réactive et de bons conseils ! Merci pour tout ce que vous avez fait tous les chiens : Jagger, Gandalf et Luna 🤍",
    rating: 5
  },
  {
    author: "Francis P.",
    text: "Très agréable accueil et les toutous sont aux petits soins. Merci pour le réconfort.",
    rating: 5
  },
  {
    author: "Jenny F.",
    text: "Super vétérinaire elle m'a pris en urgence pour ma chienne jamais eu de soucis tout le personnel est au top et très gentille.",
    rating: 5
  },
  {
    author: "Patrick L.",
    text: "Vétérinaire superbe et très gentille.",
    rating: 4
  }
];

const currentIndex = ref(0);
let timer = null;

const startTimer = () => {
  timer = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % reviews.length;
  }, 6000); 
};

onMounted(() => startTimer());
onUnmounted(() => clearInterval(timer));
</script>