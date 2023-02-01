import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ContainerComponent } from './container/container.component';
import { BarraBuscaComponent } from './barra-busca/barra-busca.component';
import { FormsModule } from '@angular/forms';
import { EscolhePacienteComponent } from './escolhe-paciente/escolhe-paciente.component';



@NgModule({
  declarations: [
    MenuLateralComponent,
    ToolbarComponent,
    ContainerComponent,
    BarraBuscaComponent,
    EscolhePacienteComponent
  ],
  exports:[
    MenuLateralComponent,
    ToolbarComponent,
    ContainerComponent,
    BarraBuscaComponent,
    EscolhePacienteComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CompartilhadosModule { }
