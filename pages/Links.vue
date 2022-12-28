<template>
  <div class="">
    <main class="mt-10 mx-auto max-w-6xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div>
        <h1 class="text text-6xl text-gray-300 font-serif my-10">
          Socials
        </h1>
      </div>
      <div class="grid grid-cols-3 py-6">
        <ul class="list-disc list-inside col-span-3 grid grid-cols-3">
          <AltSite v-for="site in network"
                   :key="site.name"
                   :description="site.description"
                   :link="site.link"
                   :place="site.place"
                   :color="site.color"
                   :name="site.name"
                   class="col-span-1"
          />
        </ul>
      </div>
    </main>
  </div>
</template>

<script lang="ts">

import Vue from "vue";

export default Vue.extend({
  name: 'LinksPage',
  data() {
    return {
      network: [{
        place: 'Github',
        name: 'delargement',
        link: 'https://github.com/delargement',
        color: 'text-violet-500',
      },
        {
          place: 'Instagram',
          name: '@kvkvkvnokv',
          color: 'text-pink-500',
        },
        {
          place: 'mathstodon.xyz',
          name: '@shirator',
          color: 'text-indigo-500',
        }
      ]
    }
  }

})

</script>
