import { Component } from '@angular/core';
import { NuevoComponenteComponent } from './nuevo-componente/nuevo-componente.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
  
  
})
export class AppComponent {
  title = 'proyecto-angularrr';
  visible = false;
  decirAdios() {
    this.visible = true;
  }
}
