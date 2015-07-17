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

    // $(body).on(‘click’, ‘.submit’, $scope.createNewPallette);

    $scope.addPalette = function (newPalette) {
      PaletteService.addPalette(newPalette);
    },


    $scope.createNewPallette = function (title, keyword, hex1, hex2, hex3, hex4, hex5) {
    	var newPalette = {
    		title : $el.find('input[name="title"]').val(),
    		keyword: $el.find('input[name="keyword"]').val(),
    		hex1: $el.find('input[name="hex1"]').val(),
        hex2: $el.find('input[name="hex2"]').val(),
        hex3: $el.find('input[name="hex3"]').val(),
        hex4: $el.find('input[name="hex4"]').val(),
        hex5: $el.find('input[name="hex5"]').val(),
        }
        MainController.addPalette(newPalette);
      };


}());
