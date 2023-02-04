import { Paciente } from '../interfaces/Paciente'
import { Consulta } from '../interfaces/consulta'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  CHAVE_PACIENTE: string = 'pacientes';
  CHAVE_CONSULTA: string = 'consultas';

  pacienteList: Paciente [] = []
  consultaList: Consulta [] = []
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

  getConsulta(){
    let consultaList = localStorage.getItem(this.CHAVE_CONSULTA);
    return consultaList ? JSON.parse(consultaList) : []

  }

  setConsulta(consulta: any) {
    this.consultaList = this.getConsulta();
    this.consultaList.push(consulta);
    localStorage.setItem(
      this.CHAVE_CONSULTA, JSON.stringify(this.consultaList)
    );
    alert('consulta cadastrada com sucesso!');
  }
}
