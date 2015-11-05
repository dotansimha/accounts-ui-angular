angular.module('accounts.ui').directive('loginButtons', function() {
  return {
    restrict: 'EA',
    scope: true,
    template: '<div></div>',
    link: function(scope, element) {
      Blaze.render(Template.loginButtons, element[0]);
    }
  }
});