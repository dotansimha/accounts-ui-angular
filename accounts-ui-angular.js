import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';

checkNpmVersions({
  'angular': '^1.2.27'
});

if (!angular) {
  throw 'AngularJS could not be found, please load the `angular` package in the root project!'
}
else {
  angular.module('accounts.ui', []);
}