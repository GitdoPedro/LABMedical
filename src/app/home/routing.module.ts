import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//components
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [

  {
    path: '',
    component: LoginComponent
   },
  {
   path: 'login',
   component: LoginComponent
  },
  {
    path: 'inicio',
    component: InicioComponent
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
