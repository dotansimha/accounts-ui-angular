import {checkNpmVersions} from 'meteor/tmeasday:check-npm-versions';

checkNpmVersions({
  'angular': '^1.2.27'
});

require("angular");
angular.module('accounts.ui', []);