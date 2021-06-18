<template>
  <div class="popup" ref="popup">
    <div class="popup__container">
      <button class="popup__close" @click="close"></button>
      <div class="popup__header">
        <button class="popup__header-left" @click="backProduct"></button>
        <img
          class="popup__header-img"
          src="../assets/images/product/lemon.png"
          alt=""
        />
        <button class="popup__header-right" @click="nextProduct"></button>
      </div>
      <div class="popup__days">
        <span v-if="product.minDays" class="popup__days-min"
          >({{ product.minDays }})</span
        >
        <span class="popup__days-max" v-if="product.maxDays"
          >{{ product.maxDays }} днів</span
        >
      </div>
      <div class="popup__desc">
        <h3 class="popup__desc-title">{{ product.title }}</h3>
        <p
          class="popup__desc-text"
          v-for="(description, i) in product.description"
          :key="i + 'desc'"
        >
          {{ description.text }}
        </p>
        <ul class="popup__desc-list">
          <li
            class="popup__desc-item"
            v-for="(advantage, i) in product.advantages"
            :key="i + 'adv'"
          >
            {{ advantage.text }}
          </li>
        </ul>
      </div>
      <div class="popup__btns">
        <a class="popup__btn btn" href="#" target="_blank">Детальніше</a>
        <a class="popup__fb btn" href="#" target="_blank"
          ><img src="../assets/images/fb.png" alt="fb"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  methods: {
    close() {
      this.$emit("close", "someValue");
      // this.$store.dispatch("TOGGLE_POPUP", false);
    },
    backProduct() {
      this.$emit("backProduct");
    },
    nextProduct() {
      this.$emit("nextProduct");
    },
  },
  mounted() {
    this.$refs.popup.style.left = `${window.innerWidth / 2 - 500}px`;
    console.log(this.product.minDays);
  },
};
</script>

<style lang="scss" scoped>
.popup {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  // left: 10%;
  width: 320px;
  height: 570px;
  background: #fff url("../assets/images/popup/bg.png") no-repeat;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-family: "Roboto", sans-serif;
  color: #000;
  &__container {
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 20px;
  }
  &__close {
    width: 16px;
    height: 16px;
    background: url("../assets/images/popup/close.png");
    position: absolute;
    top: 15px;
    right: 15px;
  }
  &__header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 110px;
    &-left,
    &-right {
      width: 50px;
      height: 50px;
      background: url("../assets/images/popup/left.svg") center no-repeat;
      background-size: contain;
    }
    &-img {
      max-height: 120px;
    }
    &-right {
      background: url("../assets/images/popup/right.svg") center no-repeat;
      background-size: contain;
    }
  }
  &__days {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;
    height: 20px;
    &-min {
      display: inline-block;
      text-decoration: line-through;
      margin-right: 10px;
    }
    &-max {
      color: #3674bd;
    }
  }
  &__desc {
    max-height: 180px;
    margin-bottom: 20px;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 6px;
      height: 8px;
      background-color: #eee;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #9ecbff;
    }
    &-title {
      font-weight: bold;
      font-size: 22px;
      line-height: 26px;
      margin-bottom: 10px;
    }
    &-text,
    &-item {
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      margin-bottom: 10px;
    }
    &-item {
      padding-left: 10px;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        top: 6px;
        left: 0px;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: #000;
      }
    }
  }
  &__btns {
    display: flex;
    justify-content: space-between;
  }
  &__btn,
  &__fb {
    display: inline-block;
    height: 48px;
    max-width: 220px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__fb {
    width: 48px;
  }
}
</style>
