<template>
  <div class="inline-edit-table">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="姓名">
        <el-input v-model="formInline.user" placeholder="请输入姓名" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">搜索</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="list" style="width: 100%" :border="true" v-loading="loading">
      <el-table-column prop="id" width="60" label="id"/>
      <el-table-column prop="name" label="姓名" min-width="200px">
        <template #default="scope">
          <template v-if="scope.row.edit">
            <div style="display: flex;align-items: center;">
              <el-input v-model="scope.row.name"  size="small" />
              <el-button
                  size="small"
                  icon="Refresh"
                  type="warning"
                  @click="cancelEdit(scope.row)"
              >
                取消
              </el-button>
            </div>
          </template>
          <template v-else>{{scope.row.name}}</template>
        </template>
      </el-table-column>
      <el-table-column prop="age" label="年龄" />
      <el-table-column prop="sex" label="性别" >
        <template #default="scope">
          {{scope.row.sex?'男':'女'}}
        </template>
      </el-table-column>
      <el-table-column prop="price" label="价格" />
      <el-table-column prop="admin" label="账号"  />
      <el-table-column prop="address" label="地址"  />
      <el-table-column prop="date" label="日期"  />
      <el-table-column prop="province" label="省份"  />
      <el-table-column prop="city" label="城市"  />
      <el-table-column prop="operator" label="操作" width="180px" fixed="right">
        <template #default="scope">
          <el-button
              v-if="scope.row.edit"
              type="success"
              size="small"
              icon="CircleCheckFilled"
              @click="confirmEdit(scope.row)"
          >
            保存
          </el-button>
          <el-button
             v-else
              type="primary"
              size="small"
              icon="Edit"
             @click="scope.row.edit=!scope.row.edit"
          >
            编辑
          </el-button>

          <el-button
              type="danger"
              size="small"
              icon="Delete"
              @click="deleteAction(scope.row)"
          >
            删除
          </el-button>

        </template>
      </el-table-column>
    </el-table>
    <div style="width: 100%;display: flex;justify-content: center;padding-top: 20px">
      <el-pagination
          v-model:currentPage="currentPage1"
          :page-size="10"
          background
          layout="total, sizes, prev, pager, next, jumper"
          :total="transData.length"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import {computed, ref} from "vue";
import { ElMessage,ElMessageBox  } from 'element-plus'
const data = [
]
for(let i=0;i<100;i++){
  data.push({
    date: '2016-05-02',
    name: '王五'+i,
    price: 1+i,
    province: '上海',
    admin:"admin",
    sex:i%2?1:0,
    checked:true,
    id:i+1,
    img:"https://img1.baidu.com/it/u=300787145,1214060415&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
    age:0,
    city: '普陀区',
    address: '上海市普上海',
    zip: 200333
  })
}

const currentPage1 = ref(1)
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
  currentPage1.value = val
}

const transData = ref(data)
const loading = ref(false)

const list = computed(()=>{
  let arr = JSON.parse(JSON.stringify(transData.value))
  return arr.splice((currentPage1.value-1)*10,10)
})


const listLoading = ref(false)

const confirmEdit = (row)=>{
  row.edit = false
}

const cancelEdit = (row)=>{
  row.edit = false
}

import { reactive } from 'vue'

const formInline = reactive({
  user: '',
  region: '',
})

const onSubmit = () => {
  console.log('submit!')
  loading.value = true
  setTimeout(()=>{
    loading.value = false
  },500)
}

const deleteAction = (row)=>{
  ElMessageBox.confirm(
      '你确定要删除当前项吗?',
      '温馨提示',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        draggable: true,
      }
  )
      .then(() => {
        transData.value = transData.value.filter(item=>item.id!==row.id)
        ElMessage.success('删除成功')
      })
      .catch(() => {

      })

}

</script>
<style scoped>
.edit-input {
  padding-right: 100px;
}
.cancel-btn {
  position: absolute;
  right: 15px;
  top: 10px;
}
.inline-edit-table{
  width: 100%;
}
</style>
