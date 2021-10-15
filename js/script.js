//sticky menu

// $(window).scroll(function(){
//    if($(window).scorllTop() > 100){
//       $(".menu").addClass(stickumenu)
   
//       }
// })

$(".backtotop").click(function(){
  $("html,body").animate({
    scrollTop: 0
  },1000)
})
$(window).scroll(function(){
  if($(window).scrollTop() > 300){
    $(".backtotop").fadeIn()
  }else{
    $(".backtotop").fadeOut()
  }
  
})


$('.banner-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
            prevArrow: '<i class="fas fa-arrow-right prev"></i>',
            nextArrow: '<i class="fas fa-arrow-left next"></i>',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
            arrows: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });






  $('.service-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
      vertical: true,
      centerMode: true,
        centerPadding: '0',
      prevArrow: '<i class="fas fa-angle-up prev"></i>',
      nextArrow: '<i class="fas fa-angle-down next"></i>',
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
              arrows: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: true,

          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });



  $('.img-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
       vertical: true,
      centerMode: true,
        centerPadding: '0px',
       prevArrow: '<i class="fas fa-angle-up prev"></i>',
       nextArrow: '<i class="fas fa-angle-down next"></i>',
        asNavFor: ".text-slider",
      
    responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
          dots: false,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
          vertical: false,
          prevArrow: '<i class="fas fa-angle-left prev"></i>',
            nextArrow: '<i class="fas fa-angle-right next"></i></i>',
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]   
  });


  $('.text-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
       vertical: true,
       prevArrow: '<i class="fas fa-angle-up prev"></i>',
       nextArrow: '<i class="fas fa-angle-down next"></i>',
        asNavFor: ".img-slider",
      
     responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
          vertical: false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]  

  });



  $('.counter').counterUp({
    delay: 10,
    time: 1000
});



$('.img-auto-slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplaySpeed: 1000,
    autoplay: true,
    centerMode: true,
    centerPadding: '0px',
    dots: false,
    arrows: false,
    infinite: true,
    
     responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 678,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
          vertical: false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ] 
})


	


























