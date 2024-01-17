import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearEmpleadoPage } from './crear-empleado.page';

describe('CrearEmpleadoPage', () => {
  let component: CrearEmpleadoPage;
  let fixture: ComponentFixture<CrearEmpleadoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrearEmpleadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
