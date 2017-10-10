class AppController {
    $onInit() {
     this.sCurso='AngularJS'; 
    }
}

class SaludoController {
    $onInit() {   
        this.sName='Pepe';
        console.log(this);
    }  

    btnBorrar () {
        this.sName=''
    }
}


angular.module("appModule", [])
.controller("AppController", AppController)

.component('appSaludo', {
    templateUrl: 'parcial.html',
    controller: SaludoController,
    controllerAs: 'vm'
});