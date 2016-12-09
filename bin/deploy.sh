echo "[PRODUCTION DEPLOY] Uploading HTMLS to S3..."
aws s3 sync ./cdn s3://$BUCKET --acl public-read --exclude "*.html" --cache-control "public, max-age=15592000"

echo "[PRODUCTION DEPLOY] Uploading media to S3..."
aws s3 sync ./cdn s3://$BUCKET --acl public-read --exclude "*" --include "*.html" --cache-control "public, max-age=300"
