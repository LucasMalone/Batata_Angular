import { Component } from '@angular/core';

@Component({
  selector: 'app-terceiro-componente',
  standalone: true,
  imports: [],
  templateUrl: './terceiro-componente.component.html',
  styleUrl: './terceiro-componente.component.css'
})
export class TerceiroComponenteComponent {

  nome:string='ralf';
  idade:number=34;
  

}
