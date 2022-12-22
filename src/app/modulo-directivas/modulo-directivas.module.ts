import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgclassComponenteComponent } from './ngclass-componente/ngclass-componente.component';
import { NgforComponenteComponent } from './ngfor-componente/ngfor-componente.component';
import { NgmodelComponenteComponent } from './ngmodel-componente/ngmodel-componente.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NgclassComponenteComponent,
    NgforComponenteComponent,
    NgmodelComponenteComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    NgclassComponenteComponent,
    NgforComponenteComponent, 
    NgmodelComponenteComponent
  ]
})
export class ModuloDirectivasModule { }
