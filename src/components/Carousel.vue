<template>
  <div>
    <div id="carousel">
      <!-- <h3 class="carousel__title">На двадцатом съезде партии прозвучало</h3> -->
      <carousel-3d
        :width="255"
        :height="625"
        :controls-visible="true"
        :perspective="0"
        :space="400"
      >
        <!-- <carousel-3d
      :width="255"
      :height="625"
      :controls-visible="true"
      controlsPrevHtml='<img  src="https://qazzxswedc.000webhostapp.com/arr_left.png" alt="">'
      controlsNextHtml='<img  src="https://qazzxswedc.000webhostapp.com/arr_right.png" alt="">'
      :perspective="0"
      :space="400"
    > -->
        <slide :index="0">
          <div class="icebox icebox-center">
            <div class="icebox__black">
              <SlideProducts @chengeProduct="chengeProduct" />
              <!-- <button class="product__cake" data-product="cake"></button>
            <button class="product__lemon" data-product="lemon"></button>
            <button
              class="product__blueCheese"
              data-product="blueCheese"
            ></button> -->
            </div>
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
        </slide>
        <slide :index="1">
          <div class="icebox icebox-right">
            <div class="icebox__white">
              <SlideProducts />
            </div>
            <div class="image-zoom">
              <div class="image-zoom__wrap">
                <img
                  class="image-zoom__white"
                  src="../assets/images/white/white-open__full.png"
                  alt=""
                />
              </div>
            </div>
            <img class="cursor" src="../assets/images/ref/cursor.png" alt="" />
          </div>
        </slide>
        <slide :index="2">
          <div class="icebox icebox-left">
            <div class="icebox__grey">
              <SlideProducts />
            </div>
            <div class="image-zoom">
              <div class="image-zoom__wrap">
                <img
                  class="image-zoom__grey"
                  src="../assets/images/grey/grey-open__full.png"
                  alt=""
                />
              </div>
            </div>
            <img class="cursor" src="../assets/images/ref/cursor.png" alt="" />
          </div>
        </slide>
      </carousel-3d>
    </div>
  </div>
</template>

<script>
import imageZoom from "@/plugin/js-image-zoom.js";
import SlideProducts from "@/components/SlideProducts.vue";
export default {
  data() {
    return {};
  },
  components: {
    SlideProducts,
  },
  mounted() {
    new imageZoom(".icebox__black", ".image-zoom__black");
    new imageZoom(".icebox__white", ".image-zoom__white");
    new imageZoom(".icebox__grey", ".image-zoom__grey");
  },
  methods: {
    clickProduct(event) {
      this.$emit("clickProduct", event.target.dataset.product);
    },
    chengeProduct(product) {
      this.$emit("chengeProduct", product);
    },
  },
};
</script>
<style lang="scss">
.icebox {
  max-width: 255px;
  min-height: 625px;
  border-radius: 5px;
  position: relative;
  cursor: pointer;
  &-left,
  &-right,
  &-center {
    background: url("../assets/images/bg_mini.png") center 85% no-repeat;
    background-size: contain;
  }
  &__black {
    background: url("../assets/images/black/icebox-black__close.png") no-repeat
      center;
    background-size: contain;
    height: 550px;
  }
  &__white {
    background: url("../assets/images/white/white-close.png") no-repeat center;
    background-size: contain;
    height: 550px;
  }
  &__grey {
    background: url("../assets/images/grey/grey-close.png") no-repeat center;
    background-size: contain;
    height: 550px;
  }
}

.current {
  .icebox {
    &:hover {
      .image-zoom {
        display: block;
      }
    }
    &__black {
      background: url("../assets/images/black/icebox-black__open.png") no-repeat
        center;
      background-size: contain;
      height: 550px;
    }
    &__white {
      background: url("../assets/images/white/white-open.png") no-repeat center;
      background-size: contain;
      height: 550px;
    }
    &__grey {
      background: url("../assets/images/grey/grey-open.png") no-repeat center;
      background-size: contain;
      height: 550px;
    }
  }
}

.cursor {
  position: absolute;
  visibility: hidden;
  bottom: 50px;
  width: 60% !important;
  left: 35px;
}

.ref-black {
  background: url("../assets/images/black/icebox-black__open.png") no-repeat
    center;
  background-size: contain;
  height: 550px;
}
.image-zoom {
  position: absolute;
  top: 0;
  right: -110%;
  width: 255px;
  height: 200px;
  overflow: hidden;
  display: none;
  &__wrap {
    position: relative;
  }
  &__black,
  &__white,
  &__grey {
    position: absolute;
    top: 0;
    left: 0;
    width: 765px !important;
  }
}

// carousel-3d-slide
.current {
  .img {
    width: 260px;
    height: 610px;
  }
  .card {
    // background: none;
    background: url("../assets/images/bg_center.png") center 100% no-repeat;
    background-size: contain;
  }
  .card-center {
    .ref-black {
      background: url("../assets/images/ref/black_open.png") no-repeat;
      background-size: contain;
      top: 50%;
    }
  }
  .card-right .card-right__img {
    background: url("../assets/images/ref/white_open.png") no-repeat;
    background-size: contain;
    top: 50%;
  }
  .card-left .card-left__img {
    background: url("../assets/images/ref/grey_open.png") no-repeat;
    background-size: contain;
    top: 50%;
  }
  .cursor {
    visibility: visible;
  }
}
.carousel-3d-slide {
  border: none !important;
  background: none !important;
  width: 100% !important;
}
.carousel-3d-container {
  margin: 0 !important;
}
#carousel {
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
}
.carousel__title {
  font-family: "LiebherrHead Bold", sans-serif;
  position: absolute;
  top: 20%;
  left: 5%;
  font-weight: 900;
  font-size: 48px;
  line-height: 58px;
  text-transform: uppercase;
  max-width: 380px;
}
.next {
  right: 30px !important;
}
.carousel-3d-slide {
  overflow: initial !important;
}

@mixin hover($url: "") {
  &:hover {
    transition: 300ms ease-in-out;
    background: url($url) center no-repeat;
    background-size: contain;
  }
}
@mixin product($url: "", $top: 0, $left: 0, $width: 30px, $height: 30px) {
  background: url($url) center no-repeat;
  background-size: contain;
  width: $width;
  height: $height;
  top: $top;
  left: $left;
}
.product {
  &__cake,
  &__lemon,
  &__blueCheese {
    position: absolute;
  }
  &__cake {
    @include product("../assets/images/product/cake.png", 50px, 50px);
    @include hover("../assets/images/product/cake__hover.png");
  }
  &__lemon {
    @include product("../assets/images/product/lemon.png", 53px, 108px);
    @include hover("../assets/images/product/lemon__hover.png");
  }
  &__blueCheese {
    @include product("../assets/images/product/blueCheese.png", 95px, 45px);
    @include hover("../assets/images/product/blueCheese__hover.png");
  }
}
</style>
