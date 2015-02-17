/**
 * Created by Aaron on 2/7/2015.
 */
angular.module('aaron.homepage.contact', [
    'templates',
    'ngRoute'
])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider.when('/contact', {
            templateUrl: 'src/views/contact/contact.tpl.html',
            controller: 'ContactController',
            resolve: {
                nextMenuItem: function() {
                    return {
                        name: 'home',
                        url: '#/'
                    }
                },
                currentMenuItem: function() {
                    return {
                        name: 'contact',
                        url: '#/contact'
                    }
                },
                menusVisible: function() {
                    return true;
                },
                backgroundClass: function() {
                    return 'contact-background';
                }
            }
        });
    })
    .run(function() {

    })
    .controller('ContactController', function($scope) {
        console.log('Contact Controller Active - Hello');
    });