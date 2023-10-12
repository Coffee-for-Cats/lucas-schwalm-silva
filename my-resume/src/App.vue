<script setup>
  import Card from './components/Card.vue'
  import Carousel from './components/Carousel.vue'
</script>

<template>
  <address>
    <!-- Main article -->
    <card>
      <h1 class="text-3xl font-bold text-center">
        Lucas Schwalm Silva
      </h1>

      <!-- My techs Carousel -->
      <carousel>
        <li>JavaScript</li>
        <li>Vue.js</li>
        <li>C &#38 Rust</li>
        <li>Tailwindcss</li>
        <li>Express</li>
      </carousel>

      <ul>
        <li>☕ Bebendo Software e Codando Café</li>
        <li>💻 Engeharia de Computação - UERGS</li>
        <li>🚩 Morando em Guaíba - RS</li>
      </ul>
    </card>

    <!-- My experience -->
    <card>

    </card>

    <!-- My learnings and Objectives -->
    <card>
        
    </card>
  </address>
</template>

<style scoped>
  li {
    font-size: 1.2rem;
    margin-top: .6rem;
    font-weight: 600;
    line-height: 1.8;
  }
</style>
