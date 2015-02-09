/**
 * Created by Aaron on 2/8/2015.
 */
angular.module('aaron.homepage.services.MenuStateService', [

])
.service('MenuStateService', function() {

    var _currentMenuItem = null;
    var _nextMenuItem = null;

    var _getCurrentMenuItem = function() {
        return _currentMenuItem;
    };

    var _getNextMenuItem = function() {
        return _nextMenuItem;
    };

    var _setCurrentMenuItem = function(name, url) {
        _currentMenuItem = {
            name: name,
            url: url
        };
    };

    var _setNextMenuItem = function(name, url) {
        _nextMenuItem = {
            name: name,
            url: url
        };
    };

    return {
        getCurrentMenuItem:_getCurrentMenuItem,
        getNextMenuItem:_getNextMenuItem,
        setCurrentMenuItem:_setCurrentMenuItem,
        setNextMenuItem:_setNextMenuItem
    };

});