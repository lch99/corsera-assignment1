(function () {
//to prevent making mistakes
'use strict';

//bind with html
angular.module('LunchCheck', [])

//contol the view of the view model
.controller('LunchCheckController',
//with a function and any variable name with smbol $
function ($scope, $filter) {
  $scope.description = "";

  $scope.click = function(){

    if(!$scope.value){
        $scope.description = "Please enter data first."
    }else if($scope.value){

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

      var index = splitIndex - space;

      //Display the message to user
      if(index <= 3 && index >= 1){
        $scope.description = "Enjoy!"
      }else if(index > 3){
        $scope.description = "Too much!"
      }else if (index == 0) {
          $scope.description = "Please enter data first."
      }
    }

    return  $scope.description;

  };

});

})();
