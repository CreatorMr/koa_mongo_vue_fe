<template>
<div id="app" class="container">
  <Header v-if="isShowNav"/>
  <Nav v-if="isShowNav" />
  <div class="layout">
    <Slider v-if="isShowSlider"></Slider>
    <router-view />
  </div>
  <!-- <ArrowUp></ArrowUp> -->
  <Footer v-show="isShowNav"></Footer>
</div>
</template>

<script lang="ts">
import {
  Vue,
  Watch
} from "vue-property-decorator";
import Component from "vue-class-component";
import {
  Route
} from "vue-router";
import Header from "@/components/Header.vue"
import Slider from "@/components/Slider.vue"
@Component({
  components: {
    Header,
    Slider
  },
})
export default class App extends Vue {
  // 是否显示
  private isShowNav: boolean = false;
  // 是否显示slider
  private isShowSlider: boolean = false;
  mounted(): void {
    this.routeChange(this.$route, this.$route);
  }
  @Watch("$route")
  routeChange(val: Route, oldVal: Route): void {
    if (val.path === "/") {
      this.isShowNav = false;
    } else {
      this.isShowNav = true;
    }
    if (
      val.path === "/article" ||
      val.path === "/timeline" 
    ) {
      this.isShowSlider = true;
    } else {
      this.isShowSlider = false;
    }
    // if (isMobileOrPc()) {
    //   this.isShowSlider = false;
    // }
  }

}
</script>

<style>
html,
body {
  margin: 0;
}

#app {
  height: 100%;
  /* min-width: 1200px; */
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 74px;
}

@media screen and (min-width:1000px) {

  html,
  body {
    font-size: 14px;
  }
  .layout{
    display: flex;
    width: 1200px;
    margin: 0 auto;
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

  .layout {
    display: flex;
  }
}
</style>
