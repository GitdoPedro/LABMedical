import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';


//modules
import { CompartilhadosModule } from '../compartilhados/compartilhados.module';

//components
import { PacienteComponent } from './paciente/paciente.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { ExameComponent } from './exame/exame.component';
import { FormPacienteComponent } from './formulario/form-paciente/form-paciente.component';
import { FormsModule } from '@angular/forms';



const routes: Routes = [
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
   }
];



@NgModule({
  declarations: [
    PacienteComponent,
    ConsultaComponent,
    ExameComponent,
    FormPacienteComponent
  ],
  exports:[
    ConsultaComponent,
    ExameComponent,
    PacienteComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CompartilhadosModule,
    FormsModule
    
  ]
})
export class CadastroModule { }
