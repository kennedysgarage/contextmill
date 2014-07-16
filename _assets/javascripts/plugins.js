//= require vendor/ss-standard
//= require vendor/ss-social
//= require vendor/parallax

$(document).ready(function(){

var $html = $('html'),
			$container = $('#container'),
			$prompt = $('#prompt'),
			$toggle = $('#toggle'),
			$about = $('#about'),
			$scene = $('#scene');

(function() {
		setTimeout(function(){window.scrollTo(0,0);},0);
	})();

  // Resize handler.
	(resize = function() {
		$scene[0].style.width = window.innerWidth + 'px';
		$scene[0].style.height = window.innerHeight + 'px';
		if (!$prompt.hasClass('hide')) {
			if (window.innerWidth < 600) {
				$toggle.addClass('hide');
			} else {
				$toggle.removeClass('hide');
			}
		}
	})();

	// Attach window listeners.


  $('#scene').parallax();
});
