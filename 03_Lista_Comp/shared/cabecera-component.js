class CabeceraController{
    constructor(){};
    $onInit(){
        this.titulo = 'Crear lista de ideas';
    };
}

angular.module('sharedModule')
.component('appCabecera', { 
    template:`
    <header>
        <h1 ng-bind="$ctrl.titulo"></h1>        
        <br/>
    </header>`,
    controller: CabeceraController,
  });

