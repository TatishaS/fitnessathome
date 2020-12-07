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

  let $sliderIntro = $(".slider__items");
  //var $sliderCatalog = $(".catalog__slides");

  $sliderIntro.slick({
    slidesToShow: 2,
    variableWidth: true,
    infinite: false,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="Предыдущее видео"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="Следующее видео"></button>',
  });

  if ($sliderIntro.length) {
    let currentSlide;
    let slidesCount;
    let sliderCounter = document.createElement("div");
    sliderCounter.classList.add("slider__counter");
    let sliderText = document.createElement("div");
    sliderCounter.classList.add("slider__text");

    let updateSliderCounter = function (slick, currentIndex) {
      currentSlide = slick.slickCurrentSlide() + 1;
      slidesCount = slick.slideCount;
      $(sliderCounter).text(currentSlide + "/" + slidesCount);
      $(sliderText).text(currentSlide.attr("alt"));
    };

    $sliderIntro.on("init", function (slick) {
      $sliderIntro.append(sliderCounter);
      $sliderIntro.append(sliderText);
      updateSliderCounter(slick);
    });

    $sliderIntro.on("afterChange", function (slick, currentSlide) {
      updateSliderCounter(slick, currentSlide);
    });
    $sliderIntro.slick();
  }
});
