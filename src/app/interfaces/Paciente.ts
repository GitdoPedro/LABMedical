import { Data } from "@angular/router";

export interface Paciente{
    id                    : number;
    nome                  : string;
    genero                : string;
    dataNascimento        : string;
    cpf                   : string;
    rg                    : string;
    estadoCivil           : string;
    telefone              : string;
    contatoEmergencia     : string;
    email                 : string;
    naturalidade          : string;
    alergia               : string;
    cuidado               : string;
    convenio              : string;
    numeroCarteira        : string;
    validade              : string;
    cep                   : string;
    cidade                : string;
    estado                : string;
    logradouro            : string;
    numero                : string;
    complemento           : string;
    bairro                : string;
    pontoReferencia       : string
}