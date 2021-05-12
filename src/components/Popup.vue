<template>
  <div class="popup">
    <button @click="close">X</button>
  </div>
</template>

<script>
export default {
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
  background: #fff;
}
</style>
