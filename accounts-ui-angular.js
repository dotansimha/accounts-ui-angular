import {checkNpmVersions} from 'meteor/tmeasday:check-npm-versions';

if (!window.angular) {
  require("angular");
}

checkNpmVersions({
  'angular': '^1.2.27'
});

angular.module('accounts.ui', []);