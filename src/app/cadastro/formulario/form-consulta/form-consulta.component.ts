import { Component,Input } from '@angular/core';
import { Consulta } from 'src/app/interfaces/consulta';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-form-consulta',
  templateUrl: './form-consulta.component.html',
  styleUrls: ['./form-consulta.component.scss']
})
export class FormConsultaComponent {
  emEdicao: boolean = false;
  @Input() pacienteId: Number = 0


  constructor(
    private localStorage: LocalStorageService
  ){}

  consultaModelo: any = {
    id: '',
    idPaciente: '',
    motivoConsulta: '',
    dataConsulta: '',
    horaConsulta: '',
    descricaoProblema: '',
    medicacaoReceita: '',
    dosagemPrecaucoes: ''
  }

  ngOnChanges(){
    console.log(this.pacienteId)
  }



  validarDados(){
    let mensagemErro : string = "";
    if (this.consultaModelo.motivoConsulta.length < 8 || this.consultaModelo.motivoConsulta.length > 64)
    {
      mensagemErro += "O campo motivo da consulta é obrigatório e deve conter o mínimo de 8 caracteres e o máximo de 64 caracteres\n"
    }

    if (!this.consultaModelo.dataConsulta || this.consultaModelo.dataConsulta.length > 10){
      mensagemErro += "É necessário preencher uma data de consulta válida\n"
    }

    if (!this.consultaModelo.horaConsulta || this.consultaModelo.horaConsulta.length > 5){
      mensagemErro += "É necessário preencher um horário válido\n"
    }
    if (this.consultaModelo.descricaoProblema.length < 16 || this.consultaModelo.descricaoProblema.length > 1024)
    {
      mensagemErro += "O campo descrição do problema é obrigatório e deve conter o mínimo de 16 caracteres e o máximo de 1024 caracteres\n"
    }

    if (this.consultaModelo.dosagemPrecaucoes.length < 16 || this.consultaModelo.dosagemPrecaucoes.length > 256)
    {
      mensagemErro += "O campo dosagem e precauções é obrigatório e deve conter o mínimo de 16 caracteres e o máximo de 256 caracteres\n"
      
    }    
    if (mensagemErro.length > 0 ){
      alert("Não foi possível efetuar o cadastro pelos seguinte(s) motivo(s):\n" + mensagemErro)
    }else{
      this.salvarDados()
    }

    
  }

  salvarDados() {
    let consulta: Consulta;
    if (this.emEdicao) {
      consulta = this.consultaModelo;
    } else {
      consulta = this.consultaModelo;
      consulta.id = Date.now();
      consulta.idPaciente = this.pacienteId
    }
    
    this.localStorage.setConsulta(consulta)
       
}
}