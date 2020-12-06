angular.module('minhasDiretivas', [])

.directive('meuPainel', function(){
    
    var ddo = {};
    ddo.restrict = 'AE';

    // escopo restrito em função do título//
    ddo.scope =
    {
        titulo: '@titulo', // ou só @ por ser o mesmo nome entre atributo e propriedade *PASSA COMO STRING*//
    };
    // para garantir os elementros filhos. Inserir ng-transclude na tag desejada"
    ddo.transclude = true;

    ddo.templateUrl = 'js/directives/meu-painel.html';

    return ddo;
})
.directive('meuBotaoPerigo', function(){
    var ddo ={};
    ddo.restrict ="AE";
    ddo.scope ={
        nome: '@',
        acao:'&' //Deixa de passar o valor como string, passa de fato a função.
    };
    ddo.template = '<button ng-click="acao(foto)" class="btn btn-danger btn-block">{{nome}}</button>';
    
    return ddo;

}).directive('meuFocus', function(){
    var ddo = {};
    ddo.restrict = "A";
    ddo.scope = {
        focado: '='
    };
    ddo.link = function (scope, element){
        $scope.$watch('focado', function(){
            if(scope.focado){
                element[0].focus();
            }
        });
    };

    return ddo;
});