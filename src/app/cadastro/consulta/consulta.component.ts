import { Component, Input } from '@angular/core';
import { Paciente } from 'src/app/interfaces/Paciente';
import { PacienteComponent } from '../paciente/paciente.component';
import { LocalStorageService } from 'src/app/services/local-storage.service';


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
  pacienteId: Number = 0
  nomePaciente: any 
  

  constructor(
    private localStorage: LocalStorageService
  ){}
 
  PacientesBuscados(resultado: any){
    
    
    this.listaResultado  = resultado
    this.existeResultado = false
    this.tituloContainer = 'Encontre o paciente'
 
  }

  recebeuPaciente(pacienteRecebido: any){
    if(pacienteRecebido){
      this.pacienteId = Number(pacienteRecebido)
      let pacienteProvisorio  = this.localStorage.getPaciente()
      this.nomePaciente = pacienteProvisorio.find((item: Paciente)  => item.id === this.pacienteId)
      this.existeResultado = true
      this.tituloContainer = this.nomePaciente.nome
      
     
      
    }else{
      alert('Escolha um paciente')
    }
    
    

  }

  

}
