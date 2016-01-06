Package.describe({
  name: "pavlovich:accounts-ui-angular",
  summary: "AngularJS wrapper for Meteor's Account-UI package modified from dotansimha:­accounts-ui-angular to allow the user of the directive to provide an 'align' parameter with value of either 'left' or 'right'",
  version: "0.0.1",
  documentation: 'README.md',
  git: "https://github.com/pavlovich/accounts-ui-angular"
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.2.0.1');
  api.use('angular:angular@1.4.7', 'client');
  api.use('blaze-html-templates', 'client');

  api.imply('accounts-ui');

  api.addFiles([
    'accounts-ui-angular.js',
    'login-buttons-directive.js'
  ], 'client');
});
