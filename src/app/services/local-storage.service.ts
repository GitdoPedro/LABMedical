import { Paciente } from '../interfaces/Paciente'
import { Consulta } from '../interfaces/consulta'
import { Exame } from '../interfaces/exame'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  CHAVE_PACIENTE: string = 'pacientes';
  CHAVE_CONSULTA: string = 'consultas';
  CHAVE_EXAME   : string = 'exames';

  pacienteList: Paciente [] = []
  consultaList: Consulta [] = []
  exameList   : Exame    [] = []
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

  getExame(){
    let exameList = localStorage.getItem(this.CHAVE_EXAME);
    return exameList ? JSON.parse(exameList) : []

  }

  setExame(exame: any) {
    this.exameList = this.getConsulta();
    this.exameList.push(exame);
    localStorage.setItem(
      this.CHAVE_EXAME, JSON.stringify(this.exameList)
    );
    alert('exame cadastrado com sucesso!');
  }
}
