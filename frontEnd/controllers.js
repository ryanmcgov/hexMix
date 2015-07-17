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

    $scope.addPalette = function (newPalette) {
      PaletteService.addPalette(newPalette);
    },

    $(".basic").spectrum({
        color: "#f00",
        change: function(color) {
            $("#hex1").text(color.toHexString());
        }

      });

    });
}());
