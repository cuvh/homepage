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
        compileOptions = require('../lib/compile-options'),
        tags = require('../lib/tags'),
        dates = require('../lib/dates'),
        resolvePaths = require('../lib/paths'),
        compileDrafts = require('../lib/drafts'),
        promiseList = require('../lib/promises');

    var generateGlobalJSON = function(rootPath, callback) {
        var output = {};

        glob(rootPath + '/src/content/*.json', {
            cwd: rootPath
        }, function(err, files) {
            files.forEach(function(file) {
                var fileData = JSON.parse(fs.readFileSync(file, 'utf8'));
                output[file.split('/').pop().replace('.json', '')] = fileData;
            });

            callback(output);
        });
    };

    module.exports.run = function(rootPath, done, error) {
        var gulpVersion = require('gulp/package').version;
        var compileOptionsObj = compileOptions(rootPath);

        generateGlobalJSON(rootPath, function(options) {
            glob(rootPath + '/src/templates/*.hbs', {
                cwd: rootPath
            }, function(err, files) {
                if (err) {
                    error(err);
                } else {
                    var templatesToCreate = [],
                        posts = [];

                    files.forEach(function(file) {
                       // var outDir = rootPath + '/build/' + path.basename(file).replace(/\.[^/.]+$/, '');
                       var outDir = rootPath + '/build/' + path.basename(file).replace('.hbs', '.html');

                        templatesToCreate.push({
                            outDir: outDir,
                            templateSrc: file,
                            templateData: options
                        });

                    });

                    if (templatesToCreate.length) {
                        var promises = [];
                        templatesToCreate.forEach(function(templateToCreate) {
                            _.extend(templateToCreate.templateData.post, {
                                allDates: dates.getAllDatesAsLinks('..', posts),
                                allTags: tags.getAllTagsAsLinks('..', posts)
                            });

                            promises.push(new Promise(function(resolve, reject) {
                                gulp.src(templateToCreate.templateSrc)
                                    .pipe(compileHandlebars(templateToCreate.templateData, compileOptionsObj))
                                    .pipe(rename('index.html'))
                                    .pipe(gulp.dest(rootPath + '/build'))
                                    .on('error', reject)
                                    .on('end', resolve);
                            }));
                        });

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
        });
    };
})();