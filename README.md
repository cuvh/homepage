# Enhancv homepage

Development

We're using slighly modified version of prettier (https://github.com/enhancv/prettier) as auto-formating tool to make sure, the code is always consistent. Install it as global package by following the instructions on our repo. Although prettier will auto-format the code on commit, we highly recommend to install a prettier plugin to your editor.

GatsbyJS is the static site generator we're using. It's blazing-fast and creates production-ready build with single command.

```bash
yarn
yarn develop
```

Build
Deploy
```
git push
```

Pushing to master automatically deploys to production. Pushing to branches automatically creates staging environment with predictable url like: http://ecv-$BRANCH.s3-website-us-east-1.amazonaws.com

## License

Copyright (c) 2014-2018 Enhancv.
Licensed under the MIT license.
