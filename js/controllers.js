angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
})

.controller('ConverterCtrl', function($scope, $ionicPopup, $timeout) {
  
  var names = ['Binary','Octal','Decimal','Hexidecimal'];
  var infos = ['Also known as Base2. Consists of only 0s and 1s.',
  'Also known as Base8. Consists of values 0-7.',
  'Also known as Base10. Consists of values 0-10. This is the base we know and love!',
  'Also know as Base16. Consists of 0-10 and letters A-F which represent the values 10-15.'];
  var bases = [2,8,10,16];

  $scope.showAlert = function(baseinfo) {
    var alertPopup = $ionicPopup.alert({
      title: names[baseinfo],
      template: infos[baseinfo]
    });
  };
})

.controller('RealtimeCtrl', function($scope) {


  $scope.convert = function(whi) {
  	if(whi == 0) {
  		if($scope.zer > 111111111111111) {
  		  var snip = $scope.zer.toString();
  		  $scope.zer = parseInt(snip.substring(0,snip.length-1),10);
  		}
  		else if($scope.zer > 0) { 
  		  var str = $scope.zer.toString().slice();
  		  var ten = parseInt(str,2);
  		  var str8 = ten.toString(8);
  		  var eig = parseInt(str8,10);
  		  var str16 = ten.toString(16);

  		  $scope.oct = eig;
  		  $scope.dec = ten;
  		  $scope.hex = str16;
  		}
  		else {
  		  $scope.oct = "";
  		  $scope.dec = "";
  		  $scope.hex = "";
  		}
  	}
  	if(whi == 1) {
  		if($scope.oct > 77777) {
  		  var snip = $scope.oct.toString();
  		  $scope.oct = parseInt(snip.substring(0,snip.length-1),10);  		  
  		}
  		else if($scope.oct > 0) {
  		   var str = $scope.oct.toString().slice();
  		   var ten = parseInt(str,8);
  		   var str2 = ten.toString(2);
  		   var two = parseInt(str2,10);
  		   var str16 = ten.toString(16);

  		   $scope.dec = ten;
  		   $scope.hex = str16;
  		   $scope.zer = two;
  		}
  		else {
  			$scope.zer = "";
  			$scope.dec = "";
  			$scope.hex = "";
  		}
  	}
  	if(whi == 2) {
  		if($scope.dec > 32767) {
  		  var snip = $scope.dec.toString();
  		  $scope.dec = parseInt(snip.substring(0,snip.length-1),10);  
  		}
  		else if($scope.dec > 0) {
  		  var str = $scope.dec.toString().slice();
  		  var ten = parseInt(str,10);
  		  var str2 = ten.toString(2);
  		  var two = parseInt(str2,10);
  		  var str8 = ten.toString(8);
  		  var eig = parseInt(str8,10);
  		  var str16 = ten.toString(16);

  		  $scope.zer = two;
  		  $scope.oct = eig;
  		  $scope.hex = str16;
  		}
  		else {
  			$scope.zer = "";
  			$scope.oct = "";
  			$scope.hex = "";
  		}
  	}
  	if(whi == 3) {
  		if(parseInt($scope.hex,16) > 32767) {
  		  var snip = $scope.hex;
  		  $scope.hex = snip.substring(0,snip.length-1);
  		}
  		else if($scope.hex > 0) {
  			var str = $scope.hex.slice();
  			var ten = parseInt(str,16);

  			$scope.zer = two;
  			$scope.oct = eig;
  			$scope.dec = ten;
  		}
  		else {
  			$scope.zer = "";
  			$scope.oct = "";
  			$scope.dec = "";
  		}
  	}
  };
});
