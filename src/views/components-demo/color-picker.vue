
<template>
    <div class="demo-color-block">
        <span class="demonstration">使用默认值</span>
        <el-color-picker v-model="color1" />
        {{color1}}
    </div>
</template>

<script lang="ts" setup>
    import { ref } from 'vue'
    const color1 = ref('#409EFF')
</script>

<style>
    .demo-color-block {
        /*display: flex;*/
        /*align-items: center;*/
        /*margin-bottom: 16px;*/
        min-height: 500px;
    }
    .demo-color-block .demonstration {
        margin-right: 16px;
    }
</style>