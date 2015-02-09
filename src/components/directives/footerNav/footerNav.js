angular.module('aaron.homepage.directives.footerNav', [

])
.directive('footerNav', function() {
    return {
        restrict: 'E',
        templateUrl: 'src/components/directives/footerNav/footerNav.tpl.html',
        scope: {
            nextItem: '='
        },
        link: function($scope, element, attrs) {

        }
    };
});