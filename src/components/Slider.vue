<template>
  <div class="slider">
    <div class="container">
      <Carousel @chengeProduct="openPopup" />
      <Popup @close="closePopup" v-if="popup" :data="productPopup" />
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
import Popup from "@/components/Popup.vue";
export default {
  data() {
    return {
      popup: false,
      productPopup: null,
      cake: { title: "title", description: "description" },
      redCaviar: {
        title: "title redCaviar",
        description: "description redCaviar",
      },
    };
  },
  components: {
    Carousel,
    Popup,
  },
  methods: {
    openPopup(prop) {
      this.productPopup = this[prop];
      this.popup = true;
    },
    closePopup() {
      this.popup = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.slider {
  width: 100%;
  height: 100vh;
  background: url("../assets/images/slider_bg.png") no-repeat;
  background-size: cover;
  position: relative;
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
