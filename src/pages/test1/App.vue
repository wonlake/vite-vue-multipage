<script setup lang="ts">
import {ref} from 'vue'
import GoBack from '../../components/GoBack.vue';
import Page from '../../components/Page.vue';
import CodeEditor from '../../components/CodeEditor.vue';
const code = ref(`// 示例
var ss = 123;
function test() {
}
`)

</script>

<template>
  <Page>
    <h1>test1</h1>
    <GoBack backurl="/"></GoBack>
    <div>
      <CodeEditor v-model:value="code" theme="idle_fingers" lang="javascript" style="height:50vh;font-size: medium;"/>
    </div>
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
