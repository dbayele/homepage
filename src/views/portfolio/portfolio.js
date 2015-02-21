/**
 * Created by Aaron on 2/7/2015.
 */
angular.module('aaron.homepage.portfolio', [
    'templates',
    'ngRoute',
    'aaron.homepage.directives.projectTile'
])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider.when('/portfolio', {
            templateUrl: 'src/views/portfolio/portfolio.tpl.html',
            controller: 'PortfolioController',
            resolve: {
                nextMenuItem: function() {
                    return {
                        name: 'resume',
                        url: '/resume'
                    }
                },
                currentMenuItem: function() {
                    return {
                        name: 'portfolio',
                        url: '/portfolio'
                    }
                },
                menusVisible: function() {
                    return true;
                },
                backgroundClass: function() {
                    return 'portfolio-background';
                },
                pageTitle: function() {
                    return "My Portfolio";
                }
            }
        });
    })
    .run(function() {

    })
    .controller('PortfolioController', function($scope) {

    });