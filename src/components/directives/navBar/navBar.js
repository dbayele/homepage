angular.module('aaron.homepage.directives.navBar', [

])
.directive('navBar', function() {
    return {
        restrict: 'E',
        templateUrl: 'src/components/directives/navBar/navBar.tpl.html',
        scope: {
            currentItem: '='
        },
        link: function($scope, element, attrs) {
            $scope.mobileMenuOpen = false;


            $scope.toggleMobileMenu = function() {
                $scope.mobileMenuOpen = !$scope.mobileMenuOpen;
            };

            $scope.hideMobileMenu = function() {
                $scope.mobileMenuOpen = false;
            };
        }
    };
});