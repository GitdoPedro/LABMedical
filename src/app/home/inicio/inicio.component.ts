import { Component } from '@angular/core';
import { Paciente } from 'src/app/interfaces/Paciente';
import { LocalStorageService } from 'src/app/services/local-storage.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
  titulo          = 'ESTATÍSTICAS E INFORMAÇÕES'
  tituloContainer = 'Estatísticas do Sistema'
  listaResultado  :any
  pacienteId: Number = 0
  nomePaciente: any 

  
  constructor(
    private localStorage: LocalStorageService
  ){}
 

  PacientesBuscados(resultado: any){
    
    
    this.listaResultado  = resultado
  }

  recebeuPaciente(pacienteRecebido: any){
    if(pacienteRecebido){
      this.pacienteId = Number(pacienteRecebido)
      let pacienteProvisorio  = this.localStorage.getPaciente()
      this.nomePaciente = pacienteProvisorio.find((item: Paciente)  => item.id === this.pacienteId)
      this.tituloContainer = this.nomePaciente.nome
         
      
    }


}
}
