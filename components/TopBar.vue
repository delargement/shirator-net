<template>
  <nav class="bg-primary shadow-lg px-2 sm:px-4 py-2.5 sticky top-0 z-50 ">
    <div class="container flex flex-wrap justify-between items-center mx-auto  ">
      <a href="https://shirator.net" class="flex items-center">
        <span class="self-center text-xl font-serif whitespace-nowrap text-white1">
          shirator
        </span>
        <span class="self-center text-xl font-serif whitespace-nowrap text-accent">
          .
        </span>
        <span class="self-center text-xl font-serif whitespace-nowrap text-white1">
          net
        </span>
      </a>
      <div class="hidden md:block md:w-auto" id="mobile-menu">
        <ul class="flex flex-col  md:flex-row md:space-x-3 text-sm font-light">
          <li>
            <a href="#" class="block px-3 py-1.5 text-accent rounded-lg hover:bg-gray-700" aria-current="page">Home</a>
          </li>
          <li>
            <a href="#" class="block px-3 py-1.5 text-accent rounded-lg hover:bg-gray-700" aria-current="page">Home</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">

import Vue from "vue";

export default Vue.extend({
  name: 'TopBar',
})
</script>

<style scoped lang="scss">

</style>
