
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
  // autoplay: true,
  slidesToShow: 1,
    nextArrow: ".right_arrow_slider_one",
      prevArrow: ".left_arrow_slider_one",
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