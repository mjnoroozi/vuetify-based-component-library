<script setup>
import { ref } from "vue";

const name = ref("javad");
</script>

<template>
  <VTextField v-model="name" />

  <div>{{ name }}</div>
</template>
