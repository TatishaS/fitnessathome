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

  // 1. Объявляю jquery-переменную для слайдера
  let $sliderIntro = $(".slider__items");

  // 2. Задаю параметры слайдера
  $sliderIntro.slick({
    slidesToShow: 2,
    variableWidth: true,
    infinite: false,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="Предыдущее видео"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="Следующее видео"></button>',
  });

  // 3. Создаю для счетчика пустой див с классом "slider__counter"
  let sliderCounter = document.createElement("div");
  sliderCounter.classList.add("slider__counter");

  // 4. Получаю индекс активного слайда с помощью метода slickCurrentSlide (см.документацию)
  let currentIndex = $sliderIntro.slick("slickCurrentSlide");
  console.log(currentIndex); //Проверяю индекс

  //5. Создаю функцию "обновить счетчик слайдера"
  let updateSliderCounter = function (slick, currentIndex) {
    // 6. Получаю номера слайда для вывода в счетчик
    currentSlide = currentIndex + 1;

    //7. Вычисляю количество слайдов в слайдере
    let slideCount = $sliderIntro.children.length;
    console.log(slideCount); //Проверяю кол-во слайдов, сейчас выводится неверное - 2 вместо 3

    // 8. Вывожу номер слайда и кол-во слайдов в счетчик
    $(sliderCounter).text(currentSlide + "/" + slideCount);
  };

  //9. Инцципализирую слайдер, вывожу счетчик с помощью append и обновляю в счетчике данные
  $sliderIntro.on("init", function (event, slick) {
    $sliderIntro.append(sliderCounter);
    updateSliderCounter(slick);
  });

  // 10. Обновляю счетчик каждый раз после смены слайда
  $sliderIntro.on("afterChange", function (event, slick, currentSlide) {
    updateSliderCounter(slick, currentSlide);
  });
});
