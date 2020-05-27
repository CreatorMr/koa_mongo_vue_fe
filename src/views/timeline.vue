<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    {{a}}
  </div>
</template>

<script>
// @ is an alias to /src
import test from '../components/test.md'
export default {
  name: 'Home',
  components: {
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
