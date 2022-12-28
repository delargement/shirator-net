<template>
  <div class="">
    <main class="mx-auto max-w-6xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-10">

      <div>
        <h1 class="text text-6xl text-gray-300 font-serif my-10">
          Library
        </h1>
        <h3 class="text text-xl text-gray-300 text-accent my-10">
          Books I've read or am currently reading.
        </h3>
      </div>

      <div v-for="subject in library" class="py-0 grid grid-cols-4 ">

        <hr class="border-accent mb-5 mt-2 h-2 border-dashed col-span-4"/>
        <div>
          <h2 class="text-3xl text-accent font-semibold col-span-1">{{subject.subject}}</h2>
        </div>


        <ul class="list-disc list-inside col-span-3 grid grid-cols-3">
          <book v-for="book in subject.books" :key="book.title"
                :book="book" :class=" book.comment ? 'col-span-3' : 'col-span-1'"/>
        </ul>
      </div>

    </main>
  </div>
</template>


<script>
import Vue from 'vue'
import BlogCard from "../components/BlogCard";
import Book from "../components/Book"

export default Vue.extend({
  name: 'LibraryPage',
  components: {BlogCard,Book},
  data() {
    return {
      msg: 'Welcome to Your Vue.js + TypeScript App',
      // books: null
    }
  },
  async asyncData({$content}) {
    const library = (await $content("/library").fetch())
    // console.log(library)
    return {
      library
    }
  }
})
</script>
