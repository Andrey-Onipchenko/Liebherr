<template>
  <div id="carousel">
    <h3 class="carousel__title">На двадцатом съезде партии прозвучало</h3>
    <carousel-3d
      :width="255"
      :height="625"
      :controls-visible="true"
      controlsPrevHtml='<img  src="https://qazzxswedc.000webhostapp.com/arr_left.png" alt="">'
      controlsNextHtml='<img  src="https://qazzxswedc.000webhostapp.com/arr_right.png" alt="">'
      :perspective="0"
      :space="400"
    >
      <slide :index="0">
        <div class="card card-center">
          <div class="ref-black"></div>
          <div class="image-zoom">
            <div class="image-zoom__wrap">
              <img
                class="image-zoom__black"
                src="../assets/images/ref_black/ref-black__open-full.png"
                alt=""
              />
            </div>
          </div>
          <!-- <div class="card-center__img img" id="img-container"> -->
          <!-- <div id="img-container" style="width: 400px">
              </div> -->
          <!-- <img
              id="card-center__img"
              src="../assets/images/ref/black_open.png"
              alt=""
            />
          </div>
          <button
            class="testproduct product"
            data-product="redCaviar"
            @click="clickProduct($event)"
          >
            Click
          </button>
          <button
            class="testproduct2 product"
            data-product="egg"
            @click="clickProduct($event)"
          >
            Click
          </button> -->
          <!-- </div> -->
          <img class="cursor" src="../assets/images/ref/cursor.png" alt="" />
        </div>
      </slide>
      <slide :index="1">
        <div class="card card-right">
          <div class="card-right__img img"></div>
          <img class="cursor" src="../assets/images/ref/cursor.png" alt="" />
        </div>
      </slide>
      <slide :index="2">
        <div class="card card-left">
          <div class="card-left__img img"></div>
        </div>
        <img class="cursor" src="../assets/images/ref/cursor.png" alt="" />
      </slide>
    </carousel-3d>
  </div>
</template>

<script>
import imageZoom from "@/plugin/js-image-zoom.js";
export default {
  data() {
    return {};
  },
  mounted() {
    let imgZoom = new imageZoom(".ref-black", ".image-zoom__black");
    console.log(imgZoom);
    // new ImageZoom(document.getElementById("img-container"), {
    //   width: 255,
    //   zoomWidth: 400,
    //   offset: { vertical: 0, horizontal: 100 },
    // });
  },
  methods: {
    clickProduct(event) {
      this.$emit("clickProduct", event.target.dataset.product);
    },
  },
};
</script>
<style lang="scss">
.product {
  visibility: hidden;
}
.testproduct {
  position: absolute;
  top: 65px;
  left: 35px;
}
.testproduct2 {
  position: absolute;
  top: 65px;
  left: 85px;
}
.arr {
  width: 50px;
  height: 50px;
}
.cursor {
  position: absolute;
  visibility: hidden;
  bottom: 50px;
  width: 60% !important;
  left: 35px;
}
.card {
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
}
.card-left {
  &__img {
    background: url("../assets/images/ref/grey_close.png") no-repeat;
    background-size: cover;
    position: absolute;
    left: 50%;
    top: 70%;
    transform: translate(-50%, -50%);
    width: 132px;
    height: 370px;
  }
}
.card-right {
  &__img {
    background: url("../assets/images/ref/white_close.png") no-repeat;
    background-size: cover;
    position: absolute;
    left: 50%;
    top: 70%;
    transform: translate(-50%, -50%);
    width: 132px;
    height: 370px;
  }
}
.card-center {
  border: 2px solid black;
  &__img {
    background: url("../assets/images/ref/black_close.png") no-repeat;
    background-size: cover;
    position: absolute;
    left: 50%;
    top: 70%;
    transform: translate(-50%, -50%);
    width: 132px;
    height: 370px;
  }
}

.ref-black {
  background: url("../assets/images/ref_black/ref-black__open.png") no-repeat
    center;
  background-size: contain;
  border: 1px solid red;
  height: 550px;
}
.image-zoom {
  position: absolute;
  top: 0;
  right: -110%;
  width: 255px;
  height: 200px;
  border: 1px solid red;
  overflow: hidden;
  &__wrap {
    position: relative;
  }
  // &__black {
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 765px;
  // }
  // background: url("../assets/images/ref_black/ref-black__open-full.png")
  //   no-repeat center top;
}
.image-zoom__black {
  position: absolute;
  top: 0;
  left: 0;
  width: 765px !important;
}

// slider
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
    &__img {
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
  .product {
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
</style>
