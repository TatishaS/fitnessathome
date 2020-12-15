$(function () {
  $(".menu__btn").on("click", function () {
    $(".menu__btn").toggleClass("menu__btn--active");
    $(".menu__list").toggleClass("menu__list--active");
  });

  $(".menu__item-link").on("click", function () {
    $(".menu__btn").removeClass("menu__btn--active");
    $(".menu__list").removeClass("menu__list--active");
  });

  $("#fullpage").fullpage({
    autoScrolling: true,
    scrollHorizontally: true,
    sectionSelector: ".page-section",
    scrollOverflow: true,
    menu: "#header__nav",
    anchors: ["top", "catalog", "schedule", "new", "food", "feedback"],
  });

  let $sliderIntro = $('.slider__items');
  let sliderCounter = document.createElement('div');
  sliderCounter.classList.add('slider__counter');

  function updateSliderCounter(slick) {
    // 6. Получаю номера слайда для вывода в счетчик
    currentSlide = slick.currentSlide + 1;

    //7. Вычисляю количество слайдов в слайдере

    // 8. Вывожу номер слайда и кол-во слайдов в счетчик
    $(sliderCounter).text(currentSlide + '/' + slick.slideCount);
  }

  // 1. Объявляю jquery-переменную для слайдера

  // событие init срабатывает после инициализации слайдера, т.е. его нужно объявить до инициализации слайдера
  // $sliderIntro.slick() - вот это инициализация слайдера
  $sliderIntro.on('init', function (event, slick) {
    $sliderIntro.append(sliderCounter);
    updateSliderCounter(slick);
  });

  // 2. Задаю параметры слайдера
  $sliderIntro.slick({
    slidesToShow: 1.5,
    variableWidth: true,
    infinite: false,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="Предыдущее видео"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="Следующее видео"></button>',
  });

  // 3. Создаю для счетчика пустой див с классом "slider__counter"

  // 4. Получаю индекс активного слайда с помощью метода slickCurrentSlide (см.документацию)

  //5. Создаю функцию "обновить счетчик слайдера"

  //9. Инцципализирую слайдер, вывожу счетчик с помощью append и обновляю в счетчике данные

  // 10. Обновляю счетчик каждый раз после смены слайда
  $sliderIntro.on('afterChange', function (event, slick) {
    updateSliderCounter(slick);
  });
});
