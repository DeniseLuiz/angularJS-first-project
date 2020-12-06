angular.module('alurapic').controller('GruposCtrl', function($scope, $http){

    $scope.grupos=[];
    $http.get('v1/grupos').then(function(data){
        $scope.grupos = data.data;
        console.log(grupos);
    });
});