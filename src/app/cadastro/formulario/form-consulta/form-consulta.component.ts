import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-form-consulta',
  templateUrl: './form-consulta.component.html',
  styleUrls: ['./form-consulta.component.scss']
})
export class FormConsultaComponent {
  @Input() resultadoBusca: any = ''

}
