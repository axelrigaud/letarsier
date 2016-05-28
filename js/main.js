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

  $window = $(window);
  $window.on("load", function(){
    $('.loader-wrapper').fadeOut(700);
    $('.hero').fadeIn(700);
  });

  //about
  $aboutLeft = $('.about-left');
  $aboutPic = $('.about-pic-container');
  $window.on('resize load', function(){
    heightToMatch = $aboutLeft.height();
    $aboutPic.css('height', heightToMatch);
  });

  // youtube
  $ytplayer = $(".player");
  $ytplayer.YTPlayer();

  $('.videos-item a').on('click', function(e){
    e.preventDefault();
    $ytplayer.YTPChangeMovie({videoURL:$(this).attr('href'),autoPlay:true});
  });

  //ga
  $('a').on('click', function(e){
    trackOutboundLink($(this).attr('href'));
  });

  var trackOutboundLink = function(url) {
    ga('send', 'event', 'outbound', 'click', url, {'hitCallback':
      function () {
      document.location = url;
      }
    });
  }

});
