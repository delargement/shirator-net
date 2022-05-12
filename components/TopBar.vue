<template>
  <nav class="bg-primary shadow-lg px-2 sm:px-4 py-2.5 ">
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
        <ul class="flex flex-col  md:flex-row md:space-x-8 text-sm font-light">
          <li>
            <a href="#" class="block py-2 pr-4 pl-3 text-accent bg-blue-700 rounded md:bg-transparent md:p-0 " aria-current="page">Home</a>
          </li>
          <li>
            <a href="#" class="block py-2 pr-4 pl-3 text-white2 rounded md:bg-transparent  md:p-0 " aria-current="page">Home</a>
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
