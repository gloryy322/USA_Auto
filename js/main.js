$(function () {
  $(".carousel__inner").slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    autoplay: true,
    responsive: [
      {
        breakpoint: 841,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

$('a[href^="#"').on("click", function () {
  let href = $(this).attr("href");

  $("html, body").animate({
    scrollTop: $(href).offset().top,
  });
  return false;
});
