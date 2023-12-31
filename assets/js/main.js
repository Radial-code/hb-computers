// Slider property benefits
$(".Slider").slick({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: $(".prev_arrow"),
  nextArrow: $(".next_arrow"),
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".responsive").slick({
  dots: false,
  infinite: true,
  speed: 500,

  slidesToShow: 2,
  slidesToScroll: 2,
  // autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: $(".prev_btn"),
  nextArrow: $(".next_btn"),
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
});

// Show Navbar
function shownav() {
  document.getElementById("showul").classList.toggle("start_0");
  document.body.classList.toggle("overflow-hidden");
}

// service dropdown
const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownContent = document.querySelector(".dropdown-content");

dropdownToggle.addEventListener("click", function () {
  dropdownContent.style.display =
    dropdownContent.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", function (event) {
  if (!dropdownToggle.contains(event.target)) {
    dropdownContent.style.display = "none";
  }
});
