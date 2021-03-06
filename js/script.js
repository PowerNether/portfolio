$(window).on("scroll", function () {
  if ($(this).scrollTop() > window.innerHeight / 2) {
    $(".header-menu").addClass("header-menu_fixed-top");
  } else {
    $(".header-menu").removeClass("header-menu_fixed-top");
  }
});
$(".jobs-content__popup").magnificPopup({
  type: "image",
});
$(".jobs-content__popup-one").magnificPopup({
  items: [
    {
      src: "../img/item5-1.png",
    },
    {
      src: "../img/item5-2.png",
    },
    {
      src: "../img/item5-3.png",
    },
    {
      src: "../img/item5-4.png",
    },
    {
      src: "../img/item5-5.png",
    },
  ],
  gallery: {
    enabled: true,
  },
  type: "image", // this is default type
});
$(".jobs-content__popup-two").magnificPopup({
  items: [
    {
      src: "../img/item6-1.png",
    },
    {
      src: "../img/item6-2.png",
    },
    {
      src: "../img/item6-3.png",
    },
    {
      src: "../img/item6-4.png",
    },
    {
      src: "../img/item6-5.png",
    },
    {
      src: "../img/item6-6.png",
    },
  ],
  gallery: {
    enabled: true,
  },
  type: "image", // this is default type
});
