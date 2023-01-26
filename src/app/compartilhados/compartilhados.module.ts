import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ContainerComponent } from './container/container.component';
import { BarraBuscaComponent } from './barra-busca/barra-busca.component';



@NgModule({
  declarations: [
    MenuLateralComponent,
    ToolbarComponent,
    ContainerComponent,
    BarraBuscaComponent
  ],
  exports:[
    MenuLateralComponent,
    ToolbarComponent,
    ContainerComponent,
    BarraBuscaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CompartilhadosModule { }
