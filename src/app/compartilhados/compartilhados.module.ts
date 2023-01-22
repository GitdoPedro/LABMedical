import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { ToolbarComponent } from './toolbar/toolbar.component';



@NgModule({
  declarations: [
    MenuLateralComponent,
    ToolbarComponent
  ],
  exports:[
    MenuLateralComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CompartilhadosModule { }
