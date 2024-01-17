import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-actualizar-empleado',
  templateUrl: './actualizar-empleado.page.html',
  styleUrls: ['./actualizar-empleado.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ActualizarEmpleadoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
