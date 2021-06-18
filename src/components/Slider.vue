<template>
  <div class="slider">
    <div class="container">
      <Carousel @chengeProduct="openPopup" />
      <Popup
        @close="closePopup"
        v-if="popup"
        :product="productData"
        @nextProduct="nextProduct"
        @backProduct="backProduct"
      />
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";
import Popup from "@/components/Popup.vue";
export default {
  data() {
    return {
      products: null,
      popup: false,
      index: null,
      productData: {},
    };
  },
  components: {
    Carousel,
    Popup,
  },

  methods: {
    openPopup(prop) {
      this.productData = this.products.filter((el) => el.name === prop)[0];
      this.index = this.productData.position;
      this.popup = true;
    },
    closePopup() {
      this.popup = false;
    },
    nextProduct() {
      this.index += 1;
      if (this.index > this.products.length) {
        this.index = 1;
        this.searchProductByIndex();
      } else {
        this.searchProductByIndex();
      }
      console.log(this.index);
    },
    backProduct() {
      this.index -= 1;
      if (this.index === 0) {
        this.index = this.products.length;
        this.searchProductByIndex();
      } else {
        this.searchProductByIndex();
      }
    },
    searchProductByIndex() {
      this.productData = this.products.filter(
        (el) => el.position === this.index
      )[0];
    },
  },
  mounted() {
    this.products = this.$store.getters.getProduct;
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
