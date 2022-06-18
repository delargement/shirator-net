<template>
  <div class="bg-primary shadow-md">
    <div class="p-6 py-5">

      <a href="https://notes.shirator.net">
      <div class="flex items-center">
        <span class="self-center text-xl font-serif whitespace-nowrap text-blue-300" :class="color">{{name}}</span>
        <span class="self-center text-xl font-serif whitespace-nowrap text-accent">.</span>
        <span class="self-center text-xl font-serif whitespace-nowrap text-white1">shirator.net</span>
      </div>
        <p class="font-normal text-gray-300 mb-3">
          {{ description }}
        </p>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AltSite',
  props: ['name','description','color','link']
})
</script>

<style scoped lang="scss">

</style>
