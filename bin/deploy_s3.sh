echo "[PRODUCTION DEPLOY] Installing AWS CLI..."
pip install --user awscli

echo "[PRODUCTION DEPLOY] Uploading HTMLS to S3..."
aws s3 sync ./cdn s3://$AWSBUCKET --acl public-read --exclude "*.js.map" --exclude "*.html" --cache-control "public, max-age=31"

echo "[PRODUCTION DEPLOY] Uploading media to S3..."
aws s3 sync ./cdn s3://$AWSBUCKET --acl public-read --exclude "*" --include "*.html" --cache-control "public, max-age=30"
