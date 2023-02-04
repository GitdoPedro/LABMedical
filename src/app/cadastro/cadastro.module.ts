import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

//modules
import { CompartilhadosModule } from '../compartilhados/compartilhados.module';

//components
import { PacienteComponent } from './paciente/paciente.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { ExameComponent } from './exame/exame.component';
import { FormPacienteComponent } from './formulario/form-paciente/form-paciente.component';
import { BarraBuscaComponent } from '../compartilhados/barra-busca/barra-busca.component';
import { FormConsultaComponent } from './formulario/form-consulta/form-consulta.component';
import { EscolhePacienteComponent} from '../compartilhados/escolhe-paciente/escolhe-paciente.component';
import { FormExameComponent } from './formulario/form-exame/form-exame.component';



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
        FormPacienteComponent,
        FormConsultaComponent,
        FormExameComponent
    ],
    exports: [
        ConsultaComponent,
        ExameComponent,
        PacienteComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        CompartilhadosModule,
        FormsModule,
        
    ]
})
export class CadastroModule { }
