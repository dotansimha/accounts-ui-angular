angular.module('accounts.ui').directive('loginButtons', function() {
  return {
    restrict: 'EA',
    scope: true,
    template: '<div></div>',
    link: function(scope, element, attrs) {
      Blaze.renderWithData(Template.loginButtons, {align: (attrs.align || '')}, element[0].parentElement);
    }
  }
});
