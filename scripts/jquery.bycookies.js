;(function ($, window, undefined) {

  /*
   * BY Cookies
   * 
   * Usage: 
   *  $('body').bycookies();
   *  
   *  $('body').bycookies({
   *    declineButton: false
   *  });
   * 
   * Dependencies:
   *  - jQuery Cookie Plugin v1.3.1 (https://github.com/carhartl/jquery-cookie)
   *  
   * @author: BY
   * @url: http://github.com/bycom
   * @version: 1.0
  */

  var pluginName = "bycookies",
      defaults = {
        message:            "Este site utiliza cookies.",
        acceptButton:       true,
        acceptButtonText:   "Aceitar",
        declineButton:      true,
        declineButtonText:  "Recusar",
        moreInfoLink:       true,
        moreInfoText:       "O que são cookies?",
        moreInfoUrl:        "http://pt.wikipedia.org/wiki/Cookie",
        easing:             "swing",
        animationSpeed:     500,
        cookieDefaults:     {
          expires: 365,
          path: '/'
        }
      };

  // Constructor
  function BY_Cookies(element, options) {
    this.element = element;
    this.options = $.extend( {}, defaults, options );
    this._defaults = defaults;
    this._name = pluginName;
    this.init();
  }

  BY_Cookies.prototype = {

    init: function() {

      $cookiesAccepted = $.cookie(this._name) === 'cookies_accepted';
      $cookiesDeclined = $.cookie(this._name) === 'cookies_declined';

      if(($cookiesDeclined) || (!$cookiesAccepted)) {

        // By Cookies container
        $container = $('<div/>').addClass(this._name + '-container');
        $container.append(this.options.message);

        // Accept button
        if(this.options.acceptButton) {
          this.acceptButton($container);
        }

        // Decline button
        if(this.options.declineButton) {
          this.declineButton($container);
        }

        // Info link
        if(this.options.moreInfoLink) {
          this.moreInfoLink($container);
        }

        // Append elements to the container
        $(this.element).append($container);

        // Animate
        $container.animate({ top: 0 }, this.options.animationSpeed, this.options.easing);
      }

    },

    acceptButton: function(el) {
      var _this = $(this).get(0);
      el.append($('<a/>').addClass('accept-cookies').text(_this.options.acceptButtonText).attr('title', _this.options.acceptButtonText));

      el.on('click', '.accept-cookies', function(e) {
        e.preventDefault();

        $.removeCookie(_this._name);
        $.cookie(_this._name, 'cookies_accepted', _this.options.cookieDefaults);
        el.animate({ top: -el.innerHeight() }, _this.options.animationSpeed, _this.options.easing);
      });
    },

    declineButton: function(el) {
      var _this = $(this).get(0);
      el.append($('<a/>').addClass('decline-cookies').text(_this.options.declineButtonText).attr('title', _this.options.declineButtonText));

      el.on('click', '.decline-cookies', function(e){
        e.preventDefault();

        $.removeCookie(_this._name);
        $.cookie(_this._name, 'cookies_declined', _this.options.cookieDefaults);
        el.animate({ top: -el.innerHeight() }, _this.options.animationSpeed, _this.options.easing);
      });
    },

    moreInfoLink: function(el) {
      var _this = $(this).get(0);
      el.append($('<a/>').addClass('more-info').text(_this.options.moreInfoText).attr('href', _this.options.moreInfoUrl));
    }

  };

  $.fn[pluginName] = function(options) {
    return this.each(function() {
      if(!$.data(this, "plugin_" + pluginName)) {
        $.data(this, "plugin_" + pluginName, new BY_Cookies(this, options));
      }
    });
  };

})(jQuery, this);