angular.module('alurapic').controller('FotosController', function ($scope, $http, recursoFoto) {

    $scope.foto = {};
    $scope.filtro = '';
    $scope.mensagem = '';

    recursoFoto.query(function (fotos) {
        $scope.fotos = fotos;
    }, function (erro) {
        console.log(erro);
    });
    $scope.remover = function (foto) {
        recursoFoto.delete({fotoId : foto._Id}, function(){
            var indiceFoto = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indiceFoto, 1);
            $scope.mensagem = "Foto " + foto.titulo + " removida com sucesso.";
        },function(erro){
            console.log(err);
            $scope.mensagem = "Não foi possivel remover a foto " + foto.titulo;
        })
    };
    /*var promise = $http.get('v1/fotos');

    promise.then(function(retorno){
        $scope.fotos = retorno.data;
    }).catch(function(error){
        console.log(error);
    })*/


});