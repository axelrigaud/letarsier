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
  var fadeTime = 700;
  $window.on('load', function(){
    $('.loader-wrapper').fadeOut(fadeTime);
    $('.hero').fadeIn(fadeTime, function(){
      $('.lettering-container').addClass('fade-in');
      setTimeout(function(){
        $('.lettering-container').addClass('subtle-blink');
      },fadeTime*2);
    });
  });

  // waypoints
  function setHrWaypoint(id) {
    var hrWaypoint = new Waypoint({
      element: document.getElementById(id),
      handler: function(direction) {
        $('#'+id).addClass('full-width');
      },
      offset: '70%'
    });
  }
  setHrWaypoint('about-hr');
  setHrWaypoint('shows-hr');
  setHrWaypoint('ep-hr');

  var socialWaypoint = new Waypoint({
    element: document.getElementById('nav-list'),
    handler: triggerSocialItems,
    offset: '100%'
  });

  var offsetSocial= 100;
  function triggerSocialItems() {
    $('#facebook').addClass('appear-from-bottom');
    setTimeout(function(){
      $('#instagram').addClass('appear-from-bottom');
    },offsetSocial);
    setTimeout(function(){
      $('#youtube').addClass('appear-from-bottom');
    },offsetSocial*2);
    setTimeout(function(){
      $('#soundcloud').addClass('appear-from-bottom');
    },offsetSocial*3);
  }

  //about
  $aboutLeft = $('.about-left');
  $aboutPic = $('.about-pic-container');
  $window.on('resize load', function(){
    heightToMatch = $aboutLeft.height();
    $aboutPic.css('height', heightToMatch);
  });

  // spining overlay

  var $over = $('.rotating-overlay'),
      $showsSection = $('.shows'),
      targetSize,
      showsHeight = $showsSection.outerHeight(true),
      showsWidth = $showsSection.width();

  function setOverSize() {
    // /summon pythagore
    targetSize = Math.pow(showsHeight,2) + Math.pow(showsWidth,2)
    targetSize = Math.sqrt(targetSize);

    $over.css({
      'width' : targetSize+150,
      'height' : targetSize+150
    });
  }

  $window.on('load resize', setOverSize);

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
