<template>
  <div class="home">
      <ul class="info">
        <li>
          <router-link class="header__nav-item" :to="{name: 'Home'}">Home</router-link>
        </li>
        <li>
          <router-link class="header__nav-item" :to="{name: 'Article'}">文章</router-link>
        </li>
         <li>
          <router-link class="header__nav-item" :to="{name: 'ArticleDetail'}">详情</router-link>
        </li>
        <li>
          <router-link class="header__nav-item" :to="{name: 'About'}">分类</router-link>
        </li>
        <li>
          <router-link class="header__nav-item" :to="{name: 'pages'}">标签</router-link>
        </li>
        <li>
          <router-link class="header__nav-item" :to="{name: 'pages'}">个人中心</router-link>
        </li>
        <li class="github">
          <a href="https://github.com/CreatorMr" target="_blank">
            <img src="../assets/github.jpeg" />
            github
          </a>

        </li>
      </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import test from '../components/test.md'
export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  data() {
    return {
      a: test
    }
  }
}
</script>
<style lang="scss" scoped>
.home{
  width: 100%;
}
</style>
