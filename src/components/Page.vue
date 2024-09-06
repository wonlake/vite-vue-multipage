<template>
    <el-container class="h-100">
        <el-aside class="text-center ext-w-10 bg-info">
            <Menu/>
        </el-aside>
        <el-container>
            <el-header>
                <good/>
                <span class="mx-3">good</span>
                <span class="mx-3">bad</span>
            </el-header>
            <el-main>
                <slot></slot>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup lang="tsx">
import Menu from './Menu.vue'
const good = <div>render by tsx</div>
</script>

<style lang="scss" scoped>
@use '../pages/scss/base';

</style>