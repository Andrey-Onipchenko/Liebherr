<template>
  <div class="popup">
    <div class="popup__container">
      <button class="popup__close" @click="close"></button>
      <p>{{ data.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  methods: {
    close() {
      console.log("close");
      this.$emit("close", "someValue");
    },
  },
};
</script>

<style lang="scss" scoped>
.popup {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10%;
  width: 320px;
  height: 570px;
  background: #fff url("../assets/images/popup/bg.png") no-repeat;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  color: #000;
  &__container {
    position: relative;
  }
  &__close {
    width: 16px;
    height: 16px;
    background: url("../assets/images/popup/close.png");
    position: absolute;
    top: 15px;
    right: 15px;
  }
}
</style>
