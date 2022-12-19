import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass-componente',
  templateUrl: './ngclass-componente.component.html',
  styleUrls: ['./ngclass-componente.component.css']
})
export class NgclassComponenteComponent implements OnInit{
  texto: string= "SI";
  estadoPositivo: boolean = true;

  cambiaEstado(){
    this.texto = (this.estadoPositivo) ? "NO" : "SI";
    this.estadoPositivo = !this.estadoPositivo;
  }

  ngOnInit() {
    
  }

}
