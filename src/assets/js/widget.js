window.addEventListener("load", function() {
    var maxLength = 90;

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
        $(".widget-custom-text-container").removeClass("hidden");
        $(".widget-custom-text-container textarea").focus();
    });

    // $(".widget-custom-text").focus(function() {
    //     $('[data-for-value="custom"]').click();
    // });

    function onChange() {
        var output = {};
        $(".radio-button-group").each(function() {
            var key = $(this).find(".radio-button").first().data("name");
            var value = $(this).find(".radio-button.checked").data("value");
            output[key] = value;
        });

        var labelText = output.text === "custom" ? $(".widget-custom-text").val() : undefined;

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

        if (finalJSON.style === "dark") {
            $(".widget-preview-container").addClass("dark");
        } else {
            $(".widget-preview-container").removeClass("dark");
        }

        $("#copy-code-wrapper").removeClass("hidden");
    }

    $(document).on("click", ".radio-button,.radio-button-label", onChange);
    $(document).on("blur keydown keyup", ".widget-custom-text", onChange);

    onChange();
});
