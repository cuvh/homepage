echo "[PRODUCTION DEPLOY] Uploading HTMLS to S3..."
aws s3 sync ./cdn s3://$BUCKET --acl public-read --exclude "*.html" --cache-control "public, max-age=15592000"

echo "[PRODUCTION DEPLOY] Uploading media to S3..."
aws s3 sync ./cdn s3://$BUCKET --acl public-read --exclude "*" --include "*.html" --cache-control "public, max-age=300"

echo "[SETUP REDIRECTS] Uploading media to S3..."
aws s3api put-object --bucket s3://$BUCKET --acl public-read --key "about.html" --website-redirect-location "/about"
aws s3api put-object --bucket s3://$BUCKET --acl public-read --key "examples.html" --website-redirect-location "/examples"
aws s3api put-object --bucket s3://$BUCKET --acl public-read --key "terms.html" --website-redirect-location "/terms"
aws s3api put-object --bucket s3://$BUCKET --acl public-read --key "privacy.html" --website-redirect-location "/privacy"
