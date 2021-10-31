import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador.component';


//Los modulos sirven para contraolar la carga de la aplicacion, es decir que el el modulo principal no se carguen todos los componentes
//ya que no todos se usan al mismo tiempo y para distribuir la carga de usan los modules.
@NgModule({
    declarations: [
      ContadorComponent
    ],
    exports: [
      ContadorComponent
    ],
    imports: [


    ]
})
export class ContadorModule {}
