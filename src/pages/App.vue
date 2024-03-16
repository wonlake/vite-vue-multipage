<script setup lang="ts">
import Page from '../components/Page.vue';

function goto(url: string) {
  location.href = url
}
</script>

<template>
  <Page>
      <el-button type="success" @click="goto('test1/index.html')">test1</el-button>
      <el-button type="success" @click="goto('test2/index.html')">test2</el-button>
      <el-button type="success" @click="goto('test3/index.html')">test3</el-button>
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
