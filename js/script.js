$(document).ready(function(){
    $('.third-block__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots:true,
        responsive:[
            {
                breakpoint: 1150,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll: 2
                   
                },
                breakpoint: 550,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll: 1
                   
                }
            }
        ]
    });
    $(".header__block-navigation__menu-mob__burger").click(function() {
        $('body').toggleClass('scroll-hidden'); 
        $(this).toggleClass("active");
        $('.header__block-navigation__block-menu-mob').slideToggle(300, function(){
          if($(this).css('display') === "none"){
            $(this).removeAttr('style');
          }
         
        });
      });
});

