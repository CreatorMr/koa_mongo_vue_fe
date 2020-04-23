<template>
  <div id="app">
    <Header/>
    <keep-alive >
      <router-view class="main"/>
    </keep-alive>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from "@/components/Header.vue"

@Component({
  components: {
    Header
  },
})
export default class App extends Vue {}
</script>

<style>
html,body{
  margin:0;
}
#app {
    height: 100%;
    /* min-width: 1200px; */
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}
@media screen and (min-width:1000px) {

  html,
  body {
    font-size: 14px;
  }
  .main {
    margin-top: 55px;
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
   .main {
    margin-top: 45px;
  }
}
</style>

