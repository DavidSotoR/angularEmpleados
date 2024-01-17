import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import axios from 'axios';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor() { }

  async getAllEmpleados(){
    var resp = await axios.get<Empleado[]>('http://localhost:3000/empleados')

    return resp;
  }

  async postCreateEmpleado(empleado: any){
    var resp = await axios.post('http://localhost:3000/crear/empleado', empleado)
    console.log(resp);
    
  }
}
