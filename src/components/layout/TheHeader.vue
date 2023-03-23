<template>
  <div class="flex items-center justify-between h-full">
    <p class="text-2xl leading-8 font-semibold">{{ route.meta.title }}</p>
    <p>avatar</p>
  </div>
</template>

<script setup lang="ts">
  const route = useRoute()
</script>

<style scoped></style>
