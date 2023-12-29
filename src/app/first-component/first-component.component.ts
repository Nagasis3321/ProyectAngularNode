import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.scss'
})
export class FirstComponentComponent  {
  equipo={
    nombreEquipo:'', 
    teamViewer:0
  };
  
  fechaIngreso:string='';
  fechaEgreso:string='';
  sector:string='';
  gerencia:string='';
  solicitante:string='';
  telefono:String='';
  detalleDelngreso:string='';
  numeroOrdenReclamo:string='';
}
