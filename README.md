# MyGraphQLApp

A React Native mobile app that fetches country data from a public GraphQL API using Apollo Client and displays it in a simple list view.

## Overview

This app demonstrates how to connect a React Native application to a GraphQL endpoint and query structured data. It uses the public Countries GraphQL API from Trevor Blades and renders each country with its code, name, and emoji flag.

## Features

- React Native app built with React Native CLI
- Apollo Client integration for GraphQL queries
- Public GraphQL endpoint for country data
- Simple mobile UI for listing countries
- Works on Android and iOS

## Tech Stack

- React Native
- Apollo Client
- GraphQL
- JavaScript
- Android Studio / Xcode for native app runs

## Project Structure

```bash
MyGraphQLApp/
├── App.tsx
├── __tests__/
├── android/
├── ios/
├── src/
│   ├── graphql/
│   │   ├── apolloClient.js
│   │   └── queries/
│   │       └── countries.js
│   └── screens/
│       └── CountriesScreen.js
├── package.json
├── README.md
├── babel.config.js
├── metro.config.js
├── jest.config.js
├── tsconfig.json
├── .gitignore
├── Gemfile
├── app.json
└── index.js
```

## Prerequisites

Before running this app, make sure you have installed:

- Node.js 22.11.0 or later
- npm
- Android Studio + Android SDK (for Android)
- Xcode + CocoaPods (for iOS on macOS)
- Ruby and Bundler for iOS dependencies

Follow the official React Native environment setup guide:
https://reactnative.dev/docs/set-up-your-environment

## Installation

1. Clone the repository:

```bash
git clone <your-repository-url>
cd MyGraphQLApp
```

2. Install project dependencies:

```bash
npm install
```

3. For iOS, install CocoaPods dependencies:

```bash
bundle install
bundle exec pod install
```

## Running the App

Start the Metro bundler:

```bash
npm start
```

### Android

```bash
npm run android
```

### iOS

```bash
npm run ios
```

## GraphQL Setup

The app connects to the public GraphQL API at:

```text
https://countries.trevorblades.com/graphql
```

The Apollo client and the query are defined in:

- `src/graphql/apolloClient.js`
- `src/graphql/queries/countries.js`

The app uses the following query:

```graphql
query GetCountries {
  countries {
    code
    name
    emoji
  }
}
```

## GitHub Upload Guide

Your project is already initialized as a Git repository, but it does not yet have a GitHub remote configured.

### Step 1: Check repository status

```bash
git status
```

### Step 2: Add files to Git

```bash
git add .
```

### Step 3: Commit your project

```bash
git commit -m "Initial commit"
```

### Step 4: Create a repository on GitHub

1. Open https://github.com
2. Click the green "New repository" button
3. Enter a repository name, for example: `MyGraphQLApp`
4. Choose whether it should be public or private
5. Do not initialize with a README, .gitignore, or license if you already have project files
6. Click "Create repository"

### Step 5: Connect the repository to GitHub

```bash
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repository-name>.git
git push -u origin main
```

If you already created the remote and want to update it:

```bash
git remote set-url origin https://github.com/<your-username>/<your-repository-name>.git
```

## Notes

- This is a sample GraphQL app and can be used as a starting point for learning Apollo Client and React Native data fetching.
- The app uses a public API, so no authentication or API key is required.

## License

This project is currently unlicensed. You can add a license later such as MIT if needed.

## Author

Sanjeev Sharma

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
