<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Markdown/>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from 'vue-property-decorator';
import Markdown from '@/components/Markdown.vue'

@Component({
  components: {
    Markdown
  },
})
export default class HelloWorld extends Vue {

}
</script>