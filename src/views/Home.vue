<template>
  <div class="home">
    <Main />
    <Slider />
    <Description />
    <Footer />
  </div>
</template>

<script>
import Main from "@/components/Main.vue";
import Slider from "@/components/Slider.vue";
import Description from "@/components/Description.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Home",
  components: {
    Main,
    Slider,
    Description,
    Footer,
  },
};
</script>
<style lang="scss" scoped>
.home {
  overflow: hidden;
}
</style>
