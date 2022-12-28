<template>
  <div class="">
    <main class="mx-auto max-w-5xl px-4 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 mt-10">

      <div class="">
<!--        <img src="/metaballs.gif" alt="Shirator Place" class="mx-auto w-1/3 pt-0 mt-0">-->
  <!--        Placeholder image -->
        <div class="text-center mx-auto">
          <h1 class="text-4xl tracking-tight font-bold font-serif text-gray-300 sm:text-5xl md:text-6xl">
            <span class="xl:inline text-accent">Kannan Vishal</span>
            <span class="block text-4xl mt-5">Hello! I'm a high school student and prospective math major.</span>
          </h1>
        </div>
        <hr class="border-accent mx-auto my-20 w-3/12 h-2 border-dashed">
      </div>

      <h1 class="text text-6xl text-gray-300 font-serif my-10">
        Index
      </h1>

      <div class="grid grid-cols-4 py-6">
        <h2 class="text-4xl text-accent font-semibold col-span-1 ">Blog</h2>
        <ul class="list-disc list-inside col-span-3">
          <BlogCard v-for="i in 3" :key="i"/>
        </ul>
      </div>

<!--      <div class="py-6">-->
<!--        <h2 class="text-4xl text-accent font-semibold">Gallery</h2>-->
<!--        <ul class="list-disc list-inside col-span-3">-->
<!--          <BlogCard v-for="i in 1" :key="i"/>-->
<!--        </ul>-->
<!--      </div>-->

<!--      <div class="grid grid-cols-4 py-6">-->
<!--        <h2 class="text-4xl text-accent font-semibold col-span-1 ">Shirator Network</h2>-->
<!--        <ul class="list-disc list-inside col-span-3 grid grid-cols-3">-->
<!--          <AltSite v-for="site in network"-->
<!--                   :key="site.name"-->
<!--                   :description="site.description"-->
<!--                   :color="site.color"-->
<!--                   :name="site.name"-->
<!--                   class="col-span-1"-->
<!--          />-->
<!--        </ul>-->
<!--      </div>-->

    </main>
  </div>
</template>


<script lang="ts">
import Vue from 'vue'
import BlogCard from "~/components/BlogCard.vue";
import AltSite from "~/components/AltSite.vue";

export default Vue.extend({
  name: 'IndexPage',
  components: {AltSite, BlogCard},
  data() {
    return {
      // network: [{
      //   name: 'notes',
      //   link: 'https://notes.shirator.net',
      //   color: 'text-blue-200',
      //   description: 'A collection of typeset academic notes.'
      // }]
    }
  }

})
</script>
