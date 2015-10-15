(function() {
    'use strict';

    var gulp = require('gulp'),
        Promise = require('bluebird'),
        compileHandlebars = require('gulp-compile-handlebars'),
        rename = require('gulp-rename'),
        fs = require('fs'),
        path = require('path'),
        glob = require('glob'),
        moment = require('moment'),
        _ = require('lodash'),
        langUtils = require('mout/lang'),
        compileOptions = require('../lib/compile-options'),
        tags = require('../lib/tags'),
        dates = require('../lib/dates'),
        resolvePaths = require('../lib/paths'),
        compileDrafts = require('../lib/drafts'),
        promiseList = require('../lib/promises');

    module.exports.run = function(rootPath, done, error) {
        var siteData = JSON.parse(fs.readFileSync(rootPath + '/site.json', 'utf8'));
        var gulpVersion = require('gulp/package').version;
        var compileOptionsObj = compileOptions(rootPath);

        glob(rootPath + '/build/content/**/*.json', {
            cwd: rootPath
        }, function(err, files) {
            if (err) {
                error(err);
            } else {
                var datePosts = {},
                    posts = [];

                files.forEach(function(file) {
                    var fileData = JSON.parse(fs.readFileSync(file, 'utf8'));

                    if (fileData.status && fileData.status === 'draft' && !compileDrafts()) {
                        return;
                    }

                    if (!fileData.date || !fileData.template) {
                        return;
                    }

                    // check and fill-in missing file meta data
                    fileData = compileOptionsObj.checkContent(fileData);

                    var metaData = {
                        title: fileData.title,
                        description: resolvePaths.resolve(fileData.body, '../..'),
                        url: '../../' + fileData.slug + '/',
                        tagStr: fileData.tags,
                        tags: (fileData.tags ? tags.getTagsAsLinks('../..', fileData.tags) : undefined),
                        date: fileData.date,
                        post_class: 'post' + (fileData.tags ? tags.getTagClasses(fileData.tags) : fileData.slug),
                        meta: fileData
                    };

                    if (fileData.date && fileData.template === 'post.hbs') {
                        posts.push(metaData);
                    }

                    if (fileData.date) {
                        var dateMonth = fileData.date.substr(0, 7); //2014-12
                        if (datePosts[dateMonth]) {
                            datePosts[dateMonth].push(metaData);
                        } else {
                            datePosts[dateMonth] = [metaData];
                        }
                    }
                });

                if (_.size(datePosts)) {
                    var promises = [];

                    for (var dateMonth in datePosts) {
                        // sort the dateMonth posts
                        datePosts[dateMonth].sort(dates.sortFunc);

                        var templateData = {
                            date: moment().format('YYYY-MM-DD'),
                            resourcePath: '../..',
                            generator: 'Gulp ' + gulpVersion,
                            meta_title: siteData.title,
                            url: '../..',
                            site: siteData,
                            posts: datePosts[dateMonth],
                            body_class: 'home-template',
                            rss: '../..' + siteData.rss,
                            dateStr: moment(dateMonth, 'YYYY-MM').format('MMMM YYYY')
                        };

                        if (siteData.maxItems && datePosts[dateMonth].length > siteData.maxItems) {
                            // how many pages do we need to create?
                            var totalPages = Math.ceil(datePosts[dateMonth].length / siteData.maxItems);

                            // shorten posts
                            var paginatedPosts = datePosts[dateMonth].splice(siteData.maxItems);

                            for (var i = 1; i < totalPages; i++) {
                                var pageNumber = i + 1;
                                var nextPosts = paginatedPosts.splice(0, siteData.maxItems);

                                // create custom template data for this paginated page
                                var pageTemplateData = langUtils.deepClone(templateData);
                                _.extend(pageTemplateData, {
                                    posts: nextPosts,
                                    resourcePath: '../../..',
                                    url: '../../..',
                                    rss: '../../..' + siteData.rss,
                                    allDates: dates.getAllDatesAsLinks('../../..', posts),
                                    allTags: tags.getAllTagsAsLinks('../../..', posts)
                                });

                                promises.push(new Promise(function(resolve, reject) {
                                    gulp.src(rootPath + '/src/templates/index.hbs')
                                        .pipe(compileHandlebars(pageTemplateData, compileOptionsObj))
                                        .pipe(rename('index.html'))
                                        .pipe(gulp.dest(rootPath + '/build/date/' + dateMonth + '/page/' + pageNumber))
                                        .on('error', reject)
                                        .on('end', resolve);
                                }));
                            }

                            templateData.nextUrl = '../../date/' + dateMonth + '/page';
                            templateData.totalPages = totalPages;
                        }

                        // update template
                        _.extend(templateData, {
                            allDates: dates.getAllDatesAsLinks('../..', posts),
                            allTags: tags.getAllTagsAsLinks('../..', posts)
                        });

                        promises.unshift(new Promise(function(resolve, reject) {
                            gulp.src(rootPath + '/src/templates/index.hbs')
                                .pipe(compileHandlebars(templateData, compileOptionsObj))
                                .pipe(rename('index.html'))
                                .pipe(gulp.dest(rootPath + '/build/date/' + dateMonth))
                                .on('error', reject)
                                .on('end', resolve);
                        }));
                    }

                    Promise.all(promiseList.filter(promises))
                        .then(function() {
                            done();
                        }, function(err) {
                            error(err);
                        });
                } else {
                    done();
                }
            }
        });
    };
})();
