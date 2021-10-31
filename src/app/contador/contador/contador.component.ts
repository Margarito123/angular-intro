import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `

<h1>{{ titulo }}</h1>
<h3>La base es: <strong>{{ base }}</strong></h3>
<button (click)= "acumular(+base)"> + {{ base }}</button>
<span>{{ numero }}</span>
<button (click)= "acumular(-base)"> - {{ base }} </button>

  `
})

export class ContadorComponent{

  titulo: string = 'Contador App';
  numero: number = 10;
  base: number = 5;

  //METODOS
  //sumar(){
    //this.numero += 1;
  //}

  //restar(){
    //this.numero -= 1;
  //}

  //Los dos metodos anteriores se pueden reducir en uno solo:
//El argumento valor es el que se le va a pasar para restar o sumar.
  acumular( valor: number) {
  this.numero += valor;
}



}
