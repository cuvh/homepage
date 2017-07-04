$(document).on("click", ".radio-button, .radio-button-label", function() {
	var group = $(this).closest(".radio-button-group");
	var forValue = $(this).data("value") || $(this).data("forValue");

	group.find(".radio-button").removeClass("checked");
	group.find('.radio-button[data-value="' + forValue + '"]').addClass("checked");
});
