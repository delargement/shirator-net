<template>
  <div class="">
    <main class="mx-auto max-w-6xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-10">

      <div>
        <h1 class="text text-6xl text-gray-300 font-serif my-10">
          Reading List
        </h1>
        <h3 class="text text-xl text-gray-300 text-accent my-10">
          In chronological order of when I picked it up.
        </h3>
      </div>

      <div v-for="subject in library" class="py-0 grid grid-cols-5">
        <h2 class="text-3xl text-accent font-semibold col-span-1">{{subject.subject}}</h2>
        <ul class="list-disc list-inside col-span-4 grid grid-cols-4">
          <book v-for="book in subject.books" :key="book.title"
                :book="book"/>
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
