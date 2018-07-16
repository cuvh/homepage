#!/bin/sh

echo ">>> Running Prettier on all {js, jsx, json} files..."

prettier --write "{,**/}*.{js,json,jsx,scss}" > /dev/null
git add -A

exit 0
