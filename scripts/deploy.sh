#!/usr/bin/env sh

# abort on errors
set -e

git checkout gh-pages

# build
npm run build

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'docs: update gh-pages'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:xiaoluoboding/vue-smart-widget.git master:gh-pages
git push --force origin master:gh-pages

cd -
