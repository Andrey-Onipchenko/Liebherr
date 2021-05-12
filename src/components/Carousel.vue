<template>
  <div id="carousel">
    <carousel-3d
      :width="255"
      :height="625"
      controls-visible="true"
      controlsPrevHtml='<img  src="https://qazzxswedc.000webhostapp.com/arr_left.png" alt="">'
      controlsNextHtml='<img  src="https://qazzxswedc.000webhostapp.com/arr_right.png" alt="">'
      :perspective="0"
      :space="400"
    >
      <slide :index="0">
        <div class="card card-center">
          <div class="card-center__img img"></div>
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
    return {
      slides: [
        {
          title: "€10 Starbucks",
          mainSrc:
            "https://previews.dropbox.com/p/thumb/AAi0gEXz4g2t2inybTUBXg3nFYk-ZTB83yNEXwvQPxck99Dd3--3i-pQ7QmLnR4fROHKGTtR9PfmLmk0XkTRDQ2RmNsdfZhkpahBCJF6FLsxIXm5eFtyBPWnwjMEKq0YdXJDLhf_tfBJbqxnF2zGuqvQRrFn-izEiaxZ9ch9ZC7J6NYZ4uY1mjOwBLA8tIF2rw8-J127ZICslxHn4lg_XTsJq-WvPtvIj-x9Wh6Mwv6uM_jrpOAN3pqehcxuDvTfYW5QyxxDSbUDpx3mFng2CRR5QsShQjooJFn3cPDPCmLmGLr9h-Ja0zAm7--71w20olwyLcKL1O_-ezytGB_EgfQjJUm-ua3tTBrdLRTIJ4ExpiICuMsuCUnw6o_9jG7QjI25UYK3UomP2NDNGL9_qOb57h2tvNFnCdlLbpp-TjanoKwrb5uC2NiQMpZZcUe8xxjDjQSleRmx9hzKbvKADLoEYDlpKQGVnskb3NRFF-bUvQ/p.png",
          logoSrc:
            "https://i.pinimg.com/originals/8b/c8/2d/8bc82d40ae0fb574bfbdcd3a62d8d41d.jpg",
          desc: "3000 pts",
          tag: "gift card",
          resize: false,
        },
        {
          title: "Ultraboost Shoes",
          mainSrc:
            "https://previews.dropbox.com/p/thumb/AAj4thj3TBOyGxkjQgay1n1AfphCqkYgvuVluWnpCGLTeHjDN8ZYr0NMmMFNF7dQFRdo-97tjMRIXnFBiazMvn7mYhGfn5BwasTJRmepUOY3Y1qK5sP59PcLX8rihiNEALlEeoIsW1dSpqZui5SRl5BwhIi3bkPGjWY8sVSCbhX_nceDVHnTEJjTbMB9LgxJoqoJEDmcafR1WQJIMq8rYt3WadSZ4YWYAAFgmdsYogchva_0zrDr9BFkYWDzbTk3t8271n3iGzlyhcnmYpLyfrgIp9PzVzztCqxzKwP_FFqoVeQ4K2XCywM35dob6EuBnUKUQhV3gKFDrRjx4Lndmg1Dqje7WQR5m4VyjA09ZovH5p31b3eps1NaQDgdZpshoBXVapipfWDwWIVanvCeQPwETbHlEiH3x2k-titxs3vnVlzC6Qgq58QDtpIxWch0eNG6GayT-cwiQR8OS381yrZjHuUXoqmCXoDWWQOTriMi3w/p.png?fv_content=true&size_mode=5",
          logoSrc:
            "https://previews.dropbox.com/p/thumb/AAhw_Majm8IPeqHnZFo6QkDth1dfZoRcLypnD1ByqyhkjC-H6qsIkc7TuYf0JfW23DhPU7V2YHD4dU8_r2RnmvJ6yfizmQGeoBE-Twtllf3K1xGesDqYA59GoN_CgmCPXKvZvgMYnIkQcckOGJCrDyz9JwIeeLCqsgcqbkbVkL9bqHgqz_-R9wmL_F2rUL3bshndLC-6ru5pB-yZUPL1ToNB90pOlEeWTqYcf1Y8B4W3hXzEMhLPXb1pzWIDNPwyp2XPBHfR29zbSQKWatZMvZU1D89Y5kLqnrNgF94zC4PS4Pc817giFMZobav0WJgxxOWwSlqPcWGe95IZQQdpZlVMxljD_bqAu-gErEZVUvFwNmu7o5lwZNFaxtRHr7NrcDdTQMXEReM96y73E63_mgwTG_BTOjPLL_TEgKFPpw0YztrJAdccszBkgjJB9vx1c9TxQqH7SIFV-PLym3miJlmCxP0VeM-qZIt0HTtc0WiQ_Q/p.png?fv_content=true&size_mode=5",
          desc: "10150 pts",
          tag: "footwear",
          resize: true,
        },
        {
          title: "JBL Headphones",
          mainSrc:
            "https://previews.dropbox.com/p/thumb/AAg7dTDmUQ3RKH-qZweQTWV-W0Q90y6RJ0s06YmtEsfDJo_RONa_oEaShOzoYnaT2LbJJB0rik2ixcFdH3v0uw5czFvg11VEAYdwlM2L62z3ytFBs1agZSBa1Qt8XBXaiI9GhTSaNVKAR0MVwiCTpmOq2WCSTadoBECXMHe5zwde5VfGSnJWFh0oL78FbOWLocZ_wWkRHIHdLPz1Aedqs1bsLIrshNqJ5bFTZdrrOHxZFYzqZa-aUCa7Mc4ukbv-VGf-7mUc2oYPzmMslCQLufDWYCPBpjQySJheGuDcGD3vS2uaTBukEncJcMjmU_Oq52f7q5AqIHhG9c08N6Xt1Cx4MAE2_LH5KobAi1QZ8NmGjmy-eUIXC2JjDnBzYdDl5EsUqs84gR-W67z4HoQ9h0We9wmHV6NNunWzXIzsmbXSg9HrW7qWHGg6AOUSG1N0c524sPt7HDz8KVpP99ynNBVgx3kxrLPWFkLN8UYekrykHw/p.png?fv_content=true&size_mode=5",
          logoSrc:
            "https://previews.dropbox.com/p/thumb/AAihIxUN68AM6VifiD_r735lNmLeWyA_J8DgfbkLyQFtJEyqa5TEVwgthFUK389W9RY4YwxV_RRICLw4aQUEMrQVwZlX2ycXcZ2aZPHsfCnH5Th7Te2krQno_Ekj57H5AwwN0hqAxwfJwoFVmk7h_TSVwwn60Bt-kmOLEd-_ncc04TalKql2vZ6HTqTRHUHSkJzdg0xfW4e-lqT5R4mS_qXAu4x0zG_wl-G7yDIwBDufvlW7q8Frq0i_YVSf9eyI2onf1dpMkf9YXYdsra9a1dF18D1PDyOR_GfXbpWGlPXk7oxTFkFZgnnkFxaGhfMBJ55A9R5lG-CD3dpfBn1EASbVM5KqMTSF0XvfoDV9065nEzg7sfqJaNE3lJtmrXcUa-egjt-KFpnFxh7QQf7ZEnEoWsHqcPUrSFlocovOf36a1wY7-hLAzB9elx1eYLwKiTr9WWwzr6AgZ8uYYW4gsdKyZ1YB2h6GjJd9EQs0F4SXYw/p.png?fv_content=true&size_mode=5",
          desc: "9000 pts",
          tag: "tech",
          resize: false,
          resizeMed: true,
        },
      ],
    };
  },
};
</script>
<style lang="scss">
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
.next {
  right: 30px !important;
}
</style>
