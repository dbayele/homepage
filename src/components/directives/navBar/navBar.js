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
                var isMobile = element.find('ul');

                console.log('isMobile = %o', isMobile);

                $scope.mobileMenuOpen = !$scope.mobileMenuOpen;
            };
        }
    };
});