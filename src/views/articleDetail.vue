<template>
<div class="deatil">
  <div v-if="this.user.status== 'admin'" class="operation">
    <p>admin</p>
    <el-button type="text" @click="create" v-if="!createStatus && !editable">创建</el-button>
    <el-button type="text" v-if="!editable && !createStatus" @click="edit(true)">编辑</el-button>
    <el-button type="text" v-if="editable" @click="edit(false)">完成</el-button>
    <el-button type="text" v-if="createStatus" @click="createSubmit">提交</el-button>
    <el-button type="text" v-if="createStatus" @click="createBack">返回</el-button>
  </div>
  <div class="edit" ref="edit">
    <div>
      <div>标题： {{articleDetails.title}}</div>
      <p class="category">{{articleDetails.category.map(_=>_.name).join(',')}}</p>
      <p class="tag">{{articleDetails.tags.map(_=>_.name).join(',')}}</p>
    </div>
    <mavon-editor v-if="editable" :ishljs="true" v-model="content" ref='md' @imgAdd="$imgAdd" @imgDel="$imgDel"></mavon-editor>
    <mavon-editor v-else :ishljs="true" :subfield="false" :editable="false" defaultOpen="preview" :toolbarsFlag="false" v-model="content" ref='md'></mavon-editor>
    <div class="comment">
      评论：
      <!-- <el-input placeholder='输入评论'></el-input> -->
      <div class="addcomment">
        <el-input placeholder='输入留言' v-model="comment" @focus="focus"></el-input>
        <el-button size="mini" type="primary" @click="addComment">提交</el-button>
      </div>
      <div v-for="item in articleDetails.comments" :key="item._id" class="comment-item">
        <div>
          <img :src="item.avatar" alt="">{{item.user_name}}
        </div>
        <div>内容： {{item.content}} 时间：{{item.create_time}}</div>
      </div>
      <p>当前只支持留言，后续再开发 评论回复等交互</p>
    </div>
  </div>
  <div class="create" ref="create">
    <h1>新建文章</h1>
    <el-form :model="form" label-width="80px" :rules="rules" ref="ruleForm">
      <el-form-item label="文章标题" prop="title">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="文章描述" prop="desc">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item label="选择分类" prop="category">
        <el-select v-model="form.category" multiple placeholder="请选择活动区域">
          <el-option v-for="item in cateList" :value="item._id" :label="item.name" :key=item._id>{{item.name}}</el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="选择标签" prop="tags">
        <el-select v-model="form.tags" multiple placeholder="请选择活动区域">
          <el-option v-for="item in tagList" :value="item._id" :label="item.name" :key=item._id>{{item.name}}</el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <mavon-editor v-if="createStatus" :ishljs="true" v-model="newContent" ref='md' @imgAdd="$imgAdd" @imgDel="$imgDel"></mavon-editor>
  </div>
  <RegisterLogin :handleFlag.sync="handleFlag" :visible="visibleLogin" @cancel="visibleLogin=false" @ok="(v)=>visibleLogin=v" />
</div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Watch
} from 'vue-property-decorator';
import {
  State,
  Getter,
  Action,
} from 'vuex-class';
import {
  Route
} from "vue-router";
// import test from '../components/test.md';
import {
  uploadImg
} from "../api/uploadImg.js";
import {
  getList,
  addComments,
  getComment,
  updateArticle,
  getCategoryList,
  getTagsList,
  createArticle
} from '../api/article.js'
import RegisterLogin from '../components/Register_Login.vue';

@Component({
  components: {
    RegisterLogin
  },
})
export default class ArticleDetails extends Vue {

