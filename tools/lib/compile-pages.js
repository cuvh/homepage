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
        resolvePaths = require('../lib/paths'),
        promiseList = require('../lib/promises');

    var generateGlobalJSON = function(rootPath, callback) {
        var output = {};

        glob(rootPath + '/src/config/*.json', {
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

        generateGlobalJSON(rootPath, function(options) {
            glob(rootPath + '/src/templates/**/*.hbs', {
                cwd: rootPath
            }, function(err, files) {
                if (err) {
                    error(err);
                } else {
                    var templatesToCreate = [],
                        posts = [];

                    files = files.filter(function(file) {
                        return file.indexOf('/partials/') === -1;
                    });

                    files.forEach(function(file) {
                        // var outDir = rootPath + '/build/' + path.basename(file).replace(/\.[^/.]+$/, '');

                        var subDirTree = file.replace(rootPath + '/src/templates/', '').split('/');
                        var outDir = rootPath + '/build/';

                        if (subDirTree.length > 1) {
                            subDirTree.pop();
                            outDir += subDirTree.join('/') + '/';
                        }                      

                        templatesToCreate.push({
                            outDir: outDir,
                            templateSrc: file,
                            templateData: options
                        });
                    });

                    if (templatesToCreate.length) {
                        var promises = [];
                        templatesToCreate.forEach(function(templateToCreate) {
                            promises.push(new Promise(function(resolve, reject) {
                                gulp.src(templateToCreate.templateSrc)
                                    .pipe(compileHandlebars(templateToCreate.templateData, {
                                        batch: [rootPath + "/src/templates/partials"]
                                    }))
                                    .pipe(rename(path.basename(templateToCreate.templateSrc.replace('.hbs', '.html'))))
                                    .pipe(gulp.dest(templateToCreate.outDir))
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