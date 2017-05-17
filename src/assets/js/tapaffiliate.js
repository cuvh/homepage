const i = 'tap';
window['TapfiliateObject'] = i;
window[i] = window[i] || function () {
    (window[i].q = window[i].q || []).push(arguments);
};
tap('create', process.env.TAPFILIATE_ID);
tap('detectClick', function (res) {
    if (res && res.vid) {
        var cookieName = 'tapfiliate_vid';
        var cookieValue = res.vid;
        var myDate = new Date();
        myDate.setMonth(myDate.getMonth() + 12);
        document.cookie = cookieName +"=" + cookieValue + ";expires=" + myDate 
                  + ";domain=.enhancv.com;path=/";
    }
});
