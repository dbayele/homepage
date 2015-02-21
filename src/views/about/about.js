/**
 * Created by Aaron on 2/7/2015.
 */
angular.module('aaron.homepage.about', [
    'templates',
    'ngRoute'
])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider.when('/about', {
            templateUrl: 'src/views/about/about.tpl.html',
            controller: 'AboutController',
            resolve: {
                nextMenuItem: function() {
                    return {
                        name: 'contact',
                        url: '/contact'
                    }
                },
                currentMenuItem: function() {
                    return {
                        name: 'about',
                        url: '/about'
                    }
                },
                menusVisible: function() {
                    return true;
                },
                backgroundClass: function() {
                    return 'about-background';
                },
                pageTitle: function() {
                    return 'About Me';
                }
            }
        });
    })
    .run(function() {

    })
    .controller('AboutController', function($scope) {

    });