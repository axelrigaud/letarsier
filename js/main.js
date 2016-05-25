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
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000, "easeInOutSine");
  });


    $ytplayer = $(".player");
    $ytplayer.YTPlayer();

  $('.videos-item a').on('click', function(e){
    e.preventDefault();
    $ytplayer.YTPChangeMovie({videoURL:$(this).attr('href'),autoPlay:true});
    //$ytplayer.YTPPlay();
  });

  $(window).on("load", function(){
    $('.loader-wrapper').fadeOut(700);
    $('.hero').fadeIn(700);
  });

  //owl carousel
  $('.owl-carousel').owlCarousel({autoplay:10000, slideSpeed:1000, loop:true, rewindNav: true});

});
