angular.module("appModule", [])
.controller("AppController",AppController);

   AppController.$inject = ['$scope'];

   function AppController() {
    this.name = 'Eustaquio';
    this.curso = 'Curso de Angular';
       
    this.btnBorrar = function () {
        this.name = '';
    }
};
