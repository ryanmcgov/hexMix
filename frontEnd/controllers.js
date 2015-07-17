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
    $scope.paletteSubmit = function(paletteObject) {
      console.log("I'VE BEEN DEPRESSED", paletteObject);
      console.log("HEX", hexObj);
      if ($scope.title && $scope.keyword && $scope.hexes.hex1 && $scope.hexes.hex && $scope.hexes.hex3 && $scope.hexes.hex4 && $scope.hexes.hex5) {
        var newPalette = {};
        newPalette = {
          title: $scope.title,
          keyword: $scope.keyword,
          hexes: $scope.hexes
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
    $scope.hexes = [];

$(".basic").spectrum({
     color: "#f00",
     change: function(color) {
         var hexVal = $("#hex1").text(color.toHexString());
        //  hexVal[0].outerText.push($scope.hexes);
         console.log(hexVal[0].outerText);
         var finalHex = hexVal[0].outerText;
         console.log(finalHex);
         $scope.hexes.push(finalHex);
         console.log($scope.hexes);
     }
   });
 $(".basic2").spectrum({
     color: "#f00",
     change: function(color) {
         var hexVal2 = $("#hex2").text(color.toHexString());
         var finalHex2 = hexVal2[0].outerText;
         $scope.hexes.push(finalHex2);
         console.log($scope.hexes);
     }
 });
 $(".basic3").spectrum({
     color: "#f00",
     change: function(color) {
         var hexVal3 = $("#hex3").text(color.toHexString());
         var finalHex3 = hexVal3[0].outerText;
         $scope.hexes.push(finalHex3);
         console.log($scope.hexes);
     }
 });
 $(".basic4").spectrum({
     color: "#f00",
     change: function(color) {
         var hexVal4 = $("#hex4").text(color.toHexString());
         var finalHex4 = hexVal4[0].outerText;
         $scope.hexes.push(finalHex4);
         console.log($scope.hexes);
     }
 });
 $(".basic5").spectrum({
     color: "#f00",
     change: function(color) {
         var hexVal5 = $("#hex5").text(color.toHexString());
         var finalHex5 = hexVal5[0].outerText;
         $scope.hexes.push(finalHex5);
         console.log($scope.hexes);
     }
 });
  });
})();
