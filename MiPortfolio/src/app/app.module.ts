import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import  {  NgCircleProgressModule  }  from  'ng-circle-progress';
import { RutaComponent } from './componente/ruta/ruta.component';
import { BannerComponent } from './componente/banner/banner.component';
import { CirculosComponent } from './componente/circulos/circulos.component';
import { EducacionComponent } from './componente/educacion/educacion.component';
import { ExperienciaLaboralComponent } from './componente/experiencia-laboral/experiencia-laboral.component';
import { FooterComponent } from './componente/footer/footer.component';
import { HeaderComponent } from './componente/header/header.component';
import { InfopersonalComponent } from './componente/infopersonal/infopersonal.component';
//import { IngresoComponent } from './componente/ingresopag/ingresopag.component';
import { LogoAPComponent } from './componente/logo-ap/logo-ap.component';
import { ProyectosComponent } from './componente/proyectos/proyectos.component';



@NgModule({
  declarations: [
BannerComponent,
CirculosComponent,
EducacionComponent,
ExperienciaLaboralComponent,
FooterComponent,
HeaderComponent,
InfopersonalComponent,
//IngresoComponent,
LogoAPComponent,
ProyectosComponent,
    RutaComponent
  ],
  imports: [
    BrowserModule,
   AppRoutingModule,
    NgCircleProgressModule . forRoot ( { }),
   // HttpClientModule
  ],
  providers: [
  //  InterceptorService
  ],
 // bootstrap: [AppComponent]
})
export class AppModule { }