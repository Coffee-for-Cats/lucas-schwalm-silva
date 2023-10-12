<script setup>

</script>

<template>
<div>
  <section class="flex justify-center items-center min-h-screen">
    <article class="block p-8 bg-pink-950 text-slate-50 rounded-lg shadow-2xl">
    <slot/>
  </article>
  </section>
</div>
</template>

<style>
  article {
    width: clamp(40vw, 26rem, 95vw);
    height: min(60vh, 32rem);
  }
</style>