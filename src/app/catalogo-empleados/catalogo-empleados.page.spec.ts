import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatalogoEmpleadosPage } from './catalogo-empleados.page';

describe('CatalogoEmpleadosPage', () => {
  let component: CatalogoEmpleadosPage;
  let fixture: ComponentFixture<CatalogoEmpleadosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CatalogoEmpleadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
