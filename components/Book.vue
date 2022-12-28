<template>
  <div class="bg-primary">
    <div class="p-6 py-5 m-1 shadow-md border-offprimary">
        <div class="flex items-center">
          <span class="self-center text-xl font-serif text-white1">{{book.title}}</span>
        </div>
        <p class="text-md text-gray-400 font-semibold py-2">{{book.author}}</p>
        <p class="font-normal text-gray-300 mb-3 ">
          {{book.comment}}
        </p>
    </div>
  </div>
<!--    <div class="p-3">-->
<!--      -->
<!--      <div class="transition ease-in-out delay-50 hover:opacity-50">-->
<!--        <img :src="'covers/'+book.cover" :alt="book.title" class="rounded-md my-1">-->
<!--      </div>-->
<!--      <p class="text-xl text-gray-200 font-serif mt-2 mb-1">{{book.title}}</p>-->
<!--      <p class="text-md text-gray-400 font-semibold">{{book.author}}</p>-->
<!--    </div>-->
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
