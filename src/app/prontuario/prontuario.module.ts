import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemProntuarioComponent } from './listagem-prontuario/listagem-prontuario.component';
import { ProntuarioPacienteComponent } from './prontuario-paciente/prontuario-paciente.component';



@NgModule({
  declarations: [
    ListagemProntuarioComponent,
    ProntuarioPacienteComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ListagemProntuarioComponent,
    ProntuarioPacienteComponent

  ]
})
export class ProntuarioModule { }
