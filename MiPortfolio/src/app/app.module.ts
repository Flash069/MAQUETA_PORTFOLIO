import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './componente/banner/banner.component';
import { LogoAPComponent } from './componente/logo-ap/logo-ap.component';
import { HeaderComponent } from './componente/header/header.component';
import { InfopersonalComponent } from './componente/infopersonal/infopersonal.component';
import { EducacionComponent } from './componente/educacion/educacion.component';
import { ExperienciaLaboralComponent } from './componente/experiencia-laboral/experiencia-laboral.component';
import { CirculosComponent } from './componente/circulos/circulos.component';
import { ProyectosComponent } from './componente/proyectos/proyectos.component';
import { FooterComponent } from './componente/footer/footer.component';
import { IngresopagComponent } from './componente/ingresopag/ingresopag.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    LogoAPComponent,
    HeaderComponent,
    InfopersonalComponent,
    EducacionComponent,
    ExperienciaLaboralComponent,
    CirculosComponent,
    ProyectosComponent,
    FooterComponent,
    IngresopagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
