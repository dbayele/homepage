angular.module('aaron.homepage.directives.projectTile', [

])
.directive('projectTile', function($filter) {
    return {
        restrict: 'E',
        templateUrl: 'src/components/directives/projectTile/projectTile.tpl.html',
        scope: {
            projectName: '=',
            descriptionTemplate: '=',
            imageUrl: '=',
            liveUrl: '=',
            localUrl: '=',
            datetime: '='
        },
        link: function($scope, element, attrs) {

        }
    };
});