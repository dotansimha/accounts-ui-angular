# accounts-ui-angular
AngularJS wrapper for Meteor's Account-UI package

# How to use?
- Make sure you have the `angular` package in your root account.
- Add the package:
`meteor add dotansimha:accounts-ui-angular`
- Add a dependency on your AngularJS module. For example:
```javascript
angular.module('myApp', ['angular-meteor', 'accounts.ui']);
```

- Use it in your app, for example:
```html
<login-buttons></login-buttons>
```