  @State(state => state.userInfo) user
  // @Action('userInit') userInit
  cateList = []
  tagList = []
  rules = {
    title: [{
      required: true,
      message: '请输入文章名称',
      trigger: 'blur'
    }],
    desc: [{
      required: true,
      message: '请输入文章描述',
      trigger: 'blur'
    }],
    category: [{
      required: true,
      message: '请选择分类',
      trigger: 'change'
    }],
    tags: [{
      required: true,
      message: '请选择标签',
      trigger: 'change'
    }],
  }
  articleDetails = {
    _id: '',
    content: '',
    comments: [],
    tags: [],
    category: []

  }
  form = {
    title: '',
    desc: '',
    content: '',
    category: [],
    tags: []
  }
  comment = ''
  handleFlag = 'login'
  content = ''
  newContent = ''
  status = 'preview'
  editable = false
  createStatus = false
  img_file = []
  visibleLogin = false
  async mounted() {

    this.getArticleDetail()
    const res = await getCategoryList({})
    this.cateList = res.cateList
    const resTag = await getTagsList({})
    this.tagList = resTag.tagsList
  }
  async getArticleDetail(obj = null) {
    console.log(this.$route.query, 'this.$route.query')
    const param = obj || this.$route.query
    const res = await getList(param)
    this.articleDetails = res.data
    this.content = this.articleDetails.content
  }
  async create() {
    this.createStatus = !this.createStatus
    this.$refs['edit'].classList.add('editHidden');
    this.$refs['create'].classList.add('editBlock');
    this.$refs['edit'].classList.remove('editBlock');
    this.$refs['create'].classList.remove('editHidden');
    this.$nextTick((_: any) => {
      window.scrollTo(0, 0)
    })
  }
  async createSubmit() {
    this.$refs['ruleForm'].validate(async (valid) => {
      if (valid) {
        const data = {
          ...this.form,
          author: this.user.nick_name || '游客',
          content: this.newContent
        }
        const res = await createArticle(data)
        if (res.ok) {
          this.createStatus = !this.createStatus
          this.$refs['create'].classList.add('editHidden');
          this.$refs['edit'].classList.add('editBlock');
          this.$refs['create'].classList.remove('editBlock');
          this.$refs['edit'].classList.remove('editHidden');
          this.$nextTick(_ => {
            window.scrollTo(0, 0)
          })
          this.getArticleDetail({
            articleId: res.artList._id
          })
        } else {
          this.$message.error(res.message)
          return;
        }

      } else {
        console.log('error submit!!');
        return false;
      }
    });

  }
  async createBack() {
    this.createStatus = !this.createStatus
    this.$refs['create'].classList.add('editHidden');
    this.$refs['edit'].classList.add('editBlock');
    this.$refs['create'].classList.remove('editBlock');
    this.$refs['edit'].classList.remove('editHidden');
    this.$nextTick(_ => {
      window.scrollTo(0, 0)
    })
  }
  async addComment() {
    const t = await addComments({
      article_id: this.articleDetails._id,
      content: this.comment,
      user_name: this.user.nick_name
    })
    if (t.ok) {
      // 从新获取评论列表
      const comment = await getComment({
        _id: this.articleDetails._id
      })
      console.log(comment, ' 品论列表')
      this.articleDetails.comments = comment
      this.comment = ''
    } else {
      this.$message.warning(t.message)
    }
  }
  get preview() {
    return this.status
  }
  async edit(val) {
    this.editable = val;
    if (!val) {
      // 去提交修改文章信息的接口
      const t = await updateArticle({
        article_id: this.articleDetails._id,
        ...this.articleDetails,
        content: this.content
      })
    }
  }
  async $imgAdd(pos, $file) {
    // 第一步.将图片上传到服务器.
    const formdata = new FormData();
    formdata.append('image', $file);
    this.img_file[pos] = $file;
    const res = await uploadImg(formdata)
    // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
     /**
     * 返回图片链接之后替换 成链接的方式插入图片
     */
    this.$refs.md.$img2Url(pos, res.url);
  }
  $imgDel(pos) {
    delete this.img_file[pos];
  }

  focus() {
    if (!this.user._id) {
      // 弹出登录弹窗
      this.visibleLogin = true
    }
  }

}
</script>

<style lang="scss" scoped>
.deatil {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.deatil>>>.v-note-wrapper.shadow {
  z-index: 0;
}

.operation {
  display: flex;
  position: absolute;
  right: 20px;
  flex-direction: column;
  top: 280px;
  border: 1px solid #60b7ed;
  border-radius: 20px;
  padding: 15px;
  background: #76d8be;
  justify-content: center;
  align-items: center;

  p {
    font-size: 12px;
    color: #e5e5;
  }

  .el-button {
    display: flex;
    margin: 0;
  }
}

.comment {
  display: flex;
  flex-direction: column;
}

.addcomment {
  display: flex;
}

.comment-item {
  display: flex;
}

.edit {
  position: relative;
  left: 0;
  top: 0;
  z-index: 0;
}

.create {
  position: relative;
  left: -300%;
  top: 0;
  z-index: 0;
}

.editHidden {
  animation: hiddenAnimate 1.5s ease-in-out forwards;
}

.editBlock {
  animation: blockAnimate 1.5s ease-in-out forwards;
}

@keyframes hiddenAnimate {
  0% {
    left: 0;
    height: 100%;
    display: block;
  }

  100% {
    left: -300%;
    height: 0%;
  }
}

@keyframes blockAnimate {
  0% {
    display: none;
    left: -300%;
    height: 0;
  }

  100% {
    height: 100%;
    left: 0;
  }
}
</style>
