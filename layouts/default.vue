<template>
  <div
    class="antialiased bg-white dark:bg-black text-black dark:text-white min-h-screen place-content-center flex flex-col items-center justify-center text-sm sm:text-base"
  >
    <DefaultHeader />
    <div class="flex-1 flex flex-col w-full">
      <slot />
    </div>
    <DefaultFooter />
  </div>
</template>

<style scoped>
.fotter {
  background-image: url(/img/noise_bg.webp);
  background-size: cover;
}
</style>
