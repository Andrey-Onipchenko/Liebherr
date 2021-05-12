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
          <div class="card-center__img img"></div>
          <button class="testproduct" data-product="eags" @click="clickProduct">
            Click
          </button>
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
export default {
  data() {
    return {};
  },
  methods: {
    clickProduct() {
      console.log("click");
      this.$emit("clickProduct", "someValue");
    },
  },
};
</script>
<style lang="scss">
.testproduct {
  position: absolute;
  top: 65px;
  left: 35px;
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
</style>
