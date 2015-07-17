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

    $scope.$watch('hexes.hex1', function() {
      console.log("SHOW ME");
    })
    $scope.paletteSubmit = function(paletteObject, hexObj) {
      $scope.hexes = hexObj
      console.log("I'VE BEEN DEPRESSED", paletteObject);
      console.log("HEX", hexObj);
      if ($scope.title && $scope.keyword && $scope.hexes.hex1 && $scope.hexes.hex && $scope.hexes.hex3 && $scope.hexes.hex4 && $scope.hexes.hex5) {
        var newPalette = {};
        newPalette = {
          title: $scope.title,
          keyword: $scope.keyword,
          hexes: $scope.hexes.hex1,
          hexes: $scope.hexes.hex2,
          hexes: $scope.hexes.hex3,
          hexes: $scope.hexes.hex4,
          hexes: $scope.hexes.hex5,
        };
        console.log("INSIDE PALETTE", newPalette);
      }
      console.log(newPalette);
      return newPalette;
    };
    //
    // $scope.title = "";
    // $scope.keyword = "";
    // $scope.hexes.hex1 = "";
    // $scope.hexes.hex2 = "";
    // $scope.hexes.hex3 = "";
    // $scope.hexes.hex4 = "";
    // $scope.hexes.hex5 = "";


    // $(".basic").spectrum({
    //     color: "#f00",
    //     change: function(color) {
    //         $("#hex1").text(color.toHexString());
    //     }
    //   });
    // $(".basic2").spectrum({
    //     color: "#f00",
    //     change: function(color) {
    //         $("#hex2").text(color.toHexString());
    //     }
    // });
    // $(".basic3").spectrum({
    //     color: "#f00",
    //     change: function(color) {
    //         $("#hex3").text(color.toHexString());
    //     }
    // });
    // $(".basic4").spectrum({
    //     color: "#f00",
    //     change: function(color) {
    //         $("#hex4").text(color.toHexString());
    //     }
    // });
    // $(".basic5").spectrum({
    //     color: "#f00",
    //     change: function(color) {
    //         $("#hex5").text(color.toHexString());
    //     }
    // });
  });
})();
