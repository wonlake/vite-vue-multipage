<script setup lang="ts">
import Page from '../../components/Page.vue';
import GoBack from '../../components/GoBack.vue';
</script>

<template>
  <Page>
    <h1>test2</h1>
    <GoBack backurl="/"></GoBack>
  </Page>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
