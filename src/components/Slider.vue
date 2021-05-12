<template>
  <div class="slider">
    <div class="container">
      <!-- <h3 class="slider__title">На двадцатом съезде партии прозвучало</h3>
      <p class="slider__subtitle">
        В своём стремлении улучшить пользовательский опыт мы упускаем.
      </p> -->
      <Carousel />
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
export default {
  components: {
    Carousel,
  },
};
</script>

<style lang="scss" scoped>
.slider {
  width: 100%;
  height: 100vh;
  background: url("../assets/images/slider_bg.png") no-repeat;
  background-size: cover;
  // padding-top: 72px;
  &__title {
    font-family: "LiebherrHead Bold", sans-serif;
    font-weight: 900;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    text-transform: uppercase;
    max-width: 255px;
    margin: 0 auto 20px;
  }
  &__subtitle {
    max-width: 285px;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    margin: 0 auto;
  }
}
</style>
