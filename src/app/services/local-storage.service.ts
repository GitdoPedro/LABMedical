import { Paciente } from '../interfaces/Paciente'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  CHAVE_PACIENTE: string = 'pacientes';

  pacienteList: Paciente [] = []
  constructor() { }

  getPaciente(){
    let pacienteList = localStorage.getItem(this.CHAVE_PACIENTE);
    return pacienteList ? JSON.parse(pacienteList) : []

  }

  setPaciente(paciente: any) {
    this.pacienteList = this.getPaciente();
    this.pacienteList.push(paciente);
    localStorage.setItem(
      this.CHAVE_PACIENTE, JSON.stringify(this.pacienteList)
    );
    alert('Usuário cadastrado com sucesso!');
  }
}
