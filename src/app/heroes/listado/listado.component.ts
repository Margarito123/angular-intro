import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Cápitan América'];

  heroeBorrado: string = '';

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || '';

  }




  // constructor() {
  //   console.log('constructor');

  // }

  // El ngOnInit es el primer ciclo de vida que tenermos en Angular, que dispara de manera automatica,
  //por lo genera de utiliza para inicializar cosas
  // ngOnInit(): void {
  //   console.log('ngOnInit');
  // }

}
