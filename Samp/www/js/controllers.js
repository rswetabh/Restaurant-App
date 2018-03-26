var app = angular.module('starter.controllers', [])

app.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  });
app.controller('ItemsController',function($scope)
{
  $scope.items = [
        { 
          id :'1',
          name: 'Chicken Karahi'

        },
         { 
           id :'2',
          name: 'Chicken Button Masala'

        },
        { 
           id :'3',
          name: 'Chicken Chilly'
        },
         { 
           id :'4',
          name: 'Chicken Chowmin'

        },
         { 
           id :'5',
          name: 'Chicken Do Pyaza'

        },
         { 
           id :'6',
          name: 'Chicken Bhunna Masala'

        },
         { 
           id :'7',
          name: 'Chicken Handi'

        },
         { 
           id :'8',
          name: 'Chicken Laziz'

        },
         { 
           id :'9',
          name: 'Chicken Tikka Masala'

        }
    ]

});

app.controller('ItemsDetailsController',function($scope,$stateParams) {

    $scope.ItemId = $stateParams.itemId;


});