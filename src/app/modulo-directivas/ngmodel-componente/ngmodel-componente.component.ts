import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngmodel-componente',
  templateUrl: './ngmodel-componente.component.html',
  styleUrls: ['./ngmodel-componente.component.css']
})
export class NgmodelComponenteComponent implements OnInit{
  lado = 1;

  cambiaLado(valor: number){
     this.lado = valor;
   }
  ngOnInit() {
    
  }
}
