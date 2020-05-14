<template>
  <div class="article">
    <div v-for="item in articleList" :key="item._id" class="article-item">
      title: {{item.title}}
      tags: {{item.tags}}
      body: {{item.desc}}
    </div>
    
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { getList } from "../api/article.js"

@Component
export default class Article extends Vue {
  articleList: Array<[]> = []
  async getArticleList() {
    const res = await getList()
    console.log(res, '-------')
    this.articleList = res.data
    console.log(this.articleList, 'articleList')
  }
  mounted () {
    this.getArticleList()
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
