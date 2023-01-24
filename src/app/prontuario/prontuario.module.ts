import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//modules
import { CompartilhadosModule } from '../compartilhados/compartilhados.module';


//components
import { ListagemProntuarioComponent } from './listagem-prontuario/listagem-prontuario.component';
import { ProntuarioPacienteComponent } from './prontuario-paciente/prontuario-paciente.component';




const routes: Routes = [
  {
   path: 'listagem-prontuario',
   component: ListagemProntuarioComponent
  },
  {
    path: 'prontuario-paciente',
    component: ProntuarioPacienteComponent
   }
];



@NgModule({
  declarations: [
    ListagemProntuarioComponent,
    ProntuarioPacienteComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CompartilhadosModule,]
  ,
  exports:[
    ListagemProntuarioComponent,
    ProntuarioPacienteComponent

  ]
})
export class ProntuarioModule { }
