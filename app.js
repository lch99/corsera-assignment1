(function () {
//to prevent making mistakes
'use strict';

//bind with html
angular.module('LunchCheck', [])

//contol the view of the view model
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){
  $scope.click = function(){
  $scope.borderStyle = {};
  $scope.descriptionStyle = {};

    if(!$scope.value){
        $scope.display = function (){
          $scope.borderStyle.style = {"border-color":"red"};
          $scope.descriptionStyle.style = {"color":"red"};
          return $scope.description = "Please enter data first.";
        }
    }else if ($scope.value) {
      $scope.display = function (){

        //capture the whole string with comma separator
        var split = $scope.value.split(",");
        var splitIndex = split.length;

        //Capture the space or empty value in the string
        var space = 0;

        for(var i=0; i<splitIndex;i++){
          if(split[i] == ""){
            space ++;
          }else if(split[i] == " "){
            space ++;
          }
        }

        //Get the exact number of item(s)
        var index = splitIndex - space;

        //Display the message to user
        if(index <= 3 && index >= 1){
          $scope.borderStyle.style = {"border-color":"green"};
          $scope.descriptionStyle.style = {"color":"green"};
          return $scope.description = "Enjoy!"
        }else if(index > 3){
            $scope.borderStyle.style = {"border-color":"green"};
          $scope.descriptionStyle.style = {"color":"green"};
          return $scope.description = "Too much!"
        }else if (index == 0) {
            $scope.borderStyle.style = {"border-color":"red"};
          $scope.descriptionStyle.style = {"color":"red"};
          return $scope.description = "Please enter data first."
        }
      }
    }

    }
}
})();
