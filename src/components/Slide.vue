<template>
  <div class="icebox icebox-center">
    <div class="icebox__black"></div>
    <div class="image-zoom">
      <div class="image-zoom__wrap">
        <img
          class="image-zoom__black"
          src="../assets/images/black/icebox-black__open-full.png"
          alt=""
        />
      </div>
    </div>
    <img class="cursor" src="../assets/images/ref/cursor.png" alt="" />
  </div>
</template>

<script>
// import imageZoom from "@/plugin/js-image-zoom.js";
export default {
  name: "Slide",
  mounted() {
    // new imageZoom(".icebox__black", ".image-zoom__black");
  },
};
</script>

<style lang="scss" scoped></style>
