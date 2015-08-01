videos = [
    {
        title: '<span>Emerge</span>',
        youtubeId: '3DkjC_Anyc0'
    },
    {
        title: 'Polo\'s <span>Tools</span>',
        youtubeId: 'zF4BqoP82MA'
    },
    {
        title: '<span>Clouds</span> Became <span>Green</span>',
        youtubeId: 'vbJi8L-MkRg'
    },
    {
        title: 'Night <span>Howl</span>',
        youtubeId: '-DCnGMV1ZGQ',
        thumbName: 'howl-thumb'
    },
    {
        title: 'Between the <span>Stomach</span> and the <span>Heart</span>',
        youtubeId: 'apiroDHxoz0'
    }
];

$(document).ready(function(){
  
  $('.fa-angle-down').on('click',function(e){
    e.preventDefault;
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000, "easeInOutSine");
  });
  
  


  //swiper
  var $window = $(window);
  var scrHeight = $window.height();
  $('.swiper-slide').css('height', scrHeight);

  $slider =   $('.swiper-wrapper')

  $slider.find('.slider-caption').each(function(){
        var scapHeight = $(this).outerHeight();
        var scapSliderHeight = $slider.outerHeight();
        $(this).css({ top: ( scapSliderHeight - scapHeight ) / 2 + 'px' });
        });

  var mySwiper = new Swiper('.swiper-container', {
    speed: 400,
    autoplay: 4000,
    effect: "fade",
    progress: true,
    onProgressChange: function(swiper){
        for (var i = 0; i < swiper.slides.length; i++){
            var slide = swiper.slides[i];
            var progress = slide.progress;
            var translate = progress*swiper.width;
            var opacity = 1 - Math.min(Math.abs(progress),1);
            slide.style.opacity = opacity;
            swiper.setTransform(slide,'translate3d('+translate+'px,0,0)');
        }
    },
  });
    $ytplayer = $(".player")
    $ytplayer.YTPlayer();

  $('.videos-item a').on('click', function(e){
    e.preventDefault();
    $ytplayer.YTPChangeMovie({videoURL:$(this).attr('href'),autoPlay:true});
    //$ytplayer.YTPPlay();
  })


 

});
