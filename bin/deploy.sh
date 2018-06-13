#!/bin/bash

if [ "$TRAVIS_BRANCH" == "master" ]; then
	BUCKET=enhancv.com
else
	BUCKET=ecv-$TRAVIS_BRANCH
fi

echo "Bucket: "$BUCKET

aws s3api create-bucket --bucket $BUCKET --region us-east-1
aws s3 website s3://$BUCKET --index-document index.html --error-document error.html

echo "[PRODUCTION DEPLOY] Uploading HTMLS to S3..."
aws s3 sync ./public s3://$BUCKET --acl public-read --exclude "*.html" --cache-control "public, max-age=15592000"

echo "[PRODUCTION DEPLOY] Uploading media to S3..."
aws s3 sync ./public s3://$BUCKET --acl public-read --exclude "*" --include "*.html" --cache-control "public, max-age=30"

echo "Staging url is http://"$BUCKET".s3-website-us-east-1.amazonaws.com"