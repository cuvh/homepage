(function() {
    var i = 'tap';
    window['TapfiliateObject'] = i;
    window[i] = window[i] || function () {
        (window[i].q = window[i].q || []).push(arguments);
    };
    tap('create', process.env.TAPFILIATE_ID);
    tap('detectClick');
}());
