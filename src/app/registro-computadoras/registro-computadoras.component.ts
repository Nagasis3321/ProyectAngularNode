// registro-computadoras.component.ts
// registro-computadoras.component.ts
import { Component, EventEmitter, OnInit } from '@angular/core';


@Component({
  selector: 'app-registro-computadoras',
  templateUrl: './registro-computadoras.component.html',
  styleUrls: ['./registro-computadoras.component.scss'],
  standalone: true
})

export class RegistroComputadorasComponent implements OnInit{
  ngOnInit(){

  }
  nombre: string = '';
  
}
