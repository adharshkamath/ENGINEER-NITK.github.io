window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  let windowPosition = window.scrollY > 0;
  header.classList.toggle("scrolling-active", windowPosition);
});


// js for gallery carosal
$(".gallery-section-slider").slick({
  autoplay: true,
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  speed: 1000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});


let btn = document.getElementById('nav-button')
let visible = false
btn.addEventListener("click" ,()=>{
  if(visible == false)
  {
    btn.style.border = "none"
    document.getElementById('nav-menu').style.width = "100%"
    visible = true
  }
  else{
    btn.style.border = "none"
    document.getElementById('nav-menu').style.width = "0%"
    visible = false
  }
})



// animate on scroll
AOS.init();