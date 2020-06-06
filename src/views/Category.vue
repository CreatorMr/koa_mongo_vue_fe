<template>
<div class="category">
  <h3 class="h3title" @click="addcount">分类列表</h3>
  <el-button v-if="this.user.status== 'admin' || userShow.userShow" type="text" @click="dialogVisible = true">新增</el-button>
  <div class="cate">
    <div v-for="item in cateList" :key="item._id" class="cate-item">
      <router-link class="router-link" :to="`/article?category_id=${item._id}&category_name=${item.name}`">
        <p>{{item.name}}</p>
        <p>描述简介: {{item.desc}}</p>
      </router-link>
    </div>
  </div>
  <Planet/>
  <el-dialog title="新增标签" :visible="dialogVisible" width="30%" :before-close="handleClose">
    <el-form>
      <el-formItem label="名称">
        <el-input v-model="cate.name" placeholder="名称" autocomplete="off">
        </el-input>
      </el-formItem>
      <el-formItem label="描述">
        <el-input  placeholder="描述" v-model="cate.desc" autocomplete="off"></el-input>
      </el-formItem>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="addCate">确 定</el-button>
    </span>
  </el-dialog>
</div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
  Watch
} from 'vue-property-decorator';
import {
  Getter,
  Action,
  State
} from 'vuex-class';
import {
  Route
} from "vue-router";

import {
  getCategoryList,
  addCatePost
} from "../api/article.js"
import Planet from '../components/Planet.vue' 
import { userShow } from './user.mixin.js'
console.log(userShow, 'userShow')
@Component({
  components: {
    Planet
  }
})
export default class Category implements User extends Vue {
  cateList: Array < [] > = []
  @State(state => state.userInfo) user
  cate = {
    name: '',
    desc: ''
  }
  dialogVisible = false
  userShow=userShow
  addcount() {
    userShow.addCount()
  }
  async getcateListM() {
    const res = await getCategoryList({})
    this.cateList = res.cateList
  }
  async mounted() {
    this.getcateListM()
  }
 
  async addCate() {
    const res = await addCatePost(this.cate)
    console.log(res, 'tianjia')
    if(res.ok) {
      this.dialogVisible = false
      this.getcateListM()
      this.$message.success('标签分类成功')
    } else {
      this.$message.error(res.message)
    }
  }
  handleClose(done) {
    this.$confirm('确认关闭？')
      .then(_ => {
        done();
      })
      .catch(_ => {});
  }

}
</script>
<style scoped>
.category{
  background: black;
  position: relative;
  min-height: 1000px;
}
.h3title{
  color: red;
}
.cate {
  /* margin: 100px 400px; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.cate-item {
  margin: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid #2fdf3f;
  padding: 20px;
  margin-top: 20px;
  border-radius: 20px;
}

.cate-item:nth-child(odd) {
  background: #2fdf3f;
}

.cate-item:nth-child(even) {
  background: #7fcfe9;
}

.router-link {
  text-decoration: none;
}
</style>
