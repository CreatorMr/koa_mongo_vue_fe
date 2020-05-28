<template>
<div class="">
  <h3>分类列表</h3>
  <div class="cate">
    <div v-for="item in cateList" :key="item._id" class="cate-item">
      <router-link class="router-link" :to="`/article?category_id=${item._id}&category_name=${item.name}`">
        <p>{{item.name}}</p>
        <p>描述简介: {{item.desc}}</p>
      </router-link>
    </div>
  </div>

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
} from 'vuex-class';
import {
  Route
} from "vue-router";

import {
  getCategoryList,
} from "../api/article.js"
@Component
export default class Category extends Vue {
  cateList: Array < [] > = []
  cate = {
    name: '',
    desc: ''
  }

  async getcateListM() {
    const res = await getCategoryList({})
    this.cateList = res.cateList
  }
  async mounted() {
    this.getcateListM()
  }

}
</script>
<style scoped>
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
