import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//components
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { PacienteComponent } from '../cadastro/paciente/paciente.component';
import { ExameComponent } from '../cadastro/exame/exame.component';
import { ConsultaComponent } from '../cadastro/consulta/consulta.component';

const routes: Routes = [

  {
    path: '',
    component: InicioComponent
   },
  {
   path: 'login',
   component: LoginComponent
  },
  {
    path: 'inicio',
    component: InicioComponent
   },

   {
    path: 'paciente',
    component: PacienteComponent
   },

   {
    path: 'exame',
    component: ExameComponent
   },

   {
    path: 'consulta',
    component: ConsultaComponent
   },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
