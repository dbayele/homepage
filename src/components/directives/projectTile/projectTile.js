angular.module('aaron.homepage.directives.projectTile', [

])
.directive('projectTile', function() {
    return {
        restrict: 'E',
        templateUrl: 'src/components/directives/projectTile/projectTile.tpl.html',
        scope: {
            projectName: '=',
            descriptionTemplate: '=',
            imageUrl: '=',
            liveUrl: '=',
            localUrl: '='
        },
        link: function($scope, element, attrs) {

        }
    };
});