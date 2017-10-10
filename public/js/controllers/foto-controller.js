angular.module('alurapic').controller('FotoController', function ($scope, $http, $routeParams) {
    $scope.foto = {};
    $scope.mensagem = '';

    if ($routeParams.fotoId) {
        $http.get('v1/fotos/' + $routeParams.fotoId)
            .success(function (foto) {
                $scope.foto = foto;
            })
            .error(function (err) {
                $scope.mensagem = "Não foi possível obter a foto de ID : " + $routeParams.fotoId;
            });
    }

    $scope.submeter = function () {
        if ($scope.formulario.$valid) {
            if ($scope.foto._id) {
                $http.put('v1/fotos/'+$scope.foto._id, $scope.foto)
                .success(function(){
                    $scope.mensagem = "Foto " + $scope.foto.titulo + " alterada com sucesso";
                })
                .error(function(err){
                    console.log(err);
                    $scope.mensagem = "Não foi possível gravar alteração"
                })
            } else {
                $http.post('v1/fotos', $scope.foto)
                    .success(function () {
                        $scope.foto = {};
                        $scope.mensagem = 'Foto incluida com sucesso'
                        console.log('Foto cadastrada com sucesso.');

                    })
                    .error(function (error) {
                        $scope.mensagem = 'Não foi possível incluir a foto'
                        console.log(error);
                    })
            }
        }
    }
});