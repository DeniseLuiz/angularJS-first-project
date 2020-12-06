angular.module('alurapic')
    .controller('FotoController', function($scope, cadastroDeFotos, recursoFoto, $routeParams) {

        $scope.foto = {};
        $scope.mensagem = '';

        if($routeParams.fotoId) {
            recursoFoto.get({fotoId : $routeParams.fotoId}, function(foto){
                $scope.foto = foto;
            }, function(erro){
                console.log(erro);
                $scope.mensagem = 'Não foi possível obter a foto';
            });
        }

        $scope.submeter = function() {
            /** Método sem utilizar o serviço factory cadastroFotos
            if ($scope.formulario.$valid) {

                if($routeParams.fotoId) {

                    recursoFoto.update ({fotoId : $scope.foto._id}, $scope.foto, function() {
                        $scope.mensagem = 'Foto alterada com sucesso, parça!';

                    }, function (erro){
                        $scope.mensagem = 'Não foi possível alterar a foto ' + $scope.foto.titulo;
                    });

                } else {                
                    $http.post('/v1/fotos', $scope.foto)
                    .success(function() {
                        $scope.foto = {};
                        $scope.mensagem = 'Foto cadastrada com sucesso';
                        $scope.formulario.$setPristine();
                        
                    })
                    .error(function(erro) {
                        console.log(erro);
                        $scope.mensagem = 'Não foi possível cadastrar a foto';
                    });
                }
            }*/ 
            if ($scope.formulario.$valid) {
                cadastroDeFotos.cadastrar($scope.foto)
                .then(function(dados) {
                    $scope.mensagem = dados.mensagem;
                    if (dados.inclusao) $scope.foto = {};
                    $scope.focado = true;
                })
                .catch(function(erro) {
                    $scope.mensagem = erro.mensagem;
                });
            }
        };
    }
);

