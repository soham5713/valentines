

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(targetDate) {
    var current = new Date(); // Get the current date and time
    var seconds = (Date.parse(current) - Date.parse(targetDate)) / 1000; // Calculate elapsed time in seconds
    var days = Math.floor(seconds / (3600 * 24));
    seconds = seconds % (3600 * 24);
    var hours = Math.floor(seconds / 3600).toString().padStart(2, '0');
    seconds = seconds % 3600;
    var minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
    seconds = Math.floor(seconds % 60).toString().padStart(2, '0'); // Fixed seconds to be an integer

    var result = `<span class="digit">${days}</span> Days 
                  <span class="digit">${hours}</span> Hours 
                  <span class="digit">${minutes}</span> Minutes 
                  <span class="digit">${seconds}</span> Seconds`; 
                  
    $("#clock").html(result);

    var text = "THE WORLD JUST GOT LUCKIER SINCE ";
    $("#message-box").html(text);
}
