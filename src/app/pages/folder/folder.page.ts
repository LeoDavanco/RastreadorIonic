import { Component, OnInit } from '@angular/core';
import { CorreioService } from 'src/app/services/correio.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  correio : any = {};
  eventosCollection: any[] = [];
  constructor(private correioService : CorreioService) { }
  
  ngOnInit(){
  }

  localizarObjeto(evento){
    let codigoObjeto = evento.detail.value;

    this.correioService.localizarObjeto(codigoObjeto)
    .then(response=>{
      let correio :any = response;
      this.eventosCollection = correio.objetos[0].eventos;
      console.log(this.eventosCollection);
    }).catch(erro=>{console.log(erro)});
  }

}
