casper.test.begin('About page', 20, function (test) {
    casper.start('http://127.0.0.1:8080/about.html', function () {

        var team = [
            'Volen Vulkov',
            'Georgi Ivanov',
            'Dimitar Vouldjeff',
            'Viktor Kirilov',
            'Kaloyan Toshev',
            'Kaloyan Toshev',
            'Krasimir Stoyanov',
            'Alexander Ginovski',
            'Velina Getova',
            'Ivaylo Hristov',
            'Yasmin',
            'Slav Dachev',
            'Ivan Kerin',
            'Petya Blagoeva',
            'Plami Doncheva',
            'Tatiana Rehmova'
        ];

        test.assertTitle('About Enhancv');

        test.assertEqual(
            this
                .getElementAttribute('meta[name="description"]', 'content')
                .trim(),
            'Our mission is to help talented people unleash their full potential by giving them the opportunity to create resumes that show who they really are.',
            'Should have appropriate meta description'
        );

        test.assertEqual(
            this
                .getElementAttribute('meta[name="keywords"]', 'content')
                .trim(),
            'about Enhancv, about the resume builder / enhancer, about us, our mission, why using Enhancv',
            'Should have appropriate meta keywords'
        );

        test.assertSelectorHasText(
            '.about-header h1',
            'Enhancv brings resumes that are all',
            'Should have a main title'
        );

        for (var i in team) {
            test.assertSelectorHasText(
                'p.member-name',
                team[i],
                'Has team member '+team[i]
            );
        }
    }).run(function () {
        test.done();
    });
});
