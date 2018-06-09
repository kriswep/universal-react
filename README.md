# Savior RE-Search

## add package

 - create folder in `packages`
 - run `npm init`, set private field

## bootstrap
To install all packages deps and run their prepublish (builds universal comp):
- `npm run lerna -- bootstrap`

## add one project to another
 - `npm run lerna -- add srs-universal-components --scope=native-app`

## run script in all packages
 - `npm run lerna -- run start`