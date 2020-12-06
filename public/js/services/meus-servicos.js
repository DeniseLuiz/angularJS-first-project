angular.module('meusServicos', ['ngResource'])
.factory ('recursoFoto',function ($resource, $q){

    return $resource('v1/fotos/:fotoId', null, {
        update: {
            method: 'PUT'
        }
    });
}).factory("cadastroDeFotos", function(recursoFoto, $q) {
    var service = {};
    service.cadastrar = function(foto) {
        return $q(function(resolve, reject) {

            if(foto._id) {
                recursoFoto.update({fotoId: foto._id}, foto, function() {
                    resolve({
                        mensagem: 'Foto atualizada com sucesso, parça!',
                        inclusao: false
                    });
                }, function(erro) {
                    console.log(erro);
                    reject({
                        mensagem: 'Que pena! Não foi possível atualizar a foto.'
                    });
                });

            } else {
                 recursoFoto.save(foto, function() {
                    resolve({
                        mensagem: 'Foto atualizada com sucesso, parça!',
                        inclusao: true
                    });
                }, function(erro) {
                    console.log(erro);
                    reject({
                        mensagem: 'Que pena! Não foi possível atualizar a foto.'
                    });
                });
            } 
        });
    };
    return service;
});