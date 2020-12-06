angular.module("alurapic").controller("FotosController", function ($scope, recursoFoto){
   
    $scope.fotos = [];
    $scope.filtro ='';
    $scope.msg ='';
    
    recursoFoto.query(function(fotos){
        $scope.fotos =fotos;
    }, function(erro) {
        console.log(erro);}
    );
    
    // ---------------------CARREGANDO FOTOS (GET)----------------------//
    // $http.get ('/v1/fotos').then(function (retorno){
    //     $scope.fotos = retorno.data;
    // });
   
    // -----------Outra forma de fazer a requisição get------------------//
                // $http.get ('/v1/fotos')
                // .success(function(fotos){
                //     $scope.fotos=fotos;
                // })
                // .error(function(){
                //     console.log(erro);
                // });
    // -------------------------------------------------------------------//

    // ---------------------DELETANDO FOTOS (DELETE)----------------------//
    
    $scope.remover = function(foto){
        recursoFoto.delete({fotoId : foto._id}, function () {
            
            var indiceFoto = $scope.fotos.indexOf(foto);
            $scope.fotos.splice (indiceFoto, 1);
            $scope.msg = 'Foto removida com sucesso, parça!';

        }, function (erro){
            console.log(erro);
        });
    };
 // ---------------------DELETANDO FOTOS (ALTERNATIVA SEM RESOURCE)----------------------//
        // $http.delete('v1/fotos/' + foto._id).success (function(){
        //     var indiceFoto = $scope.fotos.indexOf(foto);
        //     $scope.fotos.splice (indiceFoto, 1);
        //     $scope.msg = 'Foto removida com sucesso, parça!';
        // }).error(function(erro){
        //     console.log(erro);
        // });
    
});