import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: ()=>import('./main/main.page').then(m=>m.MainPage) },
  {
    path: 'catalogo-empleados',
    loadComponent: () => import('./catalogo-empleados/catalogo-empleados.page').then( m => m.CatalogoEmpleadosPage)
  },
  {
    path: 'crear-empleado',
    loadComponent: () => import('./crear-empleado/crear-empleado.page').then( m => m.CrearEmpleadoPage)
  },
  {
    path: 'actualizar-empleado',
    loadComponent: () => import('./actualizar-empleado/actualizar-empleado.page').then( m => m.ActualizarEmpleadoPage)
  },
  {
    path: 'catalogo-cargos',
    loadComponent: () => import('./cargos/catalogo-cargos/catalogo-cargos.page').then( m => m.CatalogoCargosPage)
  }

];
