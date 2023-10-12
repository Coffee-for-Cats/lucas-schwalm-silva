<script setup>
  import { ref } from "vue"
  const toScroll = ref(null)

  function scrollLeft() { toScroll.value.scrollBy({left: -50}) };
  function scrollRight() { toScroll.value.scrollBy({left: 50}) };
</script>

<template>
  <div class="carousel-container">
    <button @click="scrollLeft"> &lt </button>
    <ul ref="toScroll" class="carousel flex w-full">
      <slot/>
    </ul>
    <button @click="scrollRight"> &gt </button>
  </div>
</template>

<style>
  .carousel-container {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .carousel-container > button {
    height: 100%;
    font-size: 2rem;
  }

  ul.carousel {
    padding-top: .4rem;
    padding-bottom: .4rem;
    overflow: scroll;
    scrollbar-width: none;
    scroll-behavior: smooth;
  }

  ul.carousel > * {
    display: flex; align-items: center;
    white-space: nowrap;
    border: 2px solid white;
    border-radius: .4rem;
    padding: .2rem .5rem;
    margin: 0 .2rem;
    height: 2.4rem;
  }

  ul.carousel::-webkit-scrollbar {
    width: 0; height: 0;
    display: none;
  }
</style>