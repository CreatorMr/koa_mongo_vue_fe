<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    {{a}}
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
