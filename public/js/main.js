// Modal Video
$(function() {
	$("#YTLink").on("change", function() {
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

//Modal Window Adopt a Leka
$(function() {
  $("#modal-1").on("change", function() {
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

//Modal Window Join Us
$(function() {
  $("#modal-2").on("change", function() {
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

// Navbar Menu
$(document).ready(function() {
	var menuToggle = $('#js-mobile-menu').unbind();
	$('#js-navigation-menu').removeClass("show");

	menuToggle.on('click', function(e) {
		e.preventDefault();
		$('#js-navigation-menu').slideToggle(function(){
			if($('#js-navigation-menu').is(':hidden')) {
				$('#js-navigation-menu').removeAttr('style');
			}
		});
	});
});
