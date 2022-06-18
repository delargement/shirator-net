<template>
  <div>
    <TopBar/>
    <Nuxt />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import TopBar from "~/components/TopBar.vue";

export default Vue.extend({
  layout: 'default',
  components: {TopBar},
})
</script>

<style>
body {
  background: #242423
}
</style>
