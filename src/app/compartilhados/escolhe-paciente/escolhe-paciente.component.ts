import { Component,Output,EventEmitter,Input,OnChanges } from '@angular/core';

@Component({
  selector: 'app-escolhe-paciente',
  templateUrl: './escolhe-paciente.component.html',
  styleUrls: ['./escolhe-paciente.component.scss']
})
export class EscolhePacienteComponent {
  pacienteId : any;
  listaResultado  :any
  @Output() pacienteEscolhido: EventEmitter<any> = new EventEmitter<any>();
  @Input() resultado = []


  ngOnInit(){

  }

  cadastrarConsulta(){
    this.pacienteId?this.pacienteEscolhido.emit(this.pacienteId):this.pacienteEscolhido.emit(this.pacienteId)

    
  }

  ngOnChanges(){
    this.listaResultado = Object.entries(this.resultado)
   /*  console.log(this.listaResultado[1][1].nome) 
 */
  }


}
