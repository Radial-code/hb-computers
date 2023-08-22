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
  responsive: [{
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
      breakpoint: 700,
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
  responsive: [{
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

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
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