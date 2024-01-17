import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';
import { EmpleadosService } from '../services/empleados.service';

interface Empleado {
  nombre: string | null;
  edad: number | null;
  fecha_nacimiento?: Date;
  estatus: boolean | null;
  cargo: string | null;
}

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.page.html',
  styleUrls: ['./crear-empleado.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class CrearEmpleadoPage implements OnInit {
  inputNombreControl = new FormControl('', [Validators.required, Validators.minLength(3)]);
  inputEdadControl = new FormControl('', [Validators.required, Validators.min(18)]);
  inputFNControl = new FormControl();
  inputEstatusControl = new FormControl(false, [Validators.required]);
  inputCargoControl = new FormControl('', [Validators.required]);
  maxDate = ''

  serviceEmpleados = new EmpleadosService()

  constructor(private toastController: ToastController) { 
    const fechaMenos18 = new Date();
    fechaMenos18.setFullYear(fechaMenos18.getFullYear() - 18);
    this.maxDate = fechaMenos18.toISOString()
    this.inputFNControl = new FormControl(fechaMenos18.toISOString());
  }

  ngOnInit() {
  }

  getValuesNewEmpleado () {
    let messageError:  string[] = []; 
    if (this.inputNombreControl.hasError('required')) {
      messageError.push("El nombre es requerido") 
    }

    if (this.inputNombreControl.hasError('minlength')) {
      messageError.push("El nombre debe tener al menos 3 caracteres.") 
    }

    if (this.inputEdadControl.hasError('required')) {
      messageError.push('El valor de edad es requerido.')
    }
    if (this.inputEdadControl.hasError('min')) {
      messageError.push('La edad minima es 18 años.')
    }
    if (this.inputEstatusControl.hasError('required')) {
      messageError.push('El estatus es obligatorio.')
    }

    if (this.inputCargoControl.hasError('required')) {
      messageError.push('El cargo es obligatorio.')
    }
    if (messageError.length != 0) {
      messageError.forEach((message)=>{
        this.showErrorToast(message)
        console.log(message);
        
      })
    } else {
      let empleado: Empleado = {
        nombre: this.inputNombreControl.value,
        edad: Number(this.inputEdadControl.value),
        fecha_nacimiento: this.inputFNControl.value,
        estatus: this.inputEstatusControl.value,
        cargo: this.inputCargoControl.value,
      };

      this.serviceEmpleados.postCreateEmpleado(empleado)

      this.inputNombreControl.setValue('')
      this.inputFNControl.setValue('')
      this.inputCargoControl.setValue('')
    }
    
  }

  async showErrorToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2500,
      position: 'bottom',
      color: 'danger'
    });

    await toast.present();
  }

  async showCompleteToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2500,
      position: 'bottom',
      color: 'success'
    });

    await toast.present();
  }

}
