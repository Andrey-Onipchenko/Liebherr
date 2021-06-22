import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        name: "cake",
        title: "Товари з холодильних полок магазину: десерти, сирні вироби",
        position: 1,
        maxDays: false,
        minDays: false,
        imgUrl: "https://liebherr.korrespondent.net/products/cake.png",
        description: [
          {
            text: "В звичайному холодильнику: ризик підмороження або повільного охолодження",
          },
          {
            text: "В холодильнику Liebherr з технологією PowerCooling: рівномірне охолодження",
          },
        ],
        advantages: [
          {
            text: "Беручи товари з холодної полки магазину, треба не пізніше 2-х годин покласти їх до холодильника, щоб запобігти псуванню.",
          },
          {
            text: "В холодильниках з системою PowerCooling по всій камері підтримується рівномірна температура, а вбудований вентилятор відповідає за швидке охолодження продуктів. ",
          },
          {
            text: "Додаткову надійність зберігання забезпечує технологія віддаленого управління SmartDevice. Вона дозволяє активовувати функцію SupeCool за допомогою смартфона. Уявіть, ви купуєте свіжі продукти в магазині, а холодильник за вашою командою вже готується швидко їх охолодити. ",
          },
          {
            text: "Оптимальні умови для тривалого збереження продуктів такого роду – холодильник Liebherr з технологією PowerCooling.",
          },
          {
            text: "Функція швидкої заморозки SuperFrost",
          },
        ],
      },
      {
        name: "lemon",
        title: "Лимон",
        position: 2,
        maxDays: 30,
        minDays: 20,
        imgUrl: "https://liebherr.korrespondent.net/products/lemon.png",
        description: [
          {
            text: "В звичайному холодильнику: ризик поглинання лимоном сторонніх запахів",
          },
          {
            text: "В холодильнику Liebherr з вентилятором PowerCooling та повітряним фільтром FreshAir:  оптимальне збереження",
          },
        ],
        advantages: [
          {
            text: "Навіть надрізаний лимон в моделях холодильників, де забезпечена оптимальна якість повітря, не буде поглинати сторонніх запахів. ",
          },
          {
            text: "Найкращий спосіб зберегти лимони - нарізати їх у скляну банку. ",
          },
          {
            text: "Лимони можуть залишатися в холодильнику при температурі 7°С протягом місяця.",
          },
          {
            text: "Оптимальні умови для тривалого збереження лимонів – холодильник Liebherr з вентилятором PowerCooling та повітряним фільтром FreshAir. ",
          },
          {
            text: "Функція швидкого охолодження SuperCool",
          },
        ],
      },
      {
        name: "blueCheese",
        title: "Cир з пліснявою",
        position: 3,
        maxDays: 110,
        minDays: 10,
        imgUrl: "https://liebherr.korrespondent.net/products/blueCheese.png",
        description: [
          {
            text: "В звичайному холодильнику: 10 днів",
          },
          {
            text: "В холодильнику Liebherr з зоною свіжості BioFresh: 110 днів",
          },
          {
            text: "+100 днів",
          },
        ],
        advantages: [
          {
            text: "Тверді та напівтверді розфасовані сири зберігаються 10-15 днів. Подовжити термін зберігання можна, загорнувши сир в харчову плівку або пергаментний папір. ",
          },
          {
            text: "Сир - продукт, що вбирає запахи, тому після відкриття упаковки його краще зберігати в герметичному контейнері або в пергаментному папері – він пропускає достатню кількість світла і повітря. Розмір пергаменту має бути в 2 рази більший, ніж шматок сиру. ",
          },
          {
            text: "Доречі, різні види сирів мають різний термін зберігання в звичайному холодильнику. Так, плавлений - до 3 місяців, м'який вершковий - до 30 днів, так званий «ковбасний» - до 2 місяців, розсольні сири - 30-75 днів, м'який з цвіллю – до 7 днів. ",
          },
          {
            text: "Оптимальні умови для тривалого збереження сирів - холодильник Liebherr, зона BioFresh, контейнер Meat & DairySafe. ",
          },
        ],
      },
      {
        name: "сheese",
        title: "Твердий сир",
        position: 4,
        maxDays: 110,
        minDays: 10,
        imgUrl: "https://liebherr.korrespondent.net/products/сheese.png",
        description: [
          {
            text: "В звичайному холодильнику: 10 днів",
          },
          {
            text: "В холодильнику Liebherr з зоною свіжості BioFresh: 110 днів",
          },
          {
            text: "+100 днів",
          },
        ],
        advantages: [
          {
            text: "Тверді та напівтверді розфасовані сири зберігаються 10-15 днів. Подовжити термін зберігання можна, загорнувши сир в харчову плівку або пергаментний папір. ",
          },
          {
            text: "Сир - продукт, що вбирає запахи, тому після відкриття упаковки його краще зберігати в герметичному контейнері або в пергаментному папері – він пропускає достатню кількість світла і повітря. Розмір пергаменту має бути в 2 рази більший, ніж шматок сиру. ",
          },
          {
            text: "Доречі, різні види сирів мають різний термін зберігання в звичайному холодильнику. Так, плавлений - до 3 місяців, м'який вершковий - до 30 днів, так званий «ковбасний» - до 2 місяців, розсольні сири - 30-75 днів, м'який з цвіллю – до 7 днів. ",
          },
          {
            text: "Оптимальні умови для тривалого збереження сирів - холодильник Liebherr, зона BioFresh, контейнер Meat & DairySafe. ",
          },
        ],
      },
      {
        name: "caviar",
        title: "Червона ікра",
        position: 5,
        maxDays: 6,
        minDays: 2,
        imgUrl: "https://liebherr.korrespondent.net/products/caviar.png",
        description: [
          {
            text: "В звичайному холодильнику: 2 дні",
          },
          {
            text: "В холодильнику Liebherr з зоною свіжості BioFresh: 6 днів",
          },
          {
            text: "+4 дні",
          },
        ],
        advantages: [
          {
            text: "Червона ікра продається у бляшаній тарі, але в ній не можна залишати відкритий продукт. Адже під впливом повітря метал швидко окислюється, що негативно позначається на його якості.",
          },
          {
            text: "Відразу після відкриття треба перекласти ікру в іншу ємність. Ідеально підійде скляна баночка з герметичною кришкою. Для цього можна використовувати і пластиковий контейнер, але слід переконатися, що він не має запаху.",
          },
          {
            text: "В жодному разі не можна багаторазово заморожувати і розморожувати ікру - продукт стає небезпечним для вживання.",
          },
          {
            text: "Оптимальні умови для тривалого збереження червоної ікри – холодильник Liebherr, зона BioFresh, контейнер Meat & DairySafe. ",
          },
        ],
      },
      {
        name: "milk",
        title: "Молоко",
        position: 6,
        maxDays: 12,
        minDays: 3,
        imgUrl: "https://liebherr.korrespondent.net/products/milk.png",
        description: [
          {
            text: "В звичайному холодильнику: 3 дні",
          },
          {
            text: "В холодильнику Liebherr з зоною свіжості BioFresh: 12 днів",
          },
          {
            text: "+9 днів",
          },
        ],
        advantages: [
          {
            text: "Пастеризоване молоко у ємності, що була відкрита, в звичайному холодильнику з третього дня починає втрачати свої поживні цінності та смакові властивості. Більше 5 діб зберігати його не можна. ",
          },
          {
            text: "Відкрите молоко краще перелити в емальовану або скляну ємність з герметичною кришкою,  так воно залишиться свіжим довше, ніж в пакеті. ",
          },
          {
            text: "Дверцята звичайного холодильника - це не краще місце для зберігання молока: продукт вимагає нижчої температури. ",
          },
          {
            text: "Оптимальні умови для тривалого збереження молока – холодильник Liebherr, зона BioFresh, контейнер Meat & DairySafe. ",
          },
        ],
      },
      {
        name: "eggs",
        title: "Курячі яйця",
        position: 7,
        maxDays: 45,
        minDays: 15,
        imgUrl: "https://liebherr.korrespondent.net/products/eggs.png",
        description: [
          {
            text: "В звичайному холодильнику: 15 днів",
          },
          {
            text: "В зоні BioFresh холодильника Liebherr: 45 днів",
          },
          {
            text: "+30 днів",
          },
        ],
        advantages: [
          {
            text: "Миті та домашні яйця зберігаються довше.",
          },
          {
            text: "Краще зберігати яйця вістрями донизу. Тоді жовток буде знаходитися в центрі і не торкатиметься повітряного шару, що розташований у тупого кінця. ",
          },
          {
            text: "Яйця з тріснутою шкаралупою краще використовувати відразу або заморозити.",
          },
          {
            text: "Оптимальні умови для тривалого зберігання яєць – холодильник Liebherr, зона BioFresh, контейнер Meat & DairySafe. ",
          },
        ],
      },
      {
        name: "salad",
        title: "Готові салати, закуски, напої",
        position: 8,
        maxDays: false,
        minDays: false,
        imgUrl: "https://liebherr.korrespondent.net/products/salad.png",
        description: [
          {
            text: "В звичайному холодильнику: є ризик занадто повільного охолодження ",
          },
          {
            text: "В холодильнику Liebherr з режимом SuperCool: ідеальне охолодження",
          },
        ],
        advantages: [
          {
            text: "SuperCool – функція, що дозволяє автоматично знижувати температуру холодильної камери до + 2 ° C, + 3 ° C або + 4 ° C на 6 або 12 годин в залежності від моделі холодильника. ",
          },
          {
            text: "В таких умовах продукти швидко охолоджуються, виключається ризик підмороження, що властивий деяким звичайним холодильникам.  ",
          },
          {
            text: "Смак і консистенція страв зберігаються.",
          },
          {
            text: "Оптимальні умови для тривалого збереження готових салатів, закусок та напоїв – холодильник Liebherr з режимом SuperCool",
          },
        ],
      },
      {
        name: "pan",
        title: "Борщ",
        position: 9,
        maxDays: false,
        minDays: false,
        imgUrl: "https://liebherr.korrespondent.net/products/pan.png",
        description: [
          {
            text: "В звичайному холодильнику: прискорене псування в моделях з нестабільним температурним фоном",
          },
          {
            text: "В холодильнику Liebherr з режимом SuperCool: швидке охолодження і комфортне зберігання",
          },
        ],
        advantages: [
          {
            text: "Температура в холодильнику не повинна перевищувати 5 ° C. ",
          },
          {
            text: "Гарячу страву не можна ставити в холодильник, краще охолодити до кімнатної температури. ",
          },
          {
            text: "Страву теплу або кімнатної температури накрийте герметичною кришкою, таким чином зменшиться утворення конденсату та льоду у внутрішній камері холодильника. ",
          },
          {
            text: "Заздалегідь активуйте режим SuperCool в холодильнику Liebherr, він допоможе зберегти температуру всередині холодильника на заданому рівні.",
          },
          {
            text: "Оптимальні умови для тривалого збереження готових борщу– холодильник Liebherr з режимом SuperCool",
          },
        ],
      },
      {
        name: "meat",
        title: "М'ясо",
        position: 10,
        maxDays: 6,
        minDays: 3,
        imgUrl: "https://liebherr.korrespondent.net/products/meat.png",
        description: [
          {
            text: "В звичайному холодильнику: 3 дні",
          },
          {
            text: "В холодильнику Liebherr з зоною свіжості BioFresh: 6 днів",
          },
          {
            text: "+3 дні",
          },
        ],
        advantages: [
          {
            text: "Охолоджене м'ясо потрібно досить щільно загорнути в пергамент перед розміщенням в холодильнику. Так воно буде «дихати» і збереже свіжість довше. ",
          },
          {
            text: "Термін зберігання можна продовжити, відокремивши м'ясо від кістки – так воно може зберігатися на день-два довше.",
          },
          {
            text: "Оптимальний термін зберігання охолодженого м'яса в звичайному холодильнику – до 3 днів.  Якщо м'ясо пролежало довше, потрібно його терміново приготувати або заморозити",
          },
          {
            text: "Оптимальні умови для тривалого збереження м'яса – холодильник Liebherr, зона BioFresh, контейнер Meat & DairySafe.",
          },
        ],
      },
      {
        name: "mushrooms",
        title: "Гриби",
        position: 11,
        maxDays: 7,
        minDays: 3,
        imgUrl: "https://liebherr.korrespondent.net/products/mushrooms.png",
        description: [
          {
            text: "В звичайному холодильнику: 3 дні",
          },
          {
            text: "В холодильнику Liebherr з зоною свіжості BioFresh: 7 днів",
          },
          {
            text: "+4 дні",
          },
        ],
        advantages: [
          {
            text: "У поліетиленовому пакеті зберігати свіжі гриби не рекомендується, бо без повітря там починає утворюватися цвіль.",
          },
          {
            text: "Свіжозібрані гриби треба вимити, просушити, переложити в паперовий пакет або металевий посуд з емальованими стінками та накрити папером чи бавовняною тканиною. І після всіх цих маніпуляцій у звичайному холодильнику вони можуть зберігатися не більше 3 днів. Гриби з магазину у вакуумній упаковці зберігатимуться в звичайному холодильнику 5-7 днів. ",
          },
          {
            text: "Цей продукт здатний, як губка, вбирати в себе сторонні запахи. Тому варто зберігати гриби подалі від прянощів, спецій, цибулі та часнику.",
          },
          {
            text: "Оптимальні умови для тривалого збереження грибів – холодильник Liebherr, зона BioFresh, контейнер Fruit & VegetableSafe. ",
          },
        ],
      },
      {
        name: "beet",
        title: "Буряк",
        position: 12,
        maxDays: 18,
        minDays: 6,
        imgUrl: "https://liebherr.korrespondent.net/products/beet.png",
        description: [
          {
            text: "В звичайному холодильнику: 6 днів",
          },
          {
            text: "В холодильнику Liebherr з зоною свіжості BioFresh: 18 днів",
          },
          {
            text: "+12 днів",
          },
        ],
        advantages: [
          {
            text: "Найбільш витриваліший для зберігання - буряк середнього розміру з діаметром в найтовстішій частині коренеплоду від 10 до 15 сантиметрів. Такі коренеплоди менше страждають від грибкових хвороб і не так швидко в'януть, як малі овочі.",
          },
          {
            text: "Зберігають буряк очищеним від бруду, але не митим - так, щоб він мав доступ повітря. ",
          },
          {
            text: "Найкраще буряк зберігається при високій вологості до 90% і температурі повітря + 2⁰С",
          },
          {
            text: "З-поміж інших найпопулярніший спосіб зберігання буряка в звичайному холодильнику – загорнутим в харчову плівку або пакет з отворами. Однак необхідно стежити, щоб усередині пакета не збирався конденсат.",
          },
          {
            text: "Оптимальні умови для тривалого збереження буряку – холодильник Liebherr, зона BioFresh, контейнер Fruit & VegetableSafe. ",
          },
        ],
      },
      {
        name: "carrot",
        title: "Морква",
        position: 13,
        maxDays: 80,
        minDays: 50,
        imgUrl: "https://liebherr.korrespondent.net/products/carrot.png",
        description: [
          {
            text: "В звичайному холодильнику: 50 днів",
          },
          {
            text: "В холодильнику Liebherr з зоною свіжості BioFresh: 80 днів",
          },
          {
            text: "+30 днів",
          },
        ],
        advantages: [
          {
            text: "Базарну моркву потрібно очистити від грунту і запакувати в поліетиленові вакуумні мішки. При цьому коренеплоди бажано не мити. ",
          },
          {
            text: "Вимиту магазинну моркву довго зберігати не можна, максимум 1-2 тижні.",
          },
          {
            text: "Важливо дотримуватися режиму температури і вологості. Зміна температури навіть на 2 градуси може порушити «біологічний спокій» моркви, і вона почне проростати, в'янути та хворіти. Тому при зберіганні моркви в звичайному холодильнику її слід час від часу продивлятися, щоб вилучити зіпсовані корнеплоди. ",
          },
          {
            text: "При відправленні моркви на зберігання, вона має бути сухою. А згодом при виявленні конденсату моркву слід витягти, просушити і запакувати заново.",
          },
          {
            text: "Оптимальні умови для тривалого збереження моркви – холодильник Liebherr, зона BioFresh, контейнер Fruit & VegetableSafe.",
          },
        ],
      },
      {
        name: "apple",
        title: "Яблука",
        position: 14,
        maxDays: 80,
        minDays: 40,
        imgUrl: "https://liebherr.korrespondent.net/products/apple.png",
        description: [
          {
            text: "В звичайному холодильнику: 40 днів",
          },
          {
            text: "В холодильнику Liebherr з зоною свіжості BioFresh: 80 днів",
          },
          {
            text: "+40 днів",
          },
        ],
        advantages: [
          {
            text: "Здатність яблук зберігати свої корисні властивості в холодильнику залежить від сорту. Так, літні сорти можуть пролежати в звичайному холодильнику від 2 до 4 тижнів. Осінні яблука зберігаються 1-2 місяці. А зимові сорти довше всіх не втрачають своїх первісних якостей: 4-6 місяців при температурі + 3-5 градусів. ",
          },
          {
            text: "Для яблук важлива достатня вологість повітря, оптимальна - 90-95%. При недостатній вологості плоди зів'януть і зморщаться, а при підвищеній - почнуть швидко гнити.",
          },
          {
            text: "Важлива й вентиляція: якщо яблука лежать в закритому просторі довгий час, вони виділяють газ етилен, що значно знижує термін зберігання фруктів. Тому в звичайному холодильнику камеру з яблуками потрібно кожен день провітрювати.",
          },
          {
            text: "Оптимальні умови для тривалого збереження яблук – холодильник Liebherr, зона BioFresh, контейнер Fruit & VegetableSafe. ",
          },
        ],
      },
      {
        name: "dumplings",
        title: "Пельмені, напівфабрикати, морозиво",
        position: 15,
        maxDays: false,
        minDays: false,
        imgUrl: "https://liebherr.korrespondent.net/products/dumplings.png",
        description: [
          {
            text: "В звичайному холодильнику: під час тривалої відпустки продукти треба викидати або не вимикати холодильник",
          },
          {
            text: "В холодильнику Liebherr з режимом DuoCooling: можна залишити працювати тільки морозильну камеру. ",
          },
        ],
        advantages: [
          {
            text: "Використання в холодильнику двох незалежних один від одного холодильних контурів дає можливість вільно регулювати температуру в холодильній і морозильній камері. ",
          },
          {
            text: "Змішування запахів між камерами повністю відсутнє.  ",
          },
          {
            text: "Оптимальні умови для тривалого збереження навівфабрикатів, пельменей, морозива – холодильник Liebherr з режимом DuoCooling.  ",
          },
        ],
      },
      {
        name: "berries",
        title: "Ягоди, гриби, фрукти, овочі, зелень (заморожування)",
        position: 16,
        maxDays: null,
        minDays: null,
        imgUrl: "https://liebherr.korrespondent.net/products/berries.png",
        description: [
          {
            text: "В звичайному холодильнику: ризик злипання плодів між собою, нерівномірне замороження, непривабливий вигляд",
          },
          {
            text: "В холодильнику Liebherr з режимом SuperFrost: глибока і рівномірна заморозка",
          },
        ],
        advantages: [
          {
            text: "Овочі та фрукти перед заморожуванням треба ретельно вимити і обсушити - якщо цього не зробити, вся що заморожуємо, злипнеться в неапетитну грудку. ",
          },
          {
            text: "Ідеальне заморожування – при температурах -28 ... -38 ° С. Це дозволяє якнайкраще зберегти якість продуктів, адже вони заморожуються глибоко і рівномірно.",
          },
          {
            text: "Глибока та швидка заморозка позбавляє від таких неприємностей як крижана кірка на плодах, примерзання до стінок та полиць. Продукти не втрачають властивих їм смакових і поживних якостей. ",
          },
          {
            text: "Оптимальні умови для тривалого збереження заморожених ягід, плодів, грибів, зелені – холодильник Liebherr з функцією SuperFrost. ",
          },
          {
            text: "Корисний гаджет 1: акумулятори холоду. Дозволяють зберегти необхідну температуру в морозильній камері при короткочасному відключенні електроживлення.",
          },
          {
            text: "Корисний гаджет 2: піднос. З ним можна зручно розподілити продукти без ризику примерзання один до одного, отже їхня первинна форма буде збережена. ",
          },
        ],
      },
    ],
  },
  mutations: {},
  actions: {},
  getters: {
    getProduct: (state) => {
      return state.products;
    },
  },
  modules: {},
});