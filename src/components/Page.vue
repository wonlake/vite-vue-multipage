
<template>
    <el-container>
        <el-aside style="height:100vh" width="100px">
            <Menu/>
        </el-aside>
        <el-container>
            <el-header>
                <good/>
                <div>
                <div style="display:inline-block;background-color: red; border: solid 10px green; width:50px;height:50px;margin-left: -10px;padding-left:0px ;"><span style="background-color: aqua;">good</span></div>
                <div style="display:inline-block;background-color: red; border: solid 10px black; width:50px;height:50px;margin-left: -10px;">bad</div>
                </div>
            </el-header>
            <el-main>
                <h1>mymain</h1>
                <slot></slot>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup lang="tsx">
import Menu from './Menu.vue'
const good = <div>are you ok</div>
</script>

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