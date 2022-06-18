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
      <div class="" id="mobile-menu">
        <ul class="flex flex-row md:space-x-3 text-sm font-light">
          <li class="ml-0">
            <NuxtLink to="/" class="block px-2 py-1.5 text-accent rounded-lg hover:bg-gray-700" >Home</NuxtLink>
          </li>
          <li class="ml-0">
            <NuxtLink to="/" class="block px-2 py-1.5 text-accent rounded-lg hover:bg-gray-700" >
              Blog</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/gallery" class="block px-2 py-1.5 mx-0 text-accent rounded-lg hover:bg-gray-700" >
              Gallery</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/links" class="block px-2 py-1.5 mx-0 text-accent rounded-lg hover:bg-gray-700" >Links</NuxtLink>
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
