'use strict';

$(document).ready(function () {

  var Concerts = function () {
    var buildTable = function buildTable() {
      var items = [];
      $.getJSON("/concerts.json", function (data) {
        $.each(data.concerts, function (key, val) {
          items.push('<tr class="gigs__row"><td class="gigs__date">' + val.date + '</td><td class="gigs__location">' + val.location + '</td><td class="gigs__description">' + val.details + '</td></tr>');
        });
        $("<tbody/>", {
          html: items.join("")
        }).appendTo(".gigs__table");
      });
    };
    return {
      init: function init() {
        buildTable();
      }
    };
  }();

  var App = function () {

    var fadeTime = 700;
    var trackOutboundLink = function trackOutboundLink(url) {
      ga('send', 'event', 'outbound', 'click', url, { 'hitCallback': function hitCallback() {
          document.location = url;
        }
      });
    };

    return {
      init: function init() {

        $(window).on('load', function () {
          $('.loader-wrapper').fadeOut(fadeTime);
          $('.hero').fadeIn(fadeTime, function () {});
        });

        $('a').on('click', function (e) {
          trackOutboundLink($(this).attr('href'));
        });

        Concerts.init();
      }
    };
  }();

  App.init();
});
//# sourceMappingURL=main.js.map
