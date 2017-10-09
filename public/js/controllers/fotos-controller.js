angular.module('alurapic').controller('FotosController', function ($scope, $http) {

    $scope.foto = {};
    $scope.filtro = '';

    $http.get('v1/fotos')
        .success(function (fotos) {
            $scope.fotos = fotos;
        })
        .error(function (error) {
            console.log(erro);
        })

    $scope.remover = function (foto) {
        $http.delete('v1/fotos/' + foto._id)
            .success(function () {
                var indiceFoto = $scope.fotos.indexOf(foto);
                $scope.fotos.splice(indiceFoto, 1);
                console.log("Foto " + foto.titulo + " removida com sucesso.");

            })
            .error(function (err) {
                console.log(err);
                console.log("Não foi possivel remover a foto " + foto.titulo);
            })
    };
    /*var promise = $http.get('v1/fotos');

    promise.then(function(retorno){
        $scope.fotos = retorno.data;
    }).catch(function(error){
        console.log(error);
    })*/


});