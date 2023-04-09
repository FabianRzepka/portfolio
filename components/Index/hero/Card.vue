<template>
  <div
    class="border-2 overflow-hidden outline-2 outline outline-transparent -outline-offset-10 hover:outline-2 transition-all duration-300 ease-linear hover:outline-emerald-400/60 hover:outline-offset-2 border-black rounded-xl text-black bg-metalic-900 relative max-w-lg ml-auto select-none"
  >
    <div
      class="card_header border-b border-black flex justify-between items-center"
    >
      <div
        class="flex [&>*]:py-1 [&>*]:border-r [&>*]:transition-all [&>*]:ease-in-out [&>*]:border-r-black [&>*]:duration-300 font-semibold"
      >
        <div
          @click="changeTab('index'), (personSize = '75%')"
          class="flex pl-5 pr-2 gap-x-2"
          :class="[
            currentTab === 'index'
              ? 'activeTab'
              : 'opacity-40 cursor-pointer border-b-2 border-b-transparent',
          ]"
        >
          <span class="">about.js</span>
          <span :class="[currentTab === 'index' ? 'opacity-40' : 'opacity-0']"
            >X</span
          >
        </div>
        <div
          @click="changeTab('passwords'), (personSize = '65%')"
          class="flex pl-5 pr-2 gap-x-2"
          :class="[
            currentTab === 'passwords'
              ? 'activeTab'
              : 'opacity-40 cursor-pointer border-b-2 border-b-transparent',
          ]"
        >
          <span class="">random_facts.md</span>
          <span
            :class="[currentTab === 'passwords' ? 'opacity-40' : 'opacity-0']"
            class="opacity-40"
            >X</span
          >
        </div>
      </div>
      <div class="flex mr-2 space-x-2 [&>*]:h-4 [&>*]:w-4 [&>*]:rounded-full">
        <span
          @click="showPersonToggle()"
          class="bg-red-700/50 cursor-pointer"
        ></span>
        <span
          @click="showPersonToggle()"
          class="bg-yellow-700/50 cursor-pointer"
        ></span>
        <span
          @click="showPersonToggle()"
          class="bg-green-700/50 cursor-pointer"
        ></span>
      </div>
    </div>
    <div class="flex overflow-hidden relative">
      <div
        class="fabian_author pointer-events-none relative z-10"
        :class="{ 'index-auhtor': currentTab === 'index' }"
        :style="{
          backgroundSize: personSize,
        }"
      ></div>
      <Transition name="slide-up">
        <Icon
          v-show="!showPerson"
          class="absolute h-auto w-[19%] right-[38.8%] bottom-[41%]"
          name="fxemoji:darksunglasses"
        />
      </Transition>
      <Transition name="slide-up">
        <Icon
          v-show="!showPerson"
          class="absolute bottom-0 right-[60%]"
          size="5.5em"
          name="fxemoji:tropicaldrink"
        />
      </Transition>
      <div
        class="text-ibm-mono card_numbers flex flex-col px-2.5 py-3 bg-black/10 gap-2 text-center font-semibold text-black/40"
      >
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span>10</span>
        <span>11</span>
        <span>12</span>
      </div>
      <div
        class="card_body w-full [&>*]:grid [&>*]:grid-cols-1 [&>*]:gap-2 py-3 font-semibold px-5"
      >
        <Transition name="slide-up" :duration="320" mode="out-in">
          <div v-if="currentTab === 'index'" class="text-ibm-mono">
            <div class="line-1">
              <span class="text-orange-800">const </span>
              <span class="text-purple-900/80">Fabian_Rzepka</span>
              <span class="text-black"> = </span>
              <span> { </span>
            </div>
            <div class="line-2 ml-10">
              <span class="text-purple-900/80">location</span>:
              <span class="text-green-900">'Katowice'</span>
              <span class="text-orange-800">,</span>
            </div>
            <div class="line-2 ml-10">
              <span class="text-purple-900/80">status</span>:
              <span class="text-green-900">'Open to work'</span>
            </div>
            <div>}<span class="text-orange-800">;</span></div>
            <div class="">
              <span class="text-orange-800">function</span>
              <span class="text-yellow-400/90"> coder</span>() {
            </div>
            <div class="pl-8">
              <span class="text-orange-800"> while</span>(<span
                class="text-purple-900/80"
                >alive</span
              >) {
            </div>
            <div class="pl-14">
              <span class="text-yellow-400/90">eat</span>()<span
                class="text-orange-800"
                >;</span
              >
            </div>
            <div class="pl-14">
              <span class="text-yellow-400/90">gym</span>()<span
                class="text-orange-800"
                >;</span
              >
            </div>
            <div class="pl-14">
              <span class="text-yellow-400/90">codding</span>()<span
                class="text-orange-800"
                >;</span
              >
            </div>
            <div class="pl-14 text-green-800">
              <span> // sleep</span>()<span>;</span>
            </div>

            <div class="pl-8">}</div>
            <div class="">}</div>
          </div>

          <div v-else class="relative">
            <span class="text-center"> PASJA I KREATYWNOŚĆ </span>
            <div
              class="text-black text-center grid grid-cols-3 gap-2 [&>*]:flex [&>*]:flex-col [&>*]:text-xs [&>*]:items-center"
            >
              <span class="space-y-1">
                <Icon name="twemoji-camera" class="h-6 w-6 mt-2" />
                <span> Pstrykam dużo zdjęć. </span>
              </span>
              <span class="space-y-1">
                <Icon
                  name="twemoji-flexed-biceps-medium-light-skin-tone"
                  class="h-6 w-6"
                />

                <span>Uczęszczam na siłownie.</span>
              </span>
              <span class="space-y-1">
                <Icon name="twemoji-mountain" class="h-6 w-6 mt-2" />
                <span>Lubię podróżować.</span>
              </span>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const currentTab = ref("index"),
  showPerson = ref(true),
  personSize = ref("75%");

function changeTab(tab) {
  if (currentTab.value !== tab) {
    currentTab.value = tab;
    if (showPerson.value === false) {
      showPerson.value = true;
    }
  }
}

function showPersonToggle() {
  if (currentTab.value === "index") {
    showPerson.value = !showPerson.value;
  }
}
</script>
<style lang="postcss" scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.slide-up-enter-active {
  transition: all 0.3s ease-out;
}

.slide-up-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

.activeTab {
  @apply border-b-2 border-black;
}
.card_header {
  z-index: 2;
  position: relative;
}
.fabian_author {
  position: absolute;
  left: 8%;
  right: 0;
  top: 35px;
  bottom: 0;
  background-position: bottom center;
  background-repeat: no-repeat;
  background-image: url(/img/fabian-alpha.png);
  background-size: cover;
  transition: all 0.3s ease-in-out;
}
.fabian_author.index-auhtor {
  right: -20%;
  left: 24%;
  top: 35px;
}
</style>
