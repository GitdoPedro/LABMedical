import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-estatistica',
  templateUrl: './estatistica.component.html',
  styleUrls: ['./estatistica.component.scss']
})
export class EstatisticaComponent {

  listaEstatistica = [
    'Pacientes',
    'Consultas',
    'Exames'
  ]

  contador = [0,0,0]
  
  constructor(
    private localStorage: LocalStorageService
  ){}

  ngOnInit(){
    
    this.contador[0] = this.localStorage.getPaciente().length
    this.contador[1] = this.localStorage.getConsulta().length
    this.contador[2] = this.localStorage.getExame().length
  }

}
