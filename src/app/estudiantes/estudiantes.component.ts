import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {
    titulo:string="lsita de estudiantes-2";
    prueba:string='Esto es una prueba de mi componente';
    
  constructor() { }

  ngOnInit(): void {
  }

}
