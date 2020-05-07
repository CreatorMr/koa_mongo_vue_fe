<template>
  <div class="article">
    文章页面
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { getList } from "../api/article.js"
@Component
export default class Article extends Vue {
  constructor() {
    super()
  }
  async getArticleList() {
    let res = await getList()
    console.log(res)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
