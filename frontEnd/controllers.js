(function() {
  'use strict';
angular
  .module('hexMix')
  .controller('MainController', function ($scope, PaletteService, $rootScope) {
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

    $rootScope.hexes = [];


    $scope.paletteSubmit = function(palette) {
      console.log("IVE BEEN HEXED", $rootScope.hexes);
      console.log("I'VE BEEN DEPRESSED", palette);
        var newPalette = {};
        var finalHexes = {
            hex1: $rootScope.hexes[0],
            hex2: $rootScope.hexes[1],
            hex3: $rootScope.hexes[2],
            hex4: $rootScope.hexes[3],
            hex5: $rootScope.hexes[4]
        };
        newPalette = {
          title: palette.title,
          keyword: palette.keyword,
          hexes: finalHexes
        };
        console.log("INSIDE PALETTE", newPalette);
        console.log("finalHexes", finalHexes)
      $scope.addThisPalette(newPalette);
      return newPalette;
    };

    $scope.addThisPalette = function (newPalette) {
      PaletteService.addPalette(newPalette);
      console.log('add this palette running');
    }
    

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
  })


})();
