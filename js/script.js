$(function () {

  if ($(window).width() >= 640) {
    var headerOffset = $(".header").height() + 30;
  } else {
    var headerOffset = 30;
  }

  // Navigation

  $("a[data-section]").bind("click", function (e) {
    var section = $(this).data("section");
    var CurrentSection = $("#" + section);
    var offset = CurrentSection.offset().top - headerOffset;

    $("body").animate(
        {
          scrollTop: offset
        },
        1000
    );

    e.preventDefault();
    return false;
  });

  // Scroll page

  $(window).scroll(function () {

    if ($(window).width() >= 640) {
      if ($(this).scrollTop() > 0) {
        $('body').addClass('page--scroll');
      } else {
        $('body').removeClass('page--scroll');
      }
    }

    var e = $("a[data-section='section-1']");

    if ($(this).scrollTop() >= $("#section-2").offset().top - headerOffset - 50) {
      e = $("a[data-section='section-2']");
    }

    if ($(this).scrollTop() >= $("#section-3").offset().top - headerOffset - 50) {
      e = $("a[data-section='section-3']");
    }

    if ($(this).scrollTop() < $("#section-2").offset().top - headerOffset - 50) {
      e = $("a[data-section='section-1']");
    }

    $(".menu__item--active").removeClass("menu__item--active");
    e.addClass("menu__item--active");
  });

});