angular.module("appModule")
.directive('appCabecera',function() {
  return {
    //parámetros de directiva
    //restrict: de qué manera se invoca la directiva(Elemento, Atributo, Clase, Comentario[esto no se usa casi])    
    template : `
    <header>
        <h1> {{$ctrl.sTitulo}} </h1>   
    </header>`,
    restrict : 'EAC',
    // sirve para prescindir del elemento que lo contiene
    replace: true,
    link : function (scope, elem, attrs) {
        console.log(scope);
        console.log(elem);
        console.log(attrs);
   }
  };  
})