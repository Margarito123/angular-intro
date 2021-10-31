import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


//Los modulos sirven para contraolar la carga de la aplicacion, es decir que el el modulo principal no se carguen todos los componentes
//ya que no todos se usan al mismo tiempo y para distribuir la carga de usan los modules.
@NgModule({
    declarations: [
      HeroeComponent,
      ListadoComponent
    ],
    exports: [
      ListadoComponent
    ],
    imports: [
      CommonModule  //Sirve para poder usar el ngIf etc

    ]
})
export class HeroesModule {}
