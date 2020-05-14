<template>
<div class="header-wrap">
  <header class="navbar">
    <div class="logo">
      <div class="mobile menu-icon">
        <i class="el-icon-s-unfold" v-if="drawer" @click="drawerClick(true)"></i>
        <i class="el-icon-s-fold" v-else @click="drawerClick(false)"></i>
      </div>
      <div class="logo-name">
        <img src="../assets/logo.jpg" />
        Creator</div>
    </div>
    <div class="info">
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

  </header>
  <!-- <el-drawer title="我是标题" direction="ltr" :visible.sync="drawer" :with-header="false">
    <span>我来啦!</span>
  </el-drawer> -->
  <div class="sidebar-mask" :style="{display:(drawer?'block':'none')}" @click="drawerClick(true)"></div>
  <aside class="sidebar" ref="sidebar">
    <div>
      <h3 class="name">
        CreatorMr
      </h3>
      <div class="num">
        <div>
          <h3>27</h3>
          <h6>
            <router-link class="header__nav-item" :to="{name: 'About'}">文章</router-link>
          </h6>
        </div>
        <div>
          <h3>27</h3>
          <h6>标签</h6>
        </div>
        <div>
          <h6>个人中心</h6>
        </div>
      </div>
      <hr>
    </div>
    <nav class="nav-links">
      <div class="nav-item">
        <router-link class="header__nav-item" :to="{name: 'Home'}">Home</router-link>
      </div>
    </nav>

  </aside>
</div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  @Prop() private msg!: string;
  drawer = false
  drawerClick(type: boolean) {
    this.drawer = !this.drawer
    if (!type) {
      this.$refs.sidebar['style'].transform = "translateX(0)"
    } else {
      this.$refs.sidebar['style'].transform = "translateX(-100%)"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>

.header-wrap {
  width: 100%;
  position: relative;
}

header {
  position: fixed;
  z-index: 2000;
  top: 0;
  left: 0;
  right: 0;
  height: 72px;
  box-sizing: border-box;
}

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
  text-decoration: none;
}

@media screen and (min-width:1000px) {

  html,
  body {
    font-size: 14px;
  }

  .navbar {
    font-size: 16px;
    line-height: 30px;
    box-shadow: 0px 1px 8px #978f8f;
    display: flex;
    align-items: center;
    height: 60px;
    background: #FFF;

    .logo {
      .logo-name {
        display: flex;
        align-items: center;
        font-size: 20px;

        img {
          margin-right: 10px;
          width: 30px;
          height: 30px;
        }
      }
    }

    .info {
      flex: 1;
      font-size: 18px;

      ul {
        display: flex;
        flex: 1;
        justify-content: flex-end;
      }

      .github {
        a {
          display: flex;
          align-items: center;
        }

        img {
          margin-right: 10px;
          width: 15px;
          height: 15px;
        }
      }
    }

    .menu-icon {
      font-size: 40px;
    }

  }

  .mobile {
    display: none;
  }

  .sidebar {
    display: none;
  }
}

@media screen and (max-width:1000px) and (min-width:768px) {

  html,
  body {
    font-size: 13px;
  }
}

@media screen and (max-width:768px) {

  html,
  body {
    font-size: 12px;
  }

  .mobile {
    // display: none;
  }

  .navbar {
    padding-left: 4px;
    padding: 5px 10px;
    line-height: 10px;
    box-shadow: 0px 1px 8px #978f8f;
    display: flex;
    align-items: center;
    height: 60px;
    background: #FFFFFF;

    .info {
      display: none;
    }

    .logo {
      display: flex;
      align-items: center;

      .logo-name {
        margin-left: 10px;
        display: flex;
        align-items: center;
        font-size: 20px;

        img {
          margin-right: 10px;
          width: 30px;
          height: 30px;
        }
      }
    }
  }

  .home {
    margin-top: 50px;
  }

  .sidebar-mask {
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.65);
  }

  .sidebar {
    width: 50%;
    background: #FFFFFF;
    box-shadow: 6px 0px 10px #d6c8c8;
    height: 100%;
    position: fixed;
    margin-top: -10px;
    left: -12px;
    z-index: 1999;
    transform: translateX(-100%);
    transition: transform 0.2s ease;
  }
}
</style>
