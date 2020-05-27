<template>
<ul class="info">
  <img class="bgImg" :src="bg" alt="" srcset="">
  <li>
    <router-link class="header__nav-item" :to="{name: 'Home'}">Home</router-link>
  </li>
  <li>
    <router-link class="header__nav-item" :to="{name: 'Article'}">文章</router-link>
  </li>
  <li>
    <router-link class="header__nav-item" :to="{name: 'Category'}">分类</router-link>
  </li>
  <li>
    <router-link class="header__nav-item" :to="{name: 'About'}">个人中心</router-link>
  </li>
  <li class="github">
    <a href="https://github.com/CreatorMr" target="_blank">
      <img src="../assets/github.jpeg" />
      github
    </a>
  </li>
</ul>
</template>

<script lang="ts">
import {
  Vue,
  Component,
  Prop
} from "vue-property-decorator";

@Component
export default class SwiperSlideCom extends Vue {
  @Prop() private bg!: string;

}
</script>

<style lang="scss" scoped>
.info {
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  list-style: none;
  font-size: 40px;
  position: relative;
 
  li{
    margin: 0 10px;
    display: flex;
    align-items: center;
    border: 1px solid #FF4891;
    border-radius: 10px;
    padding: 10px;
    background: olivedrab;
    a{
      text-decoration: none;
    }
  }
  .github {
    a{
      display: flex;
      align-items: center;
    }
    img {
      margin-right: 20px;
      width: 50px;
      height: 50px;
    }
  }
}
</style>
