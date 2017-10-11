class ListaController {
  $onInit() {   
      this.nuevaIdea='';
      this.listaIdeas = [];
      console.log(this);
  }  

  btnAdd () {
      this.listaIdeas.push(this.nuevaIdea);
      this.nuevaIdea = '';
  }
}

angular.module("appModule")
.component('appLista', {
  templateUrl: './main/lista-partial.html',
  controller: ListaController
});