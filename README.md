# accounts-ui-angular
AngularJS wrapper for Ian's Account-UI-Bootstrap-3 package

# How to use?
- Make sure you have the `angular` package in your root account.
- Add the package:
`meteor add bruck:accounts-ui-angular`
- Add a dependency on your AngularJS module. For example:
```javascript
angular.module('myApp', ['angular-meteor', 'accounts.ui']);
```

- Use it in your app, for example: *(needs to be places inside ng-app)*
```html
<login-buttons></login-buttons>
```
