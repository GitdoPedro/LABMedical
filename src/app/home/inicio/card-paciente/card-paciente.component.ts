import { Component,Output,EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-card-paciente',
  templateUrl: './card-paciente.component.html',
  styleUrls: ['./card-paciente.component.scss']
})
export class CardPacienteComponent {

  
  listaResultado  :any
  @Output() pacienteEscolhido: EventEmitter<any> = new EventEmitter<any>();
  @Input() resultado = []



  ngOnChanges(){
    this.listaResultado = Object.entries(this.resultado)
    console.log(this.resultado[0])

}
}