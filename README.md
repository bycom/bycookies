# BY Cookies
A simple, lightweight jQuery plugin for EU cookie law compliance.

## Dependencies
* [jQuery Cookie Plugin v1.3.1](https://github.com/carhartl/jquery-cookie)

## Options
* message - Custom text message
* acceptButton - Enable/disable the accept button
* acceptButtonText - Accept button text
* declineButton - Enable/disable the decline button
* declineButtonText - Decline button text
* moreInfoLink - Enable/disable the more info link
* moreInfoText - More info text
* moreInfoUrl - More info link
* easing - Easing effect
* animationSpeed - Animation speed
* cookieDefaults - Cookie domain and expiry date

## Usage
```
$('body').bycookies();
```

More advanced:
```
$('body').bycookies({ 
  declineButton: false 
});
```

## Browser Support
* Mozilla Firefox 19+
* Google Chrome 27+
* Safari 6+
* Internet Explorer 7+

## Authors and Contributors
Luis Hebbelinck (@bylhebbelinck)  
Sérgio Santos (@s3rgiosan)
