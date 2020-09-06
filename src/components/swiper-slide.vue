<template>
<ul class="info">
  <li>
    <router-link class="header__nav-item" :to="{name: 'Home'}">
      <p class="linear-text">Home</p>
      </router-link>
  </li>
  <li>
    <router-link class="header__nav-item" :to="{name: 'Article'}"> <p class="linear-text"> 文章</p></router-link>
  </li>
  <li>
    <router-link class="header__nav-item" :to="{name: 'Category'}"> <p class="linear-text">分类</p></router-link>
  </li>
  <li>
    <router-link class="header__nav-item" :to="{name: 'About'}"> <p class="linear-text">个人中心</p></router-link>
  </li>
  <li class="github">
    <a href="https://github.com/CreatorMr" target="_blank">
      <img src="../assets/github.jpeg" />
      <p class="linear-text">github</p>
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
  a() {
    console.log('sadfasdfa')
    this.$refs['a'].classList.add('linear-text2');
  }
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
    // border: 1px solid #FF4891;
    border-radius: 10px;
    padding: 10px;
    // background: olivedrab;
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

.linear-text2::before{
  content: '';
  position: absolute;
  left: 100%;
  height: 100%;
  width: 100%;
  background: -webkit-linear-gradient(left, transparent 0%, #000 5%, #000 100%);
  animation: hiddenRun 1s linear 1;
}

.linear-text {
  font-weight: 600;
  font-size: 28px;
  font-family: "黑体";
  color: #8c888b;
  background: -webkit-linear-gradient(45deg, #3463dc, #ea530c, #0fee50, #4e1de0, #bed5f5);
  color: transparent;
  -webkit-background-clip: text;
  animation: ran 10s linear infinite;
  overflow: hidden;
  position: relative;
  z-index: 1;
}
@keyframes hiddenRun {
  from {
    left: 100%;
  }

  to {
    left: 0%;
  }
}
@keyframes ran {
  from {
    background-position: 0 0;
  }

  to {
    background-position: 2000px 0;
  }
}
</style>
