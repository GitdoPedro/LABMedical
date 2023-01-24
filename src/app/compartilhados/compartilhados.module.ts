import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ContainerComponent } from './container/container.component';



@NgModule({
  declarations: [
    MenuLateralComponent,
    ToolbarComponent,
    ContainerComponent
  ],
  exports:[
    MenuLateralComponent,
    ToolbarComponent,
    ContainerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CompartilhadosModule { }
