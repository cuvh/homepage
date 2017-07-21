(function() {
    var maxLength = 70;

    $(document).on("keyup keydown", ".widget-custom-text", function() {
        var remaining = maxLength - $(this).val().length;

        $(".widget-custom-counter").html(remaining);

        if (remaining < 30) {
            $(".widget-custom-counter").addClass("red");
        } else {
            $(".widget-custom-counter").removeClass("red");
        }
    });

    $("[show-custom-text-textarea]").click(function() {
        setTimeout(function() {
            $(".widget-custom-text-container textarea").focus();
        });
    });

    $(document).on('click', '.scroll-down', function(event){
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top - 60
        }, 500);
    });

    function onChange() {
        var output = {};
        $(".radio-button-group").each(function() {
            var key = $(this).find(".radio-button").first().data("name");
            var value = $(this).find(".checked").data("value");
            output[key] = value;
        });

        var labelText = output.text === "custom" ? $(".widget-custom-text").val() : undefined;

        if (output.style === "dark") {
            $(".widget-preview-container").addClass("dark");
        } else {
            $(".widget-preview-container").removeClass("dark");
        }

        if (output.type === "compact") {
            $(".disabled-on-compact").removeClass("hidden");
        } else {
            $(".disabled-on-compact").addClass("hidden");
        }

        if (output.text !== "custom" || output.type === "compact") {
            $(".widget-custom-text-container").addClass("hidden");
        } else {
            $(".widget-custom-text-container").removeClass("hidden");
        }

        var finalJSON = {
            type: output.type,
            wording: output.wording,
            style: output.style,
            labelText: labelText,
            element: "#enhancv-widget",
        };

        window.ENHANCV_WIDGET_OPTIONS = finalJSON;
        window.reloadEnhancvWidget();

        $("#widget-code").val(
            '<script>!function(e,n){"undefined"==typeof e[n]&&(e[n]={}),e[n]=' +
                JSON.stringify(finalJSON) +
                '}(window,"ENHANCV_WIDGET_OPTIONS");</script>' +
                '<div id="enhancv-widget"></div><script src="https://enhancv.com/widgets/button.js"></script>'
        );

        $("#copy-code-wrapper").removeClass("hidden");
    }

    $(document).on("click", ".radio-button,.radio-button-label", onChange);
    $(document).on("blur keydown keyup", ".widget-custom-text", onChange);

    onChange();
})();
