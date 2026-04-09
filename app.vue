<template>
<div>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  </div>
</template>

<script setup>
  useHead({
    title: 'Accueil | Clinique Vétérinaire de l\'Arc',
    meta: [
      { name: 'description', content: 'Votre clinique vétérinaire de confiance.' }
    ]
  })
</script>