(function() {
  'use strict';
  angular
    .module('hexMix')
    .factory('PaletteService', function ($http, $rootScope){
      var url = "http://tiy-fee-rest.herokuapp.com/collections/palettes";
      var getPalettes = function () {
        return $http.get(url);
      };
      var getPalette = function (index) {
        return palettes[index];
      };
      var addPalette = function (newPalette) {
        console.log('Palette Service add palette running');
        $http.post(url, newPalette).then(function (data) {
        $rootScope.$broadcast('item:added');
        });
      };



      return {
        getPalettes: getPalettes,
        getPalette: getPalette,
        addPalette: addPalette
      };

    });
}());
