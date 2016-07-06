echo "[PRODUCTION DEPLOY] Installing AWS CLI..."
pip install awscli

echo "[PRODUCTION DEPLOY] Uploading HTMLS to S3..."
aws s3 sync ./cdn s3://$AWSBUCKET --acl public-read --exclude "*.js.map" --cache-control "public, max-age=15"

echo "[PRODUCTION DEPLOY] Uploading media to S3..."
aws s3 sync ./cdn_htmls s3://$AWSBUCKET --acl public-read --cache-control "public, max-age=51"
