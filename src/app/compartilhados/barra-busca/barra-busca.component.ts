import { Component,EventEmitter,Input, Output } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-barra-busca',
  templateUrl: './barra-busca.component.html',
  styleUrls: ['./barra-busca.component.scss']
})
export class BarraBuscaComponent {
  @Output() resultPaciente: EventEmitter<string> = new EventEmitter<string>();

  busca = '';

  constructor(
    private localStorage: LocalStorageService
  ){}

  buscarPaciente(){
    let pacientes = this.localStorage.getPaciente()
    let pacienteFiltrado = pacientes.filter((value:any) =>{
      return  this.busca == value.id ||
        value.nome.toLowerCase().includes(this.busca) })
    if (pacienteFiltrado.length == 0){
      alert('Sua busca não encontrou resultados')
      this.resultPaciente.emit(pacienteFiltrado)
    }else{
      this.resultPaciente.emit(pacienteFiltrado)
      }
    
    }
  }


