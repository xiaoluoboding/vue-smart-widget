#!/usr/bin/env sh

npm version prerelease --preid=alpha

npm run build:lib

npm run changelog
