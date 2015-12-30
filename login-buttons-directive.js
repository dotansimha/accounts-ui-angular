angular.module('accounts.ui').directive('loginButtons', function() {
  return {
    restrict: 'EA',
    scope: true,
    template: '',
    link: function(scope, element, attrs) {
      Blaze.renderWithData(Template.loginButtons, {align: (attrs.align || '')}, element[0].parentElement);
    }
  }
});
