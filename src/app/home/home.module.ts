import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Module Routing
import { RoutingModule } from './routing.module';


// modules
import { CompartilhadosModule } from '../compartilhados/compartilhados.module';
import { CadastroModule } from '../cadastro/cadastro.module';
import { ProntuarioModule } from '../prontuario/prontuario.module';

//Paginas iniciais
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { EstatisticaComponent } from './inicio/estatistica/estatistica.component';
import { CardPacienteComponent } from './inicio/card-paciente/card-paciente.component';

@NgModule({
  declarations: [
    LoginComponent,
    InicioComponent,
    EstatisticaComponent,
    CardPacienteComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    CompartilhadosModule,
    CadastroModule,
    ProntuarioModule
  ],
  exports:[
    InicioComponent,
    LoginComponent
  ],
})
export class HomeModule { }
