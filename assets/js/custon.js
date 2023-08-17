// DEFINE AOS LINK=========================================== */
AOS.init({
    duration: 1000,
    once: true,
});
// ========== BACK TO TOP
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $("#scroll").fadeIn();
        } else {
            $("#scroll").fadeOut();
        }
    });
    $("#scroll").click(function () {
        $("html, body").animate({
                scrollTop: 0,
            },
            40
        );
        return false;
    });
});

// <============== NAVBAR CSS ==================>
const sidebar = document.querySelector(".overlay");

    function Togleside() {
      sidebar.classList.add("show_nav");
      document.body.classList.add("overflow_hidden");
      document.body.classList.remove("overflow-auto");
      document.body.classList.add("vh-100");
    }

    function hideNav() {
      sidebar.classList.remove("show_nav");
      document.body.classList.add("overflow-auto");
      document.body.classList.remove("overflow_hidden");
      document.body.classList.remove("vh-100");
}
   
$('.slider_one').slick({
  centerMode: true,
  centerPadding: '0px',
  autoplay: true,
  slidesToShow: 1,
});
   
$('.slider_two').slick({
  centerMode: true,
  centerPadding: '60px',
  autoplay: true,
  arrows: true,
      nextArrow: ".left_arrow_two",
      prevArrow: ".right_arrow_two",
  slidesToShow: 4,
  responsive: [
    {
    
      breakpoint: 1200,
      settings: {
               slidesToShow: 3,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
         centerMode: true,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
          centerPadding: '0px',
      },
    },
  ],
});
//  $('.slider_one').slick({
//       slidesToShow: 1,
//       autoplay: true,
//       dots: false,
//       autoplaySpeed: 2000,
//       arrows: true,
//       nextArrow: ".left_arrow",
//       prevArrow: ".right_arrow",
//       responsive: [{
//           breakpoint: 1200,
//           settings: {
//             arrows: false,
//             slidesToShow: 1
//           }
//         },
//         {
//           breakpoint: 1024,
//           settings: {
//             arrows: false,
//             slidesToShow: 1
//           }
//         },
//         {
//           breakpoint: 900,
//           settings: {
//             arrows: false,
//             slidesToShow: 1
//           }
//         },
//         {
//           breakpoint: 768,
//           settings: {
//             slidesToShow: 1
//           }
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1
//           }
//         }
//       ]
//     });