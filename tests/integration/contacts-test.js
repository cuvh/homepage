casper.test.begin('Contacts page', 7, function (test) {
    casper.start('http://127.0.0.1:8080/contacts.html', function () {

        var contactEmails = [
            'hello@enhancv.com',
            'invest@enhancv.com',
            'media@enhancv.com',
        ];

        test.assertTitle('Contact Enhancv');

        test.assertEqual(
            this
                .getElementAttribute('meta[name="description"]', 'content')
                .trim(),
            'If you want to get in touch, please, fill in the contact form or send us an email.',
            'Should have appropriate meta description'
        );

        test.assertEqual(
            this
                .getElementAttribute('meta[name="keywords"]', 'content')
                .trim(),
            'contacts, get in touch, work with us, write to us, contact form, contact Enhancv',
            'Should have appropriate meta keywords'
        );

        test.assertSelectorHasText(
            'h1',
            'Contact us, we are fun.',
            'Should have a main title'
        );

        for (var i in contactEmails) {
            test.assertSelectorHasText(
                'a[href="mailto:'+contactEmails[i]+'"]',
                contactEmails[i],
                'Has cantact email '+contactEmails[i]
            );
        }
    }).run(function () {
        test.done();
    });
});
