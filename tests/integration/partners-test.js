casper.test.begin('Partners page', 13, function (test) {
    casper.start('http://127.0.0.1:8080/partners.html', function () {

        var partners = {
            'http://softuni.bg'                            : 'Software University logo',
            'http://esn.org'                               : 'Erasmus Student Network logo',
            'http://aiesec.bg'                             : 'AIESEC Bulgaria logo',
            'https://www.facebook.com/via.juvenis/'        : 'Bulgarian Youth Association logo',
            'http://startitsmart.com'                      : 'Start It Smart logo',
            'http://11.me'                                 : 'Eleven Accelerator Venture Fund logo',
            'http://betahaus.bg'                           : 'betahaus sofia coworking space & event venue logo',
            'http://www.globalyoungvoices.com/'            : 'Global Young Voices logo',
            'http://www.globunication.com/?utm_source=ECV' : 'GlobUnication logo',
        };

        test.assertTitle('Biz Dev Partners at Enhancv');

        test.assertEqual(
            this
                .getElementAttribute('meta[name="description"]', 'content')
                .trim(),
            'Our partners back us up, anytime, anywhere.',
            'Should have appropriate meta description'
        );

        test.assertEqual(
            this
                .getElementAttribute('meta[name="keywords"]', 'content')
                .trim(),
            'Enhancv partners, about our partners, partners, our partners',
            'Should have appropriate meta keywords'
        );

        test.assertSelectorHasText(
            'h1',
            'They back us up, anytime, anywhere.',
            'Should have a main title'
        );

        for (var link in partners) {
            test.assertExists(
                'a[href="'+link+'"] img[alt="'+partners[link]+'"]',
                'Has partner '+partners[link]
            );
        }
    }).run(function () {
        test.done();
    });
});
