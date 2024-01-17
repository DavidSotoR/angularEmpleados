import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EmpleadosService } from '../services/empleados.service';
import { Empleado } from '../models/empleado';

@Component({
  selector: 'app-catalogo-empleados',
  templateUrl: './catalogo-empleados.page.html',
  styleUrls: ['./catalogo-empleados.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CatalogoEmpleadosPage implements OnInit {
  EMPLEADOS = [
    { id: 1, name: 'David' , puesto: "Jefe"},
    { id: 2, name: 'Juan' , puesto: "Supervisor"}
  ]
  empleadosService = new EmpleadosService()
  dataList: Empleado[] = []
  constructor() { }

  async ngOnInit() {
    let response = await this.empleadosService.getAllEmpleados()
    if (response && response.data) {
      this.dataList = response.data;
    } else {
      // Manejar el caso en el que no hay datos
      this.dataList = [];
    }
  }

}
