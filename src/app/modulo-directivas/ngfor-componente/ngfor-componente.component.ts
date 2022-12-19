import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor-componente',
  templateUrl: './ngfor-componente.component.html',
  styleUrls: ['./ngfor-componente.component.css']
})
export class NgforComponenteComponent implements OnInit{

  preguntas: string[] = [
    "¿España ganará la Euro 2016?",
    "¿Hará sol el día de mi boda?",
    "¿Estás aprendiendo Angular 2 en DesarrolloWeb?",
    "¿Has hecho ya algún curso en EscuelaIT?"
  ]
  
  ngOnInit() {
    
  }

}
