angular.module('accounts.ui').directive('loginButtons', function() {
  return {
    restrict: 'EA',
    scope: true,
    template: '',
    link: function(scope, element) {
      Blaze.render(Template._loginButtons, element[0].parentElement);
    }
  }
});
