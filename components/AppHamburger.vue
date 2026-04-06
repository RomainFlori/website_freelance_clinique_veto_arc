<script setup>
  defineProps({
    // Permet de contrôler l'état depuis le parent (ex: la Navbar)
    isOpen: {
      type: Boolean,
      default: false
    }
  })

  // On définit l'événement pour que le parent puisse réagir au clic
  defineEmits(['toggle'])
</script>

<template>
  <button 
    @click="$emit('toggle')" 
    class="relative w-10 h-10 flex flex-col justify-center items-center group focus:outline-none md:hidden"
    aria-label="Menu"
  >
    <span 
      class="block absolute h-0.5 w-6 bg-current transform transition duration-400 ease-in-out"
      :class="isOpen ? 'rotate-45' : '-translate-y-2'"
    ></span>
    
    <span 
      class="block absolute h-0.5 w-6 bg-current transform transition duration-400 ease-in-out"
      :class="isOpen ? 'opacity-0' : 'opacity-100'"
    ></span>
    
    <span 
      class="block absolute h-0.5 w-6 bg-current transform transition duration-400 ease-in-out"
      :class="isOpen ? '-rotate-45' : 'translate-y-2'"
    ></span>
  </button>
</template>