import { Component,Input } from '@angular/core';

@Component({ 
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Input() titulo: string = 'PÁGINA DE TESTE';
  @Input() user: string = 'admin';

}
