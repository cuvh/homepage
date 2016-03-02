casper.test.begin('Bizdev page', 5, function (test) {
    casper.start('http://127.0.0.1:8080/bizdev.html', function () {

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
            'Enhancv Biz Dev Partner Program',
            'Should have a main title'
        );

        test.assertExists(
            'a[href="mailto:work@enhancv.com"]',
            'Should have a link to join'
        );
    }).run(function () {
        test.done();
    });
});
