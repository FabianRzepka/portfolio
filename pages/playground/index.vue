<template>
  <div class="box-wrap">
    <button class="mouse-cursor-gradient-tracking" @mousemove="mouseMove">
      <span>Hover me</span>
    </button>
    <NowSpotify />
  </div>
</template>

<style scoped></style>

<script>
export default {
  data: () => ({}),
  methods: {
    mouseMove(e) {
      const x = e.pageX - e.target.offsetLeft;
      const y = e.pageY - e.target.offsetTop;
      e.target.style.setProperty("--x", x + "px");
      e.target.style.setProperty("--y", y + "px");
    },
  },
};
</script>
