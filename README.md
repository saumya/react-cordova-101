React&Cordova
================
## Cordova platform based projects

Mandatory
 - Cordove CLI
 - plugman

Get the libraries
  - Android : [https://github.com/apache/cordova-android/releases][2]
  - iOS : [https://github.com/apache/cordova-ios/releases][1]

Creating a [phonegap platform project reference is here][3].

```
//From inside the library
./bin/create path/to/preoject/folder com.package.name ProjectName

./bin/create /Users/Pivotal/Documents/2_saumya/4_mobileApps/1_cordova/1_react-cordova_101/part-cordova com.saumyaray.cordreact CordReact1
```

From now on the commands will be fired from inside our project folder.

```
./cordova/run ios
```

## React application

Inside the `part_react` folder, run these commands
 
 For dev-dependencies
```
npm init
npm install babel-cli --save-dev
npm install babel-preset-es2015 --save-dev
npm install babel-preset-react --save-dev
npm install css-loader --save-dev
npm install style-loader --save-dev
npm install webpack --save-dev
```
 For dependencies
```
npm install react --save
npm install react-dom --save
npm install react-router --save
npm install flux --save
npm install underscore --save

npm install react-tap-event-plugin --save
npm install material-ui@0.15.0-beta.1 --save
```
Just remember to install the `react-tap-event-plugin` before installing `material-ui`.

We are ready to start coding.







[1]: https://github.com/apache/cordova-ios/releases
[2]: https://github.com/apache/cordova-android/releases
[3]: https://gist.github.com/saumya/9638603