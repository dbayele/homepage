angular.module('aaron.homepage.directives.navBar', [

])
.directive('navBar', function($location) {
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

            $scope.hideMobileMenu = function(url) {
                $scope.mobileMenuOpen = false;

                if(url) {
                    $location.url(url);
                }

            };
        }
    };
});