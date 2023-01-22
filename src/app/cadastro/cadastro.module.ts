import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { PacienteComponent } from './paciente/paciente.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { ExameComponent } from './exame/exame.component';



@NgModule({
  declarations: [
    PacienteComponent,
    ConsultaComponent,
    ExameComponent
  ],
  exports:[
    ConsultaComponent,
    ExameComponent,
    PacienteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CadastroModule { }
