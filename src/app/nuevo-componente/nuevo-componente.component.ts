import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo-componente',
  templateUrl: './nuevo-componente.component.html',
  styleUrls: ['./nuevo-componente.component.css']
})
export class NuevoComponenteComponent implements OnInit {
  dato = "Creando componentes para DesarrolloWeb.Com";

  constructor() {}

  ngOnInit(): void {
    console.log('componente inicializado...');
  }
}
