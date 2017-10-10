class AppController {

    constructor($scope) {
       this.$scope = $scope;
    }

    $onInit(){
        this.name = 'Ataulfo';
        this.curso = 'Angular JS en Badajoz';

        console.log(`Soy el scope: `);
        console.log(this.$scope);
        console.log(`Soy el this:`);
        console.log(this);

    }

    btnBorrar() {
        this.name = '';
    }

};


angular.module("appModule", [])
.controller("AppController", AppController);