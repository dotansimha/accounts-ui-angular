Package.describe({
  name: "bruck:accounts-ui-angular",
  summary: "AngularJS wrapper for Ian's Account-UI-Bootstrap-3 package",
  version: "0.0.4",
  documentation: 'README.md',
  git: "https://github.com/kordianbruck/accounts-ui-angular"
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.2.0.1');
  api.use('angular:angular@1.4.7', 'client');
  api.use('blaze-html-templates', 'client');

  api.imply('ian:accounts-ui-bootstrap-3@1.2.84');

  api.addFiles([
    'accounts-ui-angular.js',
    'login-buttons-directive.js'
  ], 'client');
});
