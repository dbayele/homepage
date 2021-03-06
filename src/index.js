/**
 * Created by Aaron on 2/7/2015.
 */
angular.module('aaron.homepage', [
    'templates',
    'ngRoute',
    'ngTouch',
    'ngAnimate',
    'aaron.homepage.directives.navBar',
    'aaron.homepage.directives.footerNav',
    'aaron.homepage.home',
    'aaron.homepage.portfolio',
    'aaron.homepage.fourohfour',
    'aaron.homepage.resume',
    'aaron.homepage.about',
    'aaron.homepage.contact'

])
.config(function($routeProvider, $locationProvider) {
    $routeProvider.otherwise({redirectTo:'/fourohfour'});

    $locationProvider.html5Mode(true);
})
.run(function() {

})
.controller('MainController', function($scope, $rootScope, $window) {
    $scope.currentMenuItem = null;
    $scope.nextMenuItem = null;
    $scope.menusVisible = null;
    $scope.backgroundClass = null;
    $scope.pageTitle = "Aaron's Homepage";

    $rootScope.$on( "$routeChangeSuccess", function(event, next, current) {
        $scope.nextMenuItem = next.locals.nextMenuItem;
        $scope.currentMenuItem = next.locals.currentMenuItem;
        $scope.menusVisible = next.locals.menusVisible;
        $scope.backgroundClass = next.locals.backgroundClass;
        $scope.pageTitle = next.locals.pageTitle;

        $window.scrollTo(0, 0);
    });
});