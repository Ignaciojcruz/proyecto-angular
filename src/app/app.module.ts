import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NuevoComponenteComponent } from './nuevo-componente/nuevo-componente.component';
import { NuevoModuloModule } from './nuevo-modulo/nuevo-modulo.module';
import { SegundoModuloModule } from './segundo-modulo/segundo-modulo.module';
import { ModuloDirectivasModule } from './modulo-directivas/modulo-directivas.module';

@NgModule({
  declarations: [
    AppComponent,
    NuevoComponenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NuevoModuloModule,
    SegundoModuloModule,
    ModuloDirectivasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
