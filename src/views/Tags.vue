<template>
<div class="">
  <h3>标签列表</h3>
  <!--  user 权限控制 -->
  <el-button v-if="this.user.status= 'admin'" type="text" @click="dialogVisible = true">新增</el-button>
  <div class="tag">
    <div v-for="item in tagList" :key="item._id" class="tag-item">
      <router-link class="router-link" :key="item._id" :to="`/article?tag_id=${item._id}&tag_name=${item.name}`">
        <p>{{item.name}}</p>
        <p>描述简介: {{item.desc}}</p>
      </router-link>
    </div>
  </div>

  <el-dialog title="新增标签" :visible="dialogVisible" width="30%" :before-close="handleClose">
    <el-form>
      <el-formItem label="名称">
        <el-input v-model="tag.name" placeholder="名称" autocomplete="off">
        </el-input>
      </el-formItem>
      <el-formItem label="描述">
        <el-input  placeholder="描述" v-model="tag.desc" autocomplete="off"></el-input>
      </el-formItem>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="addTags">确 定</el-button>
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
  State,
  Action,
} from 'vuex-class';
import {
  Route
} from "vue-router";

import {
  getTagsList,
  addTagPost
} from "../api/article.js"
@Component
export default class tag extends Vue {
  tagList: Array < [] > = []
  tag = {
    name: '',
    desc: ''
  }
  dialogVisible = false
  @State(state => state.userInfo) user
  @Action('userInit') userInit
  async getTagListM() {
    const res = await getTagsList({})
    this.tagList = res.tagsList
  }
  async mounted() {
    this.getTagListM()
    console.log(this.user, 'this.user')
    if(!this.user._id) {
      await this.userInit()
    }
  }
  handleClose(done) {
    this.$confirm('确认关闭？')
      .then(_ => {
        done();
      })
      .catch(_ => {});
  }
  async addTags() {
    const res = await addTagPost(this.tag)
    console.log(res, 'tianjia')
    if(res.ok) {
      this.dialogVisible = false
      this.getTagListM()
      this.$message.success('标签添加成功')
    } else {
      this.$message.error(res.message)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.tag {
  /* margin: 100px 400px; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.tag-item {
  margin: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid #2fdf3f;
  padding: 20px;
  margin-top: 20px;
  border-radius: 20px;
}

.tag-item:nth-child(odd) {
  background: #2fdf3f;
}

.tag-item:nth-child(even) {
  background: #7fcfe9;
}

.router-link {
  text-decoration: none;
}
</style>
