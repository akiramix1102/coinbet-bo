<template>
  <div class="h-screen bg-[#f6f8fc]">
    <header-auth />
    <div class="content pt-10">
      <form-login />
    </div>
  </div>
</template>

<script setup lang="ts">
  import HeaderAuth from '@/modules/Auth/components/HeaderAuth.vue'
  import FormLogin from '@/modules/Auth/components/FormLogin.vue'
</script>

<style scoped></style>
