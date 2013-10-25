$(document).ready(function(){
	$('body').linkify({
		handleLinks: function (links) {
			links.addClass('oembed');
		}
	});
})
