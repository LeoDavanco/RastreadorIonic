import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { CorreioService } from 'src/app/services/correio.service';

@Component({
  selector: 'app-rastreador',
  templateUrl: './rastreador.page.html',
  styleUrls: ['./rastreador.page.scss'],
})
export class RastreadorPage implements OnInit {
  public folder: string;
  correio : any = {};
  eventosCollection : any[] = [];
  constructor(private correioService : CorreioService, private toastCtrl : ToastController) { }
  
  ngOnInit(){
  }

  localizarObjeto(evento){
    let codigoObjeto: string = evento.detail.value;

    if(codigoObjeto.length<3){
      return;
    }

    this.correioService.localizarObjeto(codigoObjeto)

    .then(response=>{
      let correio: any = response;

      this.eventosCollection = correio.objetos[0].eventos;

      if(this.eventosCollection==undefined){
        this.enviarToast('Objeto não encontrado.');
        return;
      }
    })
    .catch(erro=>{
      this.enviarToast('Objeto não encontrado.');
      //this.enviarAlert('Objeto não encontrado.');
    });
  }

  async enviarToast(mensagem: string){
    const toast = await this.toastCtrl.create({
      message: mensagem,
      duration: 3000,
      color :'primary'
    });
    toast.present();
  }


}
