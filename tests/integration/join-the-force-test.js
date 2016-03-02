casper.test.begin('Join the force page', 10, function (test) {
    casper.start('http://127.0.0.1:8080/join-the-force.html', function () {

        test.assertTitle('Join the Force');

        test.assertEqual(
            this
                .getElementAttribute('meta[name="description"]', 'content')
                .trim(),
            'On a small, relatively unknown planet known as Bulgaria, a young startup called Enhancv was mobilizing its forces.',
            'Should have appropriate meta description'
        );

        test.assertEqual(
            this
                .getElementAttribute('meta[name="keywords"]', 'content')
                .trim(),
            'front-end, Front-End, javascript, Javascript, Jedi Master, jedi master',
            'Should have appropriate meta keywords'
        );

        test.assertSelectorHasText(
            'h1',
            'In a galaxy far far away...',
            'Should have a main title'
        );

        test.assertExists('h2', 'Join the Force');
        test.assertField('fullname', '', 'Should have name input');
        test.assertField('email', '', 'Should have email input');
        test.assertField('most-proud', '', 'Should have most proud input');
        test.assertField('work', '', 'Should have work input');
        test.assertField('resume-upload', '', 'Should have file input');
    }).run(function () {
        test.done();
    });
});
