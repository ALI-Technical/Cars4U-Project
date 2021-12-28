$('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  touchMove: false,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  arrows: false,
  speed: 2000,
  fade: true,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 995,
      settings: {
        slidesToShow: 1,


      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,

      }
    },
    {
      breakpoint: 365,
      settings: {
        slidesToShow: 1,


      }
    }
  ]
});

/* /// Slider-2/// */

$('.slider-2').slick({
  dots: false,
  infinite: true,
  speed: 300,
  arrows: true,
  autoplay: false,
  dots: true,
  prevArrow:'<i class="slick-prev fas fa-angle-left"></i>',
  nextArrow:'<i class="slick-next fas fa-angle-right"></i>',
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        autoplay: true,
        autoplaySpeed: 2000,  
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
function seeMore(btn) {
  if(btn.innerHTML=="Read More"){
    window.location.assign("about.html");
  }
  if(btn.innerHTML=="See More"){
    window.location.assign("cars.html")
  }
}
/* Modal Function */

function prodModal(price , name , img , desc){
    var modalImg = document.getElementById("modalImg");
    var modalPrice = document.getElementById("modalPrice");
    var modalName = document.getElementById("modalName");
    var modalDesc = document.getElementById("modalDesc");

    modalImg.src = img;
    modalName.innerHTML = name;
    modalPrice.innerHTML = price;
    modalDesc.innerHTML = desc;
}
