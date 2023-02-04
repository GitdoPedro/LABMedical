import { Component,Input } from '@angular/core';
import { Exame } from 'src/app/interfaces/exame';
import { LocalStorageService } from 'src/app/services/local-storage.service';


@Component({
  selector: 'app-form-exame',
  templateUrl: './form-exame.component.html',
  styleUrls: ['./form-exame.component.scss']
})
export class FormExameComponent {
  emEdicao: boolean = false;
  @Input() pacienteId: Number = 0


  constructor(
    private localStorage: LocalStorageService
  ){}

  ExameModelo: any = {
    id: '',
    idPaciente: '',
    nomeExame: '',
    dataExame: '',
    horaExame: '',
    tipoExame: '',
    laboratorio: '',
    URLDocumentoExame: '',
    resultadoExame: ''
  }

  ngOnChanges(){
    console.log(this.pacienteId)
  }



  validarDados(){
    let mensagemErro : string = "";
    if (this.ExameModelo.nomeExame.length < 8 || this.ExameModelo.nomeExame.length > 64)
    {
      mensagemErro += "O campo nome do exame é obrigatório e deve conter o mínimo de 8 caracteres e o máximo de 64 caracteres\n"
    }

    if (!this.ExameModelo.dataExame || this.ExameModelo.dataExame.length > 10){
      mensagemErro += "É necessário preencher uma data de consulta válida\n"
    }

    if (!this.ExameModelo.horaExame || this.ExameModelo.horaExame.length > 5){
      mensagemErro += "É necessário preencher um horário válido\n"
    }

    if (this.ExameModelo.tipoExame.length < 4 || this.ExameModelo.tipoExame.length > 32)
    {
      mensagemErro += "O campo tipo do exame é obrigatório e deve conter o mínimo de 4 caracteres e o máximo de 32 caracteres\n"
    }

    if (this.ExameModelo.laboratorio.length < 4 || this.ExameModelo.laboratorio.length > 32)
    {
      mensagemErro += "O campo laboratorio é obrigatório e deve conter o mínimo de 4 caracteres e o máximo de 32 caracteres\n"
    }

    if (this.ExameModelo.resultadoExame.length < 16 || this.ExameModelo.resultadoExame.length > 1024 )
    {
      mensagemErro += "O campo resultado do exame é obrigatório e deve conter o mínimo de 16 caracteres e o máximo de 1024 caracteres\n"
    }



    if (mensagemErro.length > 0 ){
      alert("Não foi possível efetuar o cadastro pelos seguinte(s) motivo(s):\n" + mensagemErro)
    }else{
      this.salvarDados()
    }

    
  }

  salvarDados() {
    let exame: Exame;
    if (this.emEdicao) {
      exame = this.ExameModelo;
    } else {
      exame = this.ExameModelo;
      exame.id = Date.now();
      exame.idPaciente = this.pacienteId
    }
    
    this.localStorage.setExame(exame)
       
}
}