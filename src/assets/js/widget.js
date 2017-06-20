window.addEventListener('load', function () {
    $('[show-custom-text-textarea]').click(function () {
        $('.widget-custom-text').removeClass('hidden');
    });

    $('.widget-custom-text').focus(function () {
        $('[data-for-value="custom"]').click();
    });

    $(document).on('click', '.widget-generate-button', function () {
        var output = {};
        $('.radio-button-group').each(function () {
            var key = $(this).find('.radio-button').first().data('name');
            var value = $(this).find('.radio-button.checked').data('value');
            output[key] = value;
        });

        var labelText = output.text === 'custom' ? $('.widget-custom-text').val() : undefined;

        var finalJSON = {
            type: output.type,
            wording: output.wording,
            style: output.style,
            labelText: labelText,
            element: "#enhancv-widget"
        };

        window.ENHANCV_WIDGET_OPTIONS = finalJSON;
        window.reloadEnhancvWidget();

        $('#widget-code').val(
            '<script>!function(e,n){"undefined"==typeof e[n]&&(e[n]={}),e[n]=' + JSON.stringify(finalJSON) + '}(window,"ENHANCV_WIDGET_OPTIONS");<\/script>' + 
            '<div id="enhancv-widget"></div><script src="https://enhancv.com/widgets/index.js"></script>'
        );
        $('#copy-code-wrapper').removeClass('hidden');
    });
});