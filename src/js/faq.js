$(function() {
	$('#faq .panel-heading a').on('click', function() {
		var $panel = $(this).parent().parent().parent();
		var $collapse = $panel.find('.collapse');
		var $verticalElement = $panel.find('.vertical');
		collapsedPlus($collapse, $verticalElement);
	});

	if ($('#faq').length > 0) {
		$(window).on('hashchange', function (e) {
			e.preventDefault();
			stopOnQuestion();
		});

		stopOnQuestion();
	}

	function stopOnQuestion() {
		var hash = location.hash;
		if (hash.length) {
			var $collapse = $('#faq ' + hash).parent().parent();
			var $panel = $collapse.parent();
			var $vertical = $panel.find('.vertical');

			$('#faq .vertical').removeClass('normal');
			$('#faq .collapse').collapse('hide');

			setTimeout(function() {
				$collapse.collapse('show');
				collapsedPlus($collapse, $vertical);

				$('html, body').animate({
					scrollTop: $(hash).offset().top - 75
				}, 1000);
			}, 500);
		}
	}

	function collapsedPlus(collapse, vertical) {
		$('#faq .vertical').removeClass('normal');
		$('#faq .collapse').collapse('hide');

		$(collapse).on('show.bs.collapse', function() {
			$(vertical).addClass('normal');
		});

		$(collapse).on('shown.bs.collapse', function() {
			$(vertical).addClass('normal');
		});

		$(collapse).on('hide.bs.collapse', function() {
			$(vertical).removeClass('normal');
		});

		$(collapse).on('hiddne.bs.collapse', function() {
			$(vertical).removeClass('normal');
		});
	}
});
