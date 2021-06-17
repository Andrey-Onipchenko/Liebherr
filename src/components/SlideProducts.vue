<template>
  <div class="product">
    <button
      v-for="product in products"
      :key="product.name"
      :class="product.class"
      :data-product="product.name"
      @click="chengeProduct"
    ></button>
  </div>
</template>

<script>
export default {
  name: "SlideProducts",
  data() {
    return {
      products: [
        { name: "cake", class: "product__cake" },
        { name: "lemon", class: "product__lemon" },
        { name: "blueCheese", class: "product__blueCheese" },
        { name: "сheese", class: "product__сheese" },
        { name: "caviar", class: "product__caviar" },
        { name: "milk", class: "product__milk" },
        { name: "salad", class: "product__salad" },
        { name: "pan", class: "product__pan" },
        { name: "meat", class: "product__meat" },
        { name: "mushrooms", class: "product__mushrooms" },
        { name: "beet", class: "product__beet" },
        { name: "carrot", class: "product__carrot" },
        { name: "apple", class: "product__apple" },
        { name: "dumplings", class: "product__dumplings" },
        { name: "berries", class: "product__berries" },
      ],
    };
  },
  methods: {
    chengeProduct(event) {
      this.$emit("chengeProduct", event.target.dataset.product);
    },
  },
};
</script>

<style lang="scss" >
@mixin hover($url: "") {
  &:hover {
    transition: 300ms ease-in-out;
    background: url($url) center no-repeat;
    background-size: contain;
  }
}
@mixin product($url: "", $top: 0, $left: 0, $width: 30px, $height: 30px) {
  position: absolute;
  background: url($url) center no-repeat;
  background-size: contain;
  width: $width;
  height: $height;
  top: $top;
  left: $left;
}
.product {
  display: none;
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
  &__сheese {
    @include product(
      "../assets/images/product/cheese.png",
      97px,
      75px,
      25px,
      25px
    );
    @include hover("../assets/images/product/cheese__hover.png");
  }
  &__caviar {
    @include product(
      "../assets/images/product/caviar.png",
      100px,
      100px,
      20px,
      22px
    );
    @include hover("../assets/images/product/caviar__hover.png");
  }
  &__milk {
    @include product(
      "../assets/images/product/milk.png",
      82px,
      117px,
      20px,
      40px
    );
    @include hover("../assets/images/product/milk__hover.png");
  }
  &__salad {
    @include product(
      "../assets/images/product/salad.png",
      130px,
      50px,
      30px,
      40px
    );
    @include hover("../assets/images/product/salad__hover.png");
  }
  &__pan {
    @include product(
      "../assets/images/product/pan.png",
      125px,
      80px,
      60px,
      40px
    );
    @include hover("../assets/images/product/pan__hover.png");
  }
  &__meat {
    @include product(
      "../assets/images/product/meat.png",
      195px,
      30px,
      125px,
      60px
    );
    @include hover("../assets/images/product/meat__hover.png");
  }
  &__mushrooms {
    @include product(
      "../assets/images/product/mushrooms.png",
      260px,
      40px,
      40px,
      40px
    );
    @include hover("../assets/images/product/mushrooms__hover.png");
  }
  &__beet {
    @include product(
      "../assets/images/product/beet.png",
      255px,
      70px,
      35px,
      35px
    );
    @include hover("../assets/images/product/beet__hover.png");
  }
  &__carrot {
    @include product(
      "../assets/images/product/carrot.png",
      273px,
      85px,
      35px,
      23px
    );
    @include hover("../assets/images/product/carrot__hover.png");
  }
  &__apple {
    @include product(
      "../assets/images/product/apple.png",
      260px,
      113px,
      35px,
      35px
    );
    @include hover("../assets/images/product/apple__hover.png");
  }
  &__dumplings {
    @include product(
      "../assets/images/product/dumplings.png",
      366px,
      29px,
      130px,
      60px
    );
    @include hover("../assets/images/product/dumplings__hover.png");
  }
  &__berries {
    @include product(
      "../assets/images/product/berries.png",
      415px,
      29px,
      130px,
      60px
    );
    @include hover("../assets/images/product/berries__hover.png");
  }
}
.current .product {
  display: block;
}
</style>
