<template>
  <div class="description">
    <div class="description__left"></div>
    <div class="description__right">
      <div class="description__right-container">
        <h3 class="description__title">Про бренд</h3>
        <p class="description__text">
          Liebher – бренд, що почав свою історію ще в 1949 році. Тоді
          талановитий інженер-винахідник Ганс Лібхер створив інноваційну
          конструкцію мобільного крану. Він міг працювати на невеликих ділянках
          і був доступний за ціною, що було дуже актуальним для післявоєнних
          часів. Згодом потужності компанії розширилися до випуску лінійки
          будівельної техніки, авіаційних комплектуючих, а також висококласної
          побутової і професійної холодильної техніки.
        </p>
        <p class="description__text">
          Зараз в структурі Liebherr-International AG 130 виробничих компаній з
          головним офісом в Швейцарії. Холдинг донині залишається сімейним
          бізнесом. І саме традиції, запроваджені Гансом Лібхерем, обумовлюють
          її успіх: жорсткий контроль, фінансовий консерватизм, уважний підхід
          до потреб клієнтів.
        </p>
        <p class="description__text">
          Перша фабрика з випуску холодильної техніки була відкрита в 1954 році
          в німецьому Оксенгаузені. Наразі в лінійці переважають моделі
          побутових холодильників і морозильників преміум-класу, а також
          професійна холодильна техніка для бізнесу HoReCa, пекарень,
          супермаркетів та медичної галузі.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.description {
  display: flex;
  height: 710px;
  &__left {
    width: 50%;
    background: url("../assets/images/description.png") no-repeat;
    background-size: cover;
  }
  &__right {
    width: 50%;
    background: #000;
    text-align: center;
    padding-top: 100px;
    &-container {
      max-width: 530px;
      width: 100%;
      margin-left: 70px;
    }
  }
  &__title {
    font-family: "LiebherrHead Bold", sans-serif;
    font-weight: 900;
    font-size: 24px;
    line-height: 29px;
    text-transform: uppercase;
    margin-bottom: 60px;
  }
  &__text {
    margin-bottom: 20px;
  }
}
</style>
