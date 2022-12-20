import { Component, OnInit } from '@angular/core';

interface PreguntasInterface {
  pregunta: string;
  si: number;
  no: number;
}

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

  // preguntasObj = [
  //   {
  //     pregunta: "¿España ganará la Euro 2016?",
  //     si: 22,
  //     no: 95
  //   },
  //   {
  //     pregunta: "¿Estás aprendiendo Angular 2 en DesarrolloWeb??",
  //     si: 262,
  //     no: 3
  //   },
  //   {
  //     pregunta: "¿Has hecho ya algún curso en EscuelaIT??",
  //     si: 1026,
  //     no: 1
  //   }
  // ]

  preguntasObj: PreguntasInterface[] = [
    {
      pregunta: "¿Te gusta usar interfaces?",
      si: 72,
      no:6
    }
  ]

  

  
  
  ngOnInit() {
    
  }

}


