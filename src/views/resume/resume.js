/**
 * Created by Aaron on 2/7/2015.
 */
angular.module('aaron.homepage.resume', [
    'templates',
    'ngRoute'
])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider.when('/resume', {
            templateUrl: 'src/views/resume/resume.tpl.html',
            controller: 'ResumeController',
            resolve: {
                nextMenuItem: function() {
                    return {
                        name: 'about',
                        url: '#/about'
                    }
                },
                currentMenuItem: function() {
                    return {
                        name: 'resume',
                        url: '#/resume'
                    }
                },
                menusVisible: function() {
                    return true;
                },
                backgroundClass: function() {
                    return 'resume-background';
                },
                pageTitle: function() {
                    return 'My Resume';
                }
            }
        });
    })
    .run(function() {

    })
    .controller('ResumeController', function($scope, $window) {
        $scope.printPage = function() {
            $window.print();
        };
    });