import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatalogoCargosPage } from './catalogo-cargos.page';

describe('CatalogoCargosPage', () => {
  let component: CatalogoCargosPage;
  let fixture: ComponentFixture<CatalogoCargosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CatalogoCargosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
