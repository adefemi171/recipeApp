# Recipe App



# App Details

Create a simple iOS application (React Native) for recipes. The app will support categories & recipes, and all the data is fetched from Firebase Firestore.

The app will consist of:

    └──Tab Bar Menu

    └──Home

    └──Categories

    └──Recipes List (grid, just like Home)

    └──Single Recipe Details


# Proposed Stack

JavaScript (React Native), Generated Data from [Firebase Firestore](https://www.instamobile.io/wp-content/uploads/2019/10/dataArrays.js)


# Top-level directory layout

    📦recipeApp
        📦assets
            ┗ 📦img
                ┣ 📜backIcon.png
                ┣ 📜categoryIcon.png
                ┣ 📜cancelIcon.png
                ┣ 📜cookiesIcon.png
                ┣ 📜homeIcon.png
                ┣ 📜infoIcon.png
                ┣ 📜ingredientsIcon.png
                ┣ 📜listIcon.png
                ┣ 📜menuIcon.png
                ┣ 📜timeIcon.png
            ┣ 📜icon.png
            ┣ 📜splash.png

        📦node_modules
            ┗ 📜test.html
        📦src
            ┣ 📦components
            ┣ 📦constants
            ┣ 📦mockData
            ┣ 📦routes
            ┣ 📦screens
            ┣  📜AppStyles.js
            ┗ 📜index.js
        📦web-build
            ┣ 📜register-service-worker.js
        ┣ 📜app.json
        ┣ 📜App.js
        ┣ 📜babel.config.js
        ┣ 📜package.json
        ┣ 📜package-lock.json
        ┣ 📜README.md
        ┣ 📜yarn.lock


# How to setup project and run locally

### Clone the repository 

```
git clone https://github.com/adefemi171/recipeApp.git
```

### Install all dependencies

Using yarn

```
yarn install
```

Using npm

```
npm install
```

### Start watching the file and changes

Using yarn

```
yarn run watch
```

Using npm

```
npm run watch
```

### Install Expo on your device using this link

Expo for Android

```
https://play.google.com/store/apps/details?id=host.exp.exponent
```

Expo for IOS

```
https://itunes.com/apps/exponent/
```
### Start the react native bundler to test project on your device

Using yarn

```
yarn start
```

Using expo

```
expo start
```            





