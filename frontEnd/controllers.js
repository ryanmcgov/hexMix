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

    $('.submit').on(‘click’, $scope.createNewPallette);

    $scope.addPalette = function (newPalette) {
      PaletteService.addPalette(newPalette);
    },


    $scope.createNewPalette = function (title, keyword, hex1, hex2, hex3, hex4, hex5) {
    	var newPalette = {
    		el.title : $('#newPaletteTitle').val(),
    		el.keyword : $('#newPaletteKeyword').val(),
    		el.hexes.hex1: $('#newPaletteHex1').val(),
        el.hexes.hex2: $('#newPaletteHex2').val(),
        el.hexes.hex3: $('#newPaletteHex3').val(),
        el.hexes.hex4: $('#newPaletteHex4').val(),
        el.hexes.hex5: $('#newPaletteHex5').val(),
        }
        MainController.addPalette(newPalette);
      };


}());
