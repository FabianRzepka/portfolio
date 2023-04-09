<template>
  <ClientOnly>
    <kinesis-container class="bg-black relative overflow-hidden">
      <div class="mx-auto sm:px-6 lg:px-8 px-4 max-w-7xl h-full py-10 lg:py-28">
        <kinesis-element
          :strength="60"
          type="translate"
          axis="x"
          class="absolute -left-24 top-0 pointer-events-none opacity-60"
        >
          <img src="/img/Ellipse1.svg" />
        </kinesis-element>
        <div class="relative flex flex-col gap-8">
          <h1>
            Technologie i narzędzia których <br />
            używam do
            <span class="text-emerald-400 under-line-special"
              >Tworzenia stron</span
            >
          </h1>
          <span class="text-xl opacity-60">
            Dzięki nim mogę tworzyć nowoczesne, szybko działające i atrakcyjne
            projekty.
          </span>
          <div class="relative flex flex-col gap-6">
            <div class="space-y-3">
              <span
                class="text-xs font-semibold uppercase tracking-wide opacity-70"
                >Technologie</span
              >
              <Swiper
                class="mySwiper"
                :style="swiperStyles"
                :slidesPerView="3"
                :breakpoints="breakpoints"
              >
                <SwiperSlide
                  @mousemove="mouseMove"
                  class="box flex flex-col text-center items-center text-sm font-semibold gap-2 bg-zinc-900/90 px-3 py-3 rounded-xl border-2 border-zinc-700 transition-all ease-in-out duration-300 hover:border-emerald-400"
                  v-for="item in techs"
                  :key="item.name"
                >
                  <Icon
                    size="40"
                    class="pointer-events-none z-20"
                    :name="item.icon"
                  />
                  <span class="pointer-events-none z-20">
                    <span v-html="item.name"></span>
                  </span>
                </SwiperSlide>
              </Swiper>
            </div>
            <div class="space-y-3">
              <span
                class="text-xs font-semibold uppercase tracking-wide opacity-70"
                >Narzędzia</span
              >
              <Swiper
                class="mySwiper2"
                :style="swiperStyles"
                :slidesPerView="3"
                :breakpoints="breakpoints"
              >
                <SwiperSlide class="" v-for="item in tools" :key="item.name">
                  <div
                    @mousemove="mouseMove"
                    class="box flex flex-col items-center text-sm font-semibold gap-2 bg-zinc-900/90 px-3 py-3 rounded-xl border-2 border-zinc-700 transition-all ease-in-out duration-300 hover:border-emerald-400"
                  >
                    <Icon
                      size="40"
                      class="z-20 pointer-events-none"
                      :name="item.icon"
                    />
                    <span class="pointer-events-none z-20">
                      {{ item.name }}
                    </span>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </kinesis-container>
  </ClientOnly>
</template>

<script setup>
const breakpoints = {
  340: {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  768: {
    slidesPerView: 4,
    spaceBetween: 10,
  },
  1024: {
    slidesPerView: 6,
    spaceBetween: 25,
  },
};
const swiperStyles = {
  "--swiper-navigation-color": "#fff",
  "--swiper-navigation-size": "20px",
};
const techs = [
  { name: "Vue", icon: "logos:vue" },
  { name: "Nuxt3", icon: "NuxtIcon" },
  { name: "JavaScript", icon: "logos:javascript" },
  { name: "Wordpress", icon: "WpIcon" },
  { name: "Vite", icon: "logos:vitejs" },
  { name: "Tailwindcss", icon: "logos:tailwindcss-icon" },
  { name: "GraphQL", icon: "logos:graphql" },
  {
    name: "Hygraph <small class='opacity-75'>HEADLESS CMS</small>",
    icon: "logos:graphql",
  },
];

const tools = [
  { name: "Gitlab", icon: "logos:gitlab" },
  { name: "PHPstorm", icon: "logos:phpstorm" },
  { name: "Visual Studio", icon: "logos:visual-studio-code" },
  { name: "Figma", icon: "logos:figma" },
  { name: "Photoshop", icon: "logos:adobe-photoshop" },
  { name: "After Effects", icon: "logos:adobe-after-effects" },
];
</script>

<style lang="postcss">
.swiper-button-next,
.swiper-button-prev {
  @apply py-3 text-xs px-4 bg-zinc-800 rounded-md border-2 border-zinc-700;
}
</style>
<style scoped>
.box {
  position: relative;
  outline: none;
  overflow: hidden;
}

.box::before {
  --size: 0;
  content: "";
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: var(--size);
  height: var(--size);
  background: radial-gradient(circle closest-side, #34d39998, transparent);
  opacity: 0.3;
  transform: translate(-50%, -50%);
  transition: width 0.2s ease, height 0.2s ease, opacity 0.2s ease;
}

.box:hover::before {
  opacity: 1;
  --size: 220px;
}
</style>

<script>
export default {
  data: () => ({}),
  methods: {
    mouseMove(e) {
      const x = e.offsetX;
      const y = e.offsetY;
      e.target.style.setProperty("--x", x + "px");
      e.target.style.setProperty("--y", y + "px");
    },
  },
};
</script>
