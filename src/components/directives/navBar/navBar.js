angular.module('aaron.homepage.directives.navBar', [

])
.directive('navBar', function($location, $document) {
    return {
        restrict: 'E',
        templateUrl: 'src/components/directives/navBar/navBar.tpl.html',
        scope: {
            currentItem: '='
        },
        link: function($scope, element, attrs) {
            $scope.mobileMenuOpen = false;


            $scope.toggleMobileMenu = function($event) {
                $scope.mobileMenuOpen = !$scope.mobileMenuOpen;
                $event.stopPropagation();
            };

            $scope.hideMobileMenu = function(url) {
                $scope.mobileMenuOpen = false;

                if(url) {
                    $location.url(url);
                }

            };

            var hideOnOutsideClick = function(event) {
                var targetElement = angular.element(event.target);
                var hideMenu = true;

                for(var currentElement = targetElement; currentElement.length > 0; currentElement = currentElement.parent()) {
                    //console.log('currentElement[0].nodeName = %o', currentElement[0].nodeName);

                    if(currentElement[0].nodeName === 'NAV') {
                        hideMenu = false;
                        break;
                    }
                }

                if(hideMenu && $scope.mobileMenuOpen) {

                    $scope.hideMobileMenu();
                }
            };

            $document.bind('click', function() {
                $scope.$apply(function() { hideOnOutsideClick(event); });
            });

            $document.bind('touchstart', function() {
                $scope.$apply(function() { hideOnOutsideClick(event); });
            });

            $document.bind('touchmove', function() {
                $scope.$apply(function() { hideOnOutsideClick(event); });
            });

            $document.bind('pointerdown', function() {
                $scope.$apply(function() { hideOnOutsideClick(event); });
            });

            $document.bind('pointermove', function() {
                $scope.$apply(function() { hideOnOutsideClick(event); });
            });

        }
    };
});