/**
 * Created by Aaron on 2/7/2015.
 */
angular.module('aaron.homepage.home', [
    'templates',
    'ngRoute',
    'aaron.homepage.services.MenuStateService'
])
.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'src/views/home/home.tpl.html',
        controller: 'HomeController',
        resolve: {
            nextMenuItem: function() {
                return {
                    name: 'portfolio',
                    url: '#/portfolio'
                }
            },
            currentMenuItem: function() {
                return {
                    name: 'home',
                    url: '#/home'
                }
            },
            menusVisible: function() {
                return false;
            },
            backgroundClass: function() {
                return 'main-background';
            }
        }
    });
})
.run(function() {

})
.controller('HomeController', function($scope, MenuStateService) {


    MenuStateService.setCurrentMenuItem('home', '#/home');
    MenuStateService.setNextMenuItem('portfolio', '#/portfolio');
    console.log('Home Controller Active - Hello');
});