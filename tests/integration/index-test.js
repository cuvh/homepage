casper.test.begin('Index page', 13, function(test) {
    casper.start('http://127.0.0.1:8080', function() {
        var logos = [
            'Forbes Logo',
            'Business Insider Logo',
            'Yahoo Finance Logo',
            'Product Hunt Logo',
            'Aol Jobs Logo',
        ];

        test.assertTitle('Get the job you deserve - Enhancv');

        test.assertEquals(
            this
                .getElementAttribute('meta[name="description"]', 'content')
                .trim(),
            'Enhancv helps you create compelling human-centric resumes that unveil the real person behind.',
            'Should have appropriate meta description'
        );

        test.assertEquals(
            this
                .getElementAttribute('meta[name="keywords"]', 'content')
                .trim(),
            'resume, creative resume, human-centric resume, performance-based resume, online resume, cv, career, job search, resume builder, create a resume, create resumes, create cv, resume design, cv design, performance-based cv, human-centric cv',
            'Should have appropriate meta keywords'
        );

        test.assertSelectorHasText(
            'a[href="#stepsContainer"]',
            'Tour',
            'Should have tour link that scrolls to #steps-container'
        );

        test.assertSelectorHasText(
            'a[href="/examples.html"]',
            'Examples',
            'Should have link to the examples'
        );

        test.assertSelectorHasText(
            'h1',
            'Get the job you deserve',
            'Should have a main title'
        );

        for (var i in logos) {
            test.assertExists(
                'img[alt="'+logos[i]+'"]',
                'Has partner logo '+logos[i]
            );
        }

        test.assertSelectorHasText(
            'a[href="http://app.enhancv.com/"]',
            'Try it Free',
            'Should have link to the app'
        );

        test.assertSelectorHasText(
            'a[href="http://app.enhancv.com/"]',
            'Let\'s Begin',
            'Should have another link to the app'
        );

    }).run(function() {
        test.done();
    });
});
