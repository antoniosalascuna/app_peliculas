import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL_API = 'https://imdb-internet-movie-database-unofficial.p.rapidapi.com';
const query = 'search';
const pelicula = 'inception';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private httpclient: HttpClient) { }

  identificardo: any;
  obtenerdatos(nombrepeli: string): Observable<any>
  {
    const headers = new HttpHeaders({
      'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com',
      'x-rapidapi-key': 'd297aa9a66mshac800320792a1ebp1257ebjsn3b00ccf4b618'
    });

    return this.httpclient.get(`${BASE_URL_API}/${query}/${nombrepeli}`, { headers });
  }

  datosdetallados(id: string): Observable<any>
  {
    const headers = new HttpHeaders({
      'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com',
      'x-rapidapi-key': 'd297aa9a66mshac800320792a1ebp1257ebjsn3b00ccf4b618'
    });

    return this.httpclient.get(`${BASE_URL_API}/film/${id}`, { headers });
  }

  setid(id: any)
  {
    this.identificardo = id;
  }

  getid(){
    return this.identificardo;
  }
}
