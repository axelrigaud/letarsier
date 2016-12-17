'use strict';

$(document).ready(function () {

  var fadeTime = 700;
  $(window).on('load', function () {
    $('.loader-wrapper').fadeOut(fadeTime);
    $('.hero').fadeIn(fadeTime, function () {});
  });

  //ga
  $('a').on('click', function (e) {
    trackOutboundLink($(this).attr('href'));
  });

  var trackOutboundLink = function trackOutboundLink(url) {
    ga('send', 'event', 'outbound', 'click', url, { 'hitCallback': function hitCallback() {
        document.location = url;
      }
    });
  };
});
//# sourceMappingURL=main.js.map
