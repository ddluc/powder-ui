#! /bin/bash

# Copy the license from the root repo
cp LICENSE dist/LICENSE; 
# Copy the package.json from the root repo
cp package.json dist/package.json; 
# Copy the readme from the root repo
cp README.md dist/README.md;
# Remove stories directories from dist
find ./dist -type d -name stories -exec rm -rf {} +;
#Publish Yalc Package
cd dist; 
yalc publish --push