(function() {
  'use strict';
angular
  .module('hexMix')
  .controller('MainController', function ($scope, PaletteService) {
    PaletteService.getPalettes().success(function (palettes) {
      $scope.palettes = palettes;
    });
    $scope.$on('item:added', function() {
      PaletteService.getPalettes().success(function (palettes) {
        $scope.palettes = palettes;
      });
    });

    $(body).on(‘click’, ‘.submit’, $scope.createNewPallette);

    $scope.addPalette = function (newPalette) {
      PaletteService.addPalette(newPalette);
    },


    $scope.createNewPallette: function (title, keyword, hex1, hex2, hex3, hex4, hex5) {
    	var newPalette = {
    		title : title,
    		keyword: keyword,
    		hex1: hex1,
        hex2: hex2,
        hex3: hex3,
        hex4: hex4,
        hex5: hex5,
        }
        MainController.addPalette(newPalette);
      });


}());
