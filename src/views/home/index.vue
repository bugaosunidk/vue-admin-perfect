
<template>
  <div style="width: 100%;">
    <el-row class="row-bg" :gutter="10">
      <el-col :xs="24" :sm="12" :lg="8">
        <el-card class="box-card" style="height: 100%">
          <div class="personal">
            <div>
              <el-avatar :size="50" :src="circleUrl" />
            </div>
            <div class="name"></div>
            <div class="description"></div>
            <div class="list">
              <div>昵称：小狼</div>
              <div>职业：前端</div>
              <div>公司：小公司</div>
              <div>年龄：~~</div>
              <div>性别：男</div>
              <div>现住址：中国-浙江-杭州</div>
              <div>邮箱：1135957121@qq.com</div>
              <div>技术栈：JavaScript、HTML、CSS、Vue、Node、React</div>
            </div>
            <el-divider></el-divider>
            <div style="margin-bottom: 15px"><h5>个性标签</h5></div>
            <div>
              <el-tag style="margin-right: 10px">怕麻烦</el-tag>
              <el-tag style="margin-right: 10px">健身运动</el-tag>
              <el-tag style="margin-right: 10px">睡觉</el-tag>
              <el-tag style="margin-right: 10px">漫威</el-tag>
              <el-tag>向往</el-tag>
            </div>
            <el-divider></el-divider>
            <div style="margin-bottom: 15px"><h5>最喜欢的一句话</h5></div>
            <div>---------- 开心最重要</div>

            <el-divider></el-divider>
            <div style="margin-bottom: 15px"><h5>如果对你有帮助的话，可以麻烦点一颗 star!</h5></div>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :lg="16">
        <el-row class="custom" :gutter="10" >
          <el-col :xs="24" :sm="12" :lg="8">
            <el-card style="margin-bottom: 10px">
              <div class="grid-content">
                <div class="left"><el-icon style="font-size: 24px;color: white"><user /></el-icon></div>
                <div class="right">
                  <h2 style="color: #2d8cf0">5268</h2>
                  <div>用户访问量
                  </div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="8">
            <el-card style="margin-bottom: 10px">
              <div class="grid-content" >
                <div class="left"  style="background: #64d572"><el-icon style="font-size: 24px;color: white"><user /></el-icon></div>
                <div class="right">
                  <h2 style="color: #64d572">999</h2>
                  <div>系统消息
                  </div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :xs="24" :sm="12" :lg="8">
            <el-card style="margin-bottom: 10px">
              <div class="grid-content" >
                <div class="left" style="background: #f25e43"><el-icon style="font-size: 24px;color: white"><user /></el-icon></div>
                <div class="right">
                  <h2 style="color: #f25e43">5454545</h2>
                  <div>数量
                  </div>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>系列开源产品</span>
            </div>
          </template>
          <div style="display: flex">
            <el-card style="flex: 1;margin-right: 20px;cursor: pointer" class="card-item" @click="goTo('https://ext.dcloud.net.cn/plugin?id=7511')">
              <div style="color: white;margin-bottom: 10px"><h3>zb-table</h3></div>
              <div style="font-size: 12px;color: white">uniapp 表格组件 支持固定表头和首列、上拉加载更多、及固定多列，表格自适应内容，排序，多选checkbox、可点击删除，编辑、合计功能，兼容多端</div>
            </el-card>
            <el-card style="flex: 1;cursor: pointer" class="card-item" @click="goTo('https://github.com/zouzhibin/vue-admin-perfect')">
              <div style="color: white;margin-bottom: 10px"><h3>vue-admin-perfect</h3></div>
              <div style="font-size: 12px;color: white">系统基于vue3+vuex+ element-plus+ts后台管理系统</div>
            </el-card>
          </div>
        </el-card>
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>每周用户活跃量</span>
            </div>
          </template>
          <div>
            <bar-charts height="300px" width="100%" id="bar1"></bar-charts>
          </div>
        </el-card>

      </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
  import {
    User,
  } from '@element-plus/icons-vue'
  import {ref} from "vue";

  import BarCharts from "@/views/charts/components/simple/bar.vue"
  const circleUrl = ref('https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png')


  const goTo = (url)=>{
    window.open(url,'_blank')
  }
</script>

<style scoped lang="scss">
  .personal{
    .name{
      margin-top: 15px;
      font-size: 24px;
      font-weight: 500;
      color: rgb(38, 38, 38);
    }
    .description{
      margin-top: 8px;
    }
    .list{
      margin-top: 18px;
      line-height: 30px;
      text-align: left;
    }
  }
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .text {
    font-size: 14px;
  }
  .grid-content{
    display: flex;
    .left{
      width: 40%;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #2d8cf0;
    }
    .right{
      display: flex;
      flex-direction: column;
      padding-left: 20px;
      justify-content: center;
    }
  }
  .custom{
    ::v-deep{
      .el-card__body{
        padding: 0;
      }
    }
  }
  .item {
    margin-bottom: 18px;
  }

  .box-card {
    //height: 100%;
    margin-bottom: 10px;
    width: 100%;
  }
  .card-item{

    background: linear-gradient(50deg, #1890ff, #77e19d);
  }
</style>
