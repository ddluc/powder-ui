#! /bin/bash

# Copy the scaffoldng component as a new component with the provided component name
cp -R ./scripts/scaffold/__component ./src/lib/components/$1; 

# Move to the component directory 
cd ./src/lib/components/; 

# Move into the new component directory
cd ./$1; 

# Rename the component files 
mv __Component.tsx $1.tsx; 
mv __Component.test.tsx $1.test.tsx;
mv stories/__Component.stories.tsx stories/$1.stories.tsx; 

## Find and replace all instance of __Component with the provided component name; 
sed -i '' -e "s/__Component/$1/g" ${1}.tsx; 
sed -i '' -e "s/__Component/$1/g" index.ts; 
sed -i '' -e "s/__Component/$1/g" ${1}.test.tsx; 
sed -i '' -e "s/__Component/$1/g" stories/${1}.stories.tsx; 

## Find and replace all instance of __ComponentProps with the provided component name; 
sed -i '' -e "s/__ComponentProps/$1Props/g" ${1}.tsx; 
sed -i '' -e "s/__ComponentProps/$1Props/g" index.ts; 
sed -i '' -e "s/__ComponentProps/$1Props/g" ${1}.test.tsx; 
sed -i '' -e "s/__ComponentProps/$1Props/g" stories/${1}.stories.tsx; 

