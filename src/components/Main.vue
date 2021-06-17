<template>
  <div class="main">
    <div class="container">
      <div class="main__content">
        <div class="main__left">
          <img src="../assets/images/logo.png" alt="logo" class="logo" />
          <h1 class="main__title">
            ЯК ЗБЕРІГАТИ <br />
            ПРОДУКТИ ДОВШЕ
          </h1>
          <p class="main__text">
            Свідоме споживання – не капризний тренд, а вимушена необхідність з
            огляду на екологічні проблеми людства та раціональне ставлення до
            власного бюджету. Але світ цікавий, хочеться встигнути якомога
            більше, а не витрачати час на щоденні закупки. Є рішення, які
            дозволять ходити рідше до магазину та при цьому завжди мати вдома
            свіжі продукти. Просто оберіть правильний холодильник – такий, де
            продукти зберігаються ДОВШЕ, ніж в звичайному!
          </p>
          <button class="btn">call to action</button>
        </div>
        <img class="main__right" src="../assets/images/main.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main {
  width: 100vw;
  height: 100vh;
  background: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &__content {
    display: flex;
  }
  &__left {
    max-width: 600px;
    width: 100%;
  }
  &__right {
    max-width: 55%;
  }

  &__title {
    font-family: "LiebherrHead Bold", sans-serif;
    font-weight: 900;
    font-size: 48px;
    line-height: 58px;
    margin-bottom: 35px;
  }
  &__text {
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 120px;
  }
}
.logo {
  margin-bottom: 50px;
}
</style>
