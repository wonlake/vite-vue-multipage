<template>
    <el-button type="success" @click="goback">GoBack</el-button>
</template>

<script setup lang="ts">
const props = defineProps({
    backurl: String
})
function goback() {
    if(props.backurl)
        location.href = props.backurl
}
</script>