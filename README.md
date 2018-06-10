# Savior RE-Search

## add package

 - create folder in `packages`
 - run `npm init` or `yarn init`, set private field

## bootstrap
To install all packages deps and run their prepublish (builds universal comp):
- `npm run lerna -- bootstrap` or `yarn lerna bootstrap`

## add one project to another
 - `npm run lerna -- add srs-universal-components --scope=native-app` or `yarn lerna add srs-universal-components --scope=native-app`

## run script in all packages
 - `npm run lerna -- run start` or `yarn lerna run start`

 read: https://medium.com/viewsdx/how-to-use-yarn-workspaces-with-create-react-app-and-create-react-native-app-expo-to-share-common-ea27bc4bad62