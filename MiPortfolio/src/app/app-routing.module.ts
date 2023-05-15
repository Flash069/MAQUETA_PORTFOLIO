import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresopagComponent } from './componente/ingresopag/ingresopag.component';
import { RutaComponent } from './componente/ruta/ruta.component';

const routes: Routes = [
  {path: '', component: RutaComponent}
  {path: 'ingreso', component: IngresopagComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
