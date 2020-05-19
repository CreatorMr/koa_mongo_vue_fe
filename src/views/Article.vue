<template>
  <div class="article">
    <h3 v-if="params.tag_id"
        class="left-title">{{tag_name}} 相关的文章：</h3>
    <div v-for="item in articleList" :key="item._id" class="article-item">
      title: {{item.title}}
      tags: {{item.tags}}
      分类: {{item.category}}
      描述简介: {{item.desc}}
    </div>
    
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { Route } from "vue-router";

import { getList } from "../api/article.js"
import { parseUrl } from "../api/http.js"
@Component
export default class Article extends Vue {
  articleList: Array<[]> = []
  private tag_name: string = '';
  private params = {
    keyword: "",
    likes: "", // 是否是热门文章
    state: 1, // 文章发布状态 => 0 草稿，1 已发布,'' 代表所有文章
    tag_id: '',
    category_id: '',
    pageNum: 1,
    pageSize: 10
  };
  async getArticleList() {
    const res = await getList({param:this.params})
    this.articleList = res.data
  }
  mounted () {
    this.getArticleList()
  }
  
  @Watch("$route")
  routeChange(val: Route, oldVal: Route): void {
    // 处理 获取链接上的tag_name tag_id category_id 等
    let { tag_id = '', tag_name = '', category_id = ''} = val.query
    this.tag_name = tag_name;
    this.params.tag_id = tag_id;
    this.params.category_id = category_id;
    this.articleList = [];
    this.params.pageNum = 1;
    this.getArticleList();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.article {
  /* margin: 100px 400px; */
}
.article-item {
  display: flex;
  flex-direction: column;
  border: 1px solid #2fdf3f;
  padding: 20px;
  margin-top: 20px;
  border-radius: 20px;
}
.article-item:nth-child(odd) {
  background: #2fdf3f;
}
.article-item:nth-child(even) {
  background: #7fcfe9;
}
</style>
