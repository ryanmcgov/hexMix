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


}());
