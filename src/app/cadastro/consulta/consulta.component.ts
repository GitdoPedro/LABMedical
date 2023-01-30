import { Component, Input } from '@angular/core';
import { Paciente } from 'src/app/interfaces/Paciente';
import { PacienteComponent } from '../paciente/paciente.component';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent {
  titulo          = 'CADASTRO DE CONSULTA'
  tituloContainer = 'Encontre o paciente'
  existeResultado = false
  listaResultado  :any
  

 
  PacientesBuscados(resultado: any){
    
    let listaResultados = Object.entries(resultado)
    this.listaResultado = listaResultados
   
    console.log( this.listaResultado )
    return(this.listaResultado)
    

  }

  
  

}
