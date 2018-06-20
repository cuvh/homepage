"use strict";

const request = require("request-promise-native");
const AWS = require("aws-sdk");

const s3 = new AWS.S3();

const INSTAGRAM_API_URL =
    "https://api.instagram.com/v1/users/self/media/recent/?access_token=" +
    process.env.ACCESS_TOKEN;

module.exports.main = (event, context, callback) => {
    request
        .get({
            url: INSTAGRAM_API_URL,
        })
        .then(res => {
            const json = JSON.parse(res);

            const images = json.data.map(item => ({ images: item.images, link: item.link }));

            s3
                .putObject({
                    Bucket: "enhancv.com",
                    Key: "instagramfeed.json",
                    ContentType: "text/json",
                    CacheControl: "public, max-age=3600",
                    ACL: "public-read",
                    Body: JSON.stringify(images),
                })
                .promise()
                .then(() =>
                    callback(null, {
                        statusCode: 200,
                        body: "ok",
                    })
                );
        });
};
