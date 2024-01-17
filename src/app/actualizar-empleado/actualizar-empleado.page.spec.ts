import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActualizarEmpleadoPage } from './actualizar-empleado.page';

describe('ActualizarEmpleadoPage', () => {
  let component: ActualizarEmpleadoPage;
  let fixture: ComponentFixture<ActualizarEmpleadoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ActualizarEmpleadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
