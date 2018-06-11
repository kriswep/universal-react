# Universal React Boilerplate

Render reusable components to web (with Create React App) and to mobile (with Create React Native App).

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

## Credits
Inspired by [universal-components-example](https://github.com/samanthabretous/universal-components-example), see the [ReactEurope talk](https://www.youtube.com/watch?v=D1NkyO-J6B0)