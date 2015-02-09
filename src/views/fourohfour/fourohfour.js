/**
 * Created by Aaron on 2/7/2015.
 */
angular.module('aaron.homepage.fourohfour', [
    'templates',
    'ngRoute'
])
.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/fourohfour', {
        templateUrl: 'src/views/fourohfour/fourohfour.tpl.html',
        controller: 'FourohfourController',
        resolve: {
            nextMenuItem: function() {
                return {
                    name: 'home',
                    url: '#/home'
                }
            },
            currentMenuItem: function() {
                return {
                    name: 'fourohfour',
                    url: '#/fourohfour'
                }
            },
            menusVisible: function() {
                return false;
            }
        }
    });
})
.run(function() {

})
.controller('FourohfourController', function($scope) {
    console.log('Fourohfou Controller Active - Hello');
});