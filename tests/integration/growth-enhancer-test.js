// casper.test.begin('Growth enhancer page', 10, function (test) {
//     casper.start('http://127.0.0.1:8080/growth-enhancer.html', function () {
//
//         test.assertTitle('Do you want to be the first Growth Hacker on the Moon?');
//
//         test.assertEqual(
//             this
//                 .getElementAttribute('meta[name="description"]', 'content')
//                 .trim(),
//             'Enhancv is looking for a Digital Marketing Enhancer who is ready for blastoff.',
//             'Should have appropriate meta description'
//         );
//
//         test.assertEqual(
//             this
//                 .getElementAttribute('meta[name="keywords"]', 'content')
//                 .trim(),
//             'marketing, Marketing, job, growth, enhancv',
//             'Should have appropriate meta keywords'
//         );
//
//         test.assertSelectorHasText(
//             'h1',
//             'Do you want to be the first Growth Hacker on the Moon?',
//             'Should have a main title'
//         );
//
//         test.assertExists('h2', 'Join us and Apply');
//         test.assertField('fullname', '', 'Should have name input');
//         test.assertField('email', '', 'Should have email input');
//         test.assertField('most-proud', '', 'Should have most proud input');
//         test.assertField('work', '', 'Should have work input');
//         test.assertField('resume-upload', '', 'Should have file input');
//     }).run(function () {
//         test.done();
//     });
// });
