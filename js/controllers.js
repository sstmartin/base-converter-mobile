angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})


.controller('ConverterCtrl', function($scope, $ionicPopup, $timeout) {
  var names = ['Binary','Octal','Decimal','Hexidecimal'];
  var infos = ['Also known as Base2. Consists of only 0s and 1s.',
  'Also known as Base8. Consists of values 0-7.',
  'Also known as Base10. Consists of values 0-10. This is the base we know and love!',
  'Also know as Base16. Consists of 0-10 and letters A-E which represent the values 10-15.'];

  $scope.showAlert = function(baseinfo) {
    var alertPopup = $ionicPopup.alert({
      title: names[baseinfo],
      template: infos[baseinfo]
    });
  };
});
