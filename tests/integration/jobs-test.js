casper.test.begin('Jobs page', 7, function (test) {
    casper.start('http://127.0.0.1:8080/jobs.html', function () {

        var jobs = {
            '/join-the-force.html': 'Front-End Jedi Master',
            '/growth-enhancer.html': 'Digital Marketing Enhancer',
            '/job/graphic-designer.html': 'Part-time Graphic Designer',
        };

        test.assertTitle('Jobs at Enhancv');

        test.assertEqual(
            this
                .getElementAttribute('meta[name="description"]', 'content')
                .trim(),
            'Do you want to join a motivated and talented team of entrepreneurs and talented product builders? Write to us and we will get in touch if you are a good match for us.',
            'Should have appropriate meta description'
        );

        test.assertEqual(
            this
                .getElementAttribute('meta[name="keywords"]', 'content')
                .trim(),
            'jobs, careers, job openings, jobs at Enhancv, open positions, hire',
            'Should have appropriate meta keywords'
        );

        test.assertSelectorHasText(
            'h1',
            'We will hire you. Prove that you are worthy',
            'Should have a main title'
        );

        for (var link in jobs) {
            test.assertSelectorHasText(
                'a[href="'+link+'"]',
                jobs[link],
                'Has job for a '+jobs[link]
            );
        }
    }).run(function () {
        test.done();
    });
});
