<script setup lang="ts">
const { data } = await useFetch("/api/spotify");
console.log(data);
</script>
<template>
  <section class="flexed-line justify-center mt-5">
    <!-- Spotify Icon Component here -->

    <!-- This uses Nuxt.js component auto discovery -->
    <div
      v-if="data.item"
      class="flex items-center gap-x-3 text-white text-xs ml-2"
    >
      <img class="rounded-md" :src="data.item.album.images[2].url" />
      <a
        :href="data.item.album.external_urls.spotify"
        target="_blank"
        class="flex flex-col"
      >
        <span class="font-semibold text-green-600">{{ data.item.name }}</span>
        <span class="text-xs opacity-80">{{
          data.item.album.artists[0].name
        }}</span>
      </a>
    </div>
    <div class="flex gap-x-3 items-center" v-else>
      <icon name="logos:spotify-icon" size="30" />
      <span class="text-sm">Obecnie niczego nie słucham </span>
    </div>
  </section>
</template>
