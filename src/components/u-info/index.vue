<template>
    <div class="m-info">
        <el-popover
                width="200px"
                placement="bottom"
        >
            <template #reference>
                <el-badge :value="3"  class="item-info-pop">
                    <el-icon><Bell /></el-icon>
                </el-badge>
            </template>
            <div>
                <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
                    <el-tab-pane label="通知" name="first">
                       <div class="item-child"> github开源地址：<el-button type="text" @click="toGitHub">点我</el-button></div>
                        <div class="item-child"> github开源地址：<el-button type="text" @click="toGitHub">点我</el-button></div>
                        <div class="item-child"> github开源地址：<el-button type="text" @click="toGitHub">点我</el-button></div>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </el-popover>


    </div>

</template>

<script lang="ts" setup>
    import { ref } from 'vue'
    import type { TabsPaneContext } from 'element-plus'

    const activeName = ref('first')
    const toGitHub = ()=>{
        window.open('https://github.com/zouzhibin/vue-admin-perfect')
    }
    const handleClick = (tab: TabsPaneContext, event: Event) => {
        console.log(tab, event)
    }
</script>

<style lang="scss" scoped>
.m-info{
    width: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all .3s;
    .item-info-pop{
      //  width:100% ;
      //height: 100%;
      display: flex;
      align-items: center;
    }
    .item-child{
        display: flex;
        align-items: center;
        font-size: 13px;
    }
}
</style>
