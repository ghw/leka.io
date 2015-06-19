// Modal Video
$(function() {
	$("#video-leka").on("change", function() {
		if ($(this).is(":checked")) {
			$("body").addClass("modal-open");
		} else {
			$("body").removeClass("modal-open");
		}
	});

	$(".modal-fade-screen, .modal-close").on("click", function() {
		$(".modal-state:checked").prop("checked", false).change();
	});

	$(".modal-inner").on("click", function(e) {
		e.stopPropagation();
	});
});

// Scroll smoothly
$('a[href^="#"]').on('click', function(event) {

	var target = $( $(this).attr('href') );

	if( target.length ) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: target.offset().top
		}, 1000);
	}

});


