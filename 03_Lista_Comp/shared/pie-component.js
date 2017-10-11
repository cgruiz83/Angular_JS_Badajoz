class PieController{
    constructor(){};
    $onInit(){
        this.formador = 'Yo';
        this.empresa = 'Empresa S.A.';
        this.lugar= 'Badajoz';
    };
}

angular.module('sharedModule')
.component('appPie', {   
    template:`
    <footer>        
     <p><b>Formador: {{$ctrl.formador}}</b></p>    
     <p><b>Empresa: </b>  {{$ctrl.empresa}} - <b> Localización: </b> {{$ctrl.lugar}}</p>    
    </footer>`,
    controller: PieController
  });