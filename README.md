# Universal React Boilerplate

Render reusable components to web (with Create React App) and to mobile (with Create React Native App).

## add package

 - create folder in `packages`
 - run `yarn init`, set private field

## bootstrap
To install all packages deps and run their prepublish (builds universal comp):
- `yarn lerna bootstrap --scope=srs-universal-components && yarn lerna bootstrap --ignore=srs-universal-components`

## add one project to another
 - `yarn lerna add srs-universal-components --scope=native-app`

## run script in all packages
 - `yarn lerna run start` or separately in a package folder `yarn start`

## Credits
Inspired by [universal-components-example](https://github.com/samanthabretous/universal-components-example), see the [ReactEurope talk](https://www.youtube.com/watch?v=D1NkyO-J6B0)