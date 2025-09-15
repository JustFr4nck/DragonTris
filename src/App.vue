<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <RouterLink to="/"/>
    <RouterLink to="/choose"/>
    <RouterLink to="/game"/>
    <RouterView />
  </div>
</template>
