<template>
  <header
    class="sticky top-0 z-30 lg:relative transition-all duration-[0.4s] ease w-full text-black border-b border-black bg-metalic bg-grainy"
  >
    <div class="mx-auto sm:px-6 lg:px-8 px-4 max-w-7xl relative">
      <div class="py-3 flex justify-between items-center">
        <div>
          <NuxtLink to="/" class="font-bold"
            >encordev<span class="text-emerald-800">.</span>pl</NuxtLink
          >
        </div>
        <div class="flex space-x-6 items-center">
          <div class="menu flex space-x-3 font-semibold">
            <NuxtLink class="text-dedic" to="/about"> About </NuxtLink>
          </div>
          <div
            class="bg-black rounded-md font-semibold text-white px-6 py-3 uppercase text-sm"
          >
            Kontakt
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
