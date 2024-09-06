<template>
    <el-button type="success" class="good ext-w-15" @click="goback">GoBack</el-button>
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
@use "../../src/pages/scss/base";

.good {
    background-color: base.$bgColor;
}
</style>