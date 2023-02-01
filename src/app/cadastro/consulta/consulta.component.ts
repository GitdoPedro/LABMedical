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
  pacienteId: any
  nomePaciente: any 

  constructor(
    private localStorage: LocalStorageService
  ){}
 
  PacientesBuscados(resultado: any){
    
    
    this.listaResultado  = resultado
    
 
  }

  recebeuPaciente(pacienteRecebido: any){
    if(pacienteRecebido){
      this.pacienteId = pacienteRecebido
      let pacienteProvisorio  = this.localStorage.getPaciente()
      this.nomePaciente = Object.entries(this.localStorage.getPaciente()).find((item: any) => item[1].id === this.pacienteId)
      console.log(this.pacienteId)
      console.log(pacienteProvisorio[1])
     
      
    }else{
      alert('Escolha um paciente')
    }
    
    

  }

  

}
