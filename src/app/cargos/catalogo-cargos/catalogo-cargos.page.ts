import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

interface Cargo{
  id: number,
  descripcion: string,
}

@Component({
  selector: 'app-catalogo-cargos',
  templateUrl: './catalogo-cargos.page.html',
  styleUrls: ['./catalogo-cargos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CatalogoCargosPage implements OnInit {
  ALLCARGOS: Cargo[] = [
    {id: 1, descripcion: "Gerente"},
    {id: 2, descripcion: "Coordinador"},
    {id: 3, descripcion: "Subdirector"},
  ] 
  constructor() { }

  ngOnInit() {
  }

}
