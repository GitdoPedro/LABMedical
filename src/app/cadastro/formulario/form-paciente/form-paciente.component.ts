import { Component,OnInit,Input } from '@angular/core';
import { Paciente } from 'src/app/interfaces/Paciente';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { PacienteComponent } from '../../paciente/paciente.component';
import { FormControl, Validators } from '@angular/forms';

  
  
  @Component({
  selector: 'app-form-paciente',
  templateUrl: './form-paciente.component.html',
  styleUrls: ['./form-paciente.component.scss']
})
export class FormPacienteComponent {
  emEdicao: boolean = false;
  
  constructor(
    private localStorage: LocalStorageService
  ){}
  

  pacienteModelo: any = {
    id: '',
    nome: '',
    genero: '',
    dataNascimento: '',
    cpf: '',
    rg: '',
    estadoCivil: '',
    email: '',
    telefone: '',
    contatoEmergencia: '',
    naturalidade: '',
    alergia: '',
    cuidado: '',
    convenio: '',
    numeroCarteira: '',
    validade: '',
    cep: '',
    cidade: '',
    estado: '',
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    pontoReferencia: ''
  }
    validarDados(){
      let mensagemErro : string = "";
      if (this.pacienteModelo.nome.length < 8 || this.pacienteModelo.nome.length > 64)
      {
        mensagemErro += "Nome deve conter o mínimo de 8 caracteres e o máximo de 64 caracteres\n"
      }

      if (!this.pacienteModelo.genero)
      {
        mensagemErro += "É necessário escolher um gênero\n"
      }
      if (!this.pacienteModelo.dataNascimento || this.pacienteModelo.dataNascimento.length > 10){
        mensagemErro += "É necessário preencher uma data de nascimento válida\n"
      }
      if (this.pacienteModelo.email){
        const RegExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if(!RegExp.test(this.pacienteModelo.email)){
          this.pacienteModelo.email = ""
        }
      }
      if (this.pacienteModelo.cpf.length != 11){ //implementar um validador de cpf
        mensagemErro += "É necessário preencher um cpf válido\n"
      }
      if (this.pacienteModelo.rg.length != 9){ //implementar um validador de rg
        mensagemErro += "É necessário preencher um rg válido\n"
      }

      if (!this.pacienteModelo.estadoCivil)
      {
        mensagemErro += "É necessário escolher um estado civil\n"
      }

      if(!this.pacienteModelo.telefone || this.pacienteModelo.telefone < 11 ){
        mensagemErro += "É necessário informar um telefone válido\n"
      }

      if(!this.pacienteModelo.contatoEmergencia || this.pacienteModelo.telefone < 11 ){
        mensagemErro += "É necessário informar um telefone válido para contato de emergência\n"
      }

      if (this.pacienteModelo.naturalidade.length < 8 || this.pacienteModelo.naturalidade.length > 64)
      {
        mensagemErro += "Naturalidade deve conter o mínimo de 8 caracteres e o máximo de 64 caracteres\n"
      }

       if(!this.pacienteModelo.cep){
        mensagemErro += "É necessário informar um cep\n"
      }

      if(!this.pacienteModelo.cidade){
        mensagemErro += "É necessário informar uma cidade\n"
      }

      if(!this.pacienteModelo.estado){
        mensagemErro += "É necessário informar um estado\n"
      }
      if(!this.pacienteModelo.logradouro){
        mensagemErro += "É necessário informar um logradouro\n"
      }

      if(!this.pacienteModelo.numero){
        mensagemErro += "É necessário informar o número da residencia. Caso não exista, escrever 'Sem número'\n"
      }
      if(!this.pacienteModelo.bairro){
        mensagemErro += "É necessário informar um bairro\n"
      }

      if (mensagemErro.length > 0 ){
        alert("Não foi possível efetuar o cadastro pelos seguinte(s) motivo(s):\n" + mensagemErro)
      }else{
        this.salvarDados()
      }

      
    }

    salvarDados() {
      let paciente: Paciente;
      if (this.emEdicao) {
        paciente = this.pacienteModelo;
      } else {
        paciente = this.pacienteModelo;
        paciente.id = Date.now();
      }
      
      this.localStorage.setPaciente(paciente)
      
      
    
  }



}
