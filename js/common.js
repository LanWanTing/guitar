jQuery(document).ready(function(e) {
	/* 平板旋轉設定 */
	jQuery(window).on('orientationchange', function(e) {
			jQuery(window).trigger('resize');
	});	
	jQuery(window).on('orientationchange', function(e) {
    window.scroll(0, 0);
  });
	
	//置頂
	var $tBEle = $('#goTop').on('click', function(e) {
		e.preventDefault();
		jQuery('html, body').animate({scrollTop: 0}, {queue: false, duration: 800});
	})
	// Menu    
	jQuery('.menubox li.menuLi').hover(function(e) {
		var $cEle = jQuery(this);
		$cEle.find('a.mlink').addClass('');    
		$cEle.children('div.navSub').stop(false, true).fadeIn(300);
	}, function(e) {
		var $cEle = jQuery(this);
		$cEle.find('a.mlink').removeClass('');  
		$cEle.children('div.navSub').stop(false, true).fadeOut(300);  
	});
	
});