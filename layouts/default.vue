<template>
  <div>
    <TopBar/>
    <Nuxt />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'default'
})
</script>

<style>
body {
  background: #333533
}
</style>
