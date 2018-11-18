jQuery(document).ready(function(e) {
  /* 此為校稿頁面，非正式上線網站 */
    var themeDir = (jQuery('link[href*="css/style."][href*=".css"]').attr('href') || '').replace(/css\/style.*.css(\?t=\d{0,})?/i, '');
    var announce = function() {
      setTimeout(function() {
        jQuery.colorbox({
          html: '<div id="grnetWebTest"><strong>提醒您!</strong><br>本站尚在建構中，此為校稿測試用途，非正式上線網站，特此聲明。</div>',
          opacity: 0.6,
          fixed: true,
          innerHeight: 110
        });
      }, 1000);
    };

    jQuery('head').append('<link>').children('link:last').attr({rel: 'stylesheet', id: 'colorbox-pop-css', href: themeDir + 'css/demo_website.css'});

    /* 判斷是否有載入 js */
    if (jQuery('script[src*="js/plugins/jQuery/jquery.colorbox-1.4.15."][src*=".js"]').index() === -1) {
      jQuery.ajaxSetup({cache: true});
      jQuery.getScript(themeDir + 'js/plugins/jQuery/jquery.colorbox-1.4.15.min.js', function() {
        announce();
      });
    } else {
      announce();
    }
});