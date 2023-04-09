<template>
  <div class="container mx-auto">
    <div>{{ $route.params.slug }}</div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Projekt",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Projekt portfolio",
        },
      ],
    };
  },
};
</script>
