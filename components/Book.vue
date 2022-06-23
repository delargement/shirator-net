<template>
    <div class="p-3">
      <img :src="'covers/'+book.cover" :alt="book.title" class="rounded-md my-1">
      <p class="text-xl text-gray-200 font-serif mt-2 mb-1">{{book.title}}</p>
      <p class="text-md text-gray-400 font-semibold">{{book.author}}</p>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Book',
  props: ['book'],
})
</script>

<style scoped lang="scss">

</style>
