casper.test.begin('Examples page', 8, function (test) {
    casper.start('http://127.0.0.1:8080/examples.html', function () {

        var resumes = [
            'Georgi Ivanov',
            'Yasmin Tezdzhan',
            'Valentina Milanova',
            'Jonathan Seagull',
        ];

        test.assertTitle('Examples of resumes by Enhancv');

        test.assertEqual(
            this
                .getElementAttribute('meta[name="description"]', 'content')
                .trim(),
            'See some great examples of our amazing resumes and see how yours could look like. Try Enhancv and unlock your potential!',
            'Should have appropriate meta description'
        );

        test.assertEqual(
            this
                .getElementAttribute('meta[name="keywords"]', 'content')
                .trim(),
            'examples of resumes, examples, resume examples, resume inspiration, cv examples, examples of cv, creative resumes, creative CVs',
            'Should have appropriate meta keywords'
        );

        test.assertSelectorHasText(
            'h1',
            'We\'ll get you hired! Prove that you are worthy',
            'Should have a main title'
        );

        for (var i in resumes) {
            test.assertSelectorHasText(
                'h2',
                resumes[i],
                'Has resume of '+resumes[i]
            );
        }
    }).run(function () {
        test.done();
    });
});
