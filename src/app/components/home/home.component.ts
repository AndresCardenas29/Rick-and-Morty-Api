import { Component, OnInit } from '@angular/core';
import { RickandmortyService } from 'src/app/services/rickandmorty.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  arrDatos:any = [];

  constructor(
    private api:RickandmortyService
  ) { }

  ngOnInit(): void {
    this.cargaData();
  }

  public cargaData(){
    this.api.get('https://rickandmortyapi.com/api/character/?page=2').subscribe(datos => {
      this.arrDatos = datos;
    });
  }

  public estado(estatus:string){

    switch (estatus) {
      case 'unknown' || 'Unknown':
        return 'Desconocido';

      case 'Alive' || 'alive':
        return 'Con vida';

      case 'Dead' || 'dead':
        return 'Muerto';
    
      default:
        return estatus;
    }

  }

}
