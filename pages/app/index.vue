<template>
  <div class="test-app flex-1 flex flex-col">
    <div class="px-5 py-10 overflow-hidden">
      <div class="flex justify-between w-100">
        <div class="grow flex justify-start">
          <div class="bg-customblack-200 px-2 rounded-md flex items-center">
            <icon size="32" name="heroicons-chevron-left-solid"></icon>
          </div>
        </div>
        <div class="grow flex justify-center items-center">
          <div class="font-extrabold text-lg tracking-wide">App Name</div>
        </div>
        <div class="grow flex justify-end">
          <div class="rounded-full h-12 w-12 bg-slate-600">
            <img class="w-full" src="/img/avatar.png" />
          </div>
        </div>
      </div>
    </div>
    <div class="flex-1 flex px-5 py-10 overflow-hidden relative">ads</div>
  </div>
</template>

<script>
definePageMeta({
  layout: "app",
});
</script>
<style scoped></style>
