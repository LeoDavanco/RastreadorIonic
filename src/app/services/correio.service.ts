import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CorreioService {

  constructor(private http : HttpClient) { }

  localizarObjeto(codigoObjeto : string){
    let url = 'http://cors-anywhere.herokuapp.com/https://proxyapp.correios.com.br/v1/sro-rastro/NX598805383BR' + codigoObjeto;

    var header = {
    headers : new HttpHeaders()
      .set('Content-Type', 'application/json')
  }

  return this.http.get(url, header).toPromise();
}
}
