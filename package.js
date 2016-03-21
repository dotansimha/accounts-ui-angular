Package.describe({
  name: "dotansimha:accounts-ui-angular",
  summary: "AngularJS wrapper for Meteor's Account-UI package",
  version: "0.0.4",
  documentation: 'README.md',
  git: "https://github.com/dotansimha/accounts-ui-angular"
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.3-rc.4');
  api.use('angular:angular@1.4.7', 'client', {weak: true});
  api.use('blaze-html-templates', 'client');
  api.use('ecmascript@0.4.0-beta.11');
  api.use('tmeasday:check-npm-versions@0.1.1');

  api.imply('accounts-ui');

  api.addFiles([
    'accounts-ui-angular.js',
    'login-buttons-directive.js'
  ], 'client');
});
