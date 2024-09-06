<template>
    <VAceEditor
        v-model:value="editValue"
        v-bind="attr"
        :lang="lang"
        :theme="theme"
        :readonly="readonly"
        ref="aces"
        :options="{
        fontSize: 18,
        tabSize: 2, 
        showPrintMargin: false,
        highlightActiveLine: highlightActiveLine,
        showLineNumbers: showLineNumbers,
        showGutter: showGutter
      }"
    />
  </template>
  
  <script setup lang="ts">
  import { ref, useAttrs, watch } from 'vue'
  import { VAceEditor } from 'vue3-ace-editor'
  // 引入mode 和 theme 这里可以选择自己想要的主题和mode
  import ace from 'ace-builds'
  import modeJsUrl from 'ace-builds/src-noconflict/mode-javascript'
  import modeLuaUrl from 'ace-builds/src-noconflict/mode-lua'
  import idle_fingers from 'ace-builds/src-noconflict/theme-idle_fingers'
  import tomorrow_night from 'ace-builds/src-noconflict/theme-tomorrow_night'
  import chaos from 'ace-builds/src-noconflict/theme-chaos'
  import chrome from 'ace-builds/src-noconflict/theme-chrome'
  ace.config.setModuleUrl('ace/mode/lua', modeLuaUrl)
  ace.config.setModuleUrl('ace/mode/javascript', modeJsUrl)
  ace.config.setModuleUrl('ace/theme/idle_fingers', idle_fingers)
  ace.config.setModuleUrl('ace/theme/tomorrow_night', tomorrow_night)
  ace.config.setModuleUrl('ace/theme/chaos', chaos)
  ace.config.setModuleUrl('ace/theme/chrome', chrome)
  
  const props = defineProps({
    // mode 的类型 还有很多其他的类型，可自行去查看
    lang: {
      type: String,
      default: 'javascript',
      validator :function(value:string) {
        // 这个值必须匹配下列字符串中的一个
        return ['javascript', 'lua'].includes(value);
      }
    },
    // 是否只读
    readonly: {
      type: Boolean,
      default: false
    },
    // 是否显示行数
    showLineNumbers: {
      type: Boolean,
      default: true
    },
    // 是否显示左侧行数那列
    showGutter: {
      type: Boolean,
      default: true
    },
    value: {
      type: String,
      default: ''
    },
    // 是否有外边框
    hasBorder: {
      type: Boolean,
      default: true
    },
    // 是否高亮选中行
    highlightActiveLine: {
      type: Boolean,
      default: true
    },
    // 编辑器主题色
    theme: {
      type: String,
      default: "chaos",
    },
  })
  const emit = defineEmits(['update:value'])
  const attr = useAttrs()
  
  const editValue = ref(props.value)
  watch(() => editValue.value, (val) => {
    if (!props.readonly) {
      emit('update:value', val)
    }
  })
  watch(() => props.value, (val) => {
    if (val !== editValue.value) {
      editValue.value = val
    }
  })
  </script>
  
  <style scoped lang="scss">
  @use '../pages/scss/base';

  .edit_box {
    width: 100%;
  }
  
  .border {
    border: 1px solid #c0c4cc;
  }
  </style>