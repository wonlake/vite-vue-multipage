<template>
    <el-button type="success" @click="goback">GoBack</el-button>
    <h class="good">good</h>
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
<style lang="scss" scoped>
@import "@/../../src/pages/assets/base.scss";

.good {
    background-color: $bgColor;
}
</style>