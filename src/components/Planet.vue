<template>
<div class="planet">
  <div>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
  <div>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</div>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "vue-property-decorator";

@Component
export default class Slider extends Vue {
  mounted(): void {}
  private async handleSearch(): Promise < void > {

  }
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
}

body {
  background: black;
}

.planet {
  ul {
    list-style: none;
  }

  /* 第一个div */
  div:first-of-type {
    width: 500px;
    height: 500px;
    position: absolute;
    /* 居中 */
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border-radius: 50%;
    /** 边长的50% */
    box-shadow: 0px 0px 100px red;
    /*水平 垂直 （模糊的距离）(阴影的大小) (阴影的颜色) （内外阴影，默认外）*/
    transform: rotateX(70deg) rotateY(-20deg);

    /* -ms-transform: rotateX(70deg) rotateY(90deg);
  -moz-transform: rotateX(70deg) rotateY(90deg);
  -o-transform: rotateX(70deg) rotateY(90deg);; */
    /* 让具有3D效果的 */
    transform-style: preserve-3d;
    animation: move1 10s linear infinite;
  }

  div:first-of-type ul {
    width: 100px;
    height: 100px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -50px;
    margin-left: -50px;
    /* position: absolute;
  box-shadow: 0px 0px 100px orange; */
  }

  div:first-of-type ul li {
    width: 100%;
    height: 100%;
    border: 1px solid orange;
    border-radius: 50%;
    position: absolute;
  }

  ul li:nth-child(1) {
    transform: rotateY(20deg);
  }

  ul li:nth-child(2) {
    transform: rotateY(40deg);
  }

  ul li:nth-child(3) {
    transform: rotateY(60deg);
  }

  ul li:nth-child(4) {
    transform: rotateY(80deg);
  }

  ul li:nth-child(5) {
    transform: rotateY(100deg);
  }

  ul li:nth-child(6) {
    transform: rotateY(120deg);
  }

  ul li:nth-child(7) {
    transform: rotateY(140deg);
  }

  ul li:nth-child(8) {
    transform: rotateY(160deg);
  }

  ul li:nth-child(9) {
    transform: rotateX(180deg);
  }

  ul li:nth-child(10) {
    transform: rotateX(20deg);
  }

  ul li:nth-child(11) {
    transform: rotateX(40deg);
  }

  ul li:nth-child(12) {
    transform: rotateX(60deg);
  }

  ul li:nth-child(13) {
    transform: rotateX(80deg);
  }

  ul li:nth-child(14) {
    transform: rotateX(100deg);
  }

  ul li:nth-child(15) {
    transform: rotateX(120deg);
  }

  ul li:nth-child(16) {
    transform: rotateX(14deg);
  }

  ul li:nth-child(17) {
    transform: rotateX(160deg);
  }

  ul li:nth-child(18) {
    transform: rotateX(180deg);
  }

  div:nth-of-type(2) {
    width: 800px;
    height: 800px;
    position: absolute;
    /* 居中 */
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border-radius: 50%;
    /** 边长的50% */
    box-shadow: 0px 0px 100px #FFF;
    /*水平 垂直 （模糊的距离）(阴影的大小) (阴影的颜色) （内外阴影，默认外）*/
    transform: rotateX(70deg) rotateY(-20deg);
    transform-style: preserve-3d;
    animation: move1 18s linear infinite;
  }

  div:nth-of-type(2) ul {
    width: 80px;
    height: 80px;
    position: absolute;
    left: 50%;
    /* top: 50%; */
    margin-top: -40px;
    margin-left: -40px;
    animation: move2 18s linear infinite;
    transform-style: preserve-3d;
  }

  div:nth-of-type(2) ul li {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid blue;
    position: absolute;
    box-shadow: 0px 0px 10px blue;
  }
}

@keyframes move1 {
  from {
    transform: rotateX(70deg) rotateY(-20deg) rotateZ(0deg);
  }

  to {
    transform: rotateX(70deg) rotateY(-20deg) rotateZ(360deg);
  }
}

@keyframes move2 {
  from {
    transform: rotateZ(0deg);
  }

  to {
    transform: rotateZ(360deg);
  }
}
</style>
