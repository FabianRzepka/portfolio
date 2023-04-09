<script setup>
import { ref } from "vue";

const mouseOver = ref(false);
</script>

<template>
  <ClientOnly>
    <kinesis-container
      :duration="1500"
      @mouseover="mouseOver = true"
      @mouseleave="mouseOver = false"
      :class="{ 'mouse-over': mouseOver }"
      class="relative z-10 bg-metalic w-full bg-grainy overflow-hidden"
    >
      <div
        class="relative z-10 mx-auto sm:px-6 lg:px-8 px-4 max-w-7xl h-full py-10 lg:py-36"
      >
        <div
          class="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16 pb-10"
        >
          <div class="relative flex flex-col gap-6 justify-center text-black">
            <h1 class="leading-relaxed text-xl font-bold">
              <span> Cześć, nazywam się Fabian. </span>
            </h1>
            <h1 class="leading-relaxed">Web Developer & UI Designer</h1>
            <span class="text-xl leading-relaxed">
              Jestem programistą webowym z kilkuletnim doświadczeniem w
              tworzeniu i implementacji stron internetowych oraz bardziej
              rozbudowanych aplikacji internetowych.
            </span>
            <span class="text-lg leading-relaxed">
              Posiadam umiejętności z zakresu projektowania interfejsów
              użytkownika oraz dodatkowo zajmuję się grafiką, co pozwala mi
              tworzyć strony internetowe, które są nie tylko estetyczne, ale
              również przyjazne i intuicyjne dla użytkowników.
            </span>
          </div>
          <div
            class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row"
          >
            <IndexHeroCard class="w-full" />

            <img
              src="/img/circle.svg"
              class="circle-info z-20 relative animate-[spin_25s_ease-in-out_infinite]"
            />
          </div>
        </div>
      </div>

      <div class="absolute inset-0 flex items-end justify-center w-full">
        <kinesis-element :strength="-400">
          <div class="gradient">x</div>
        </kinesis-element>
      </div>
    </kinesis-container>
  </ClientOnly>
</template>

<style scoped>
.gradient {
  width: 240px;
  height: 240px;
  border-radius: 500px;
  background-image: linear-gradient(
    132deg,
    #48fffb 32%,
    #6ce787 51%,
    #0ce9a9 73%
  );

  -webkit-filter: blur(110px);
  filter: blur(110px);
  transition: all 0.3s ease-in-out;
}
.mouse-over .gradient {
  transform: scale(1.2);
}
.circle-info {
  position: absolute;
  bottom: -15%;
  right: -15%;
  width: 250px;
}
@media only screen and (max-width: 600px) {
  .circle-info {
    bottom: -8%;
    right: -8%;
    width: 200px;
  }
}
</style>
