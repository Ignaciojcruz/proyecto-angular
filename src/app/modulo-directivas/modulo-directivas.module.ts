import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgclassComponenteComponent } from './ngclass-componente/ngclass-componente.component';
import { NgforComponenteComponent } from './ngfor-componente/ngfor-componente.component';



@NgModule({
  declarations: [
    NgclassComponenteComponent,
    NgforComponenteComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgclassComponenteComponent,
    NgforComponenteComponent
  ]
})
export class ModuloDirectivasModule { }
