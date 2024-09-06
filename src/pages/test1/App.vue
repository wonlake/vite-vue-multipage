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
    <h1 class="bg-success ext-w-10">test1</h1>
    <GoBack backurl="/"></GoBack>
    <div class="container h-75">
      <CodeEditor v-model:value="code" theme="idle_fingers" lang="javascript" class="w-100 h-100 bg-success"/>
    </div>
  </Page>
</template>

<style lang="scss" scoped>
@use "../scss/base";

</style>
