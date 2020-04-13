# Newsfeed

## Requirements

The description and documentation about React Native can be found on their website: https://facebook.github.io/react-native/docs/getting-started.html#content


Install NODEJS from its official page

https://nodejs.org/en/

To finish installing React-Native

```
npm install react-native-cli -g
```

## Starting

From the terminal we access the folder where we want to clone the project and execute the following command.

```
git clone "https://github.com/adrianhondal1989/Newsfeed.git"
```

Then we enter the project folder by executing the following command.

```
cd Newsfeed
```

## Use

Now we install the dependencies.

```
npm install
```

## Test (iOS)

We run the following command.

```
cd ios && pod install && cd ..
```

We make sure we have a connected iPhone device or an iOS emulator and run the following command (only on MacOS).

```
react-native run-ios
```

## Test (Android)

We make sure we have a connected android device or emulator and run the following command.

```
react-native run-android
```
