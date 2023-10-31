import { Injectable } from '@angular/core';
import { Marque, Pays } from './model/marque.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MarqueService {
  [x: string]: any;
  apiURL: string = 'http://localhost:8080/marques/api';
  apiURLPay: string = 'http://localhost:8080/marques/pay';

  constructor(private http: HttpClient) {}

  listeMarques(): Observable<Marque[]> {
    return this.http.get<Marque[]>(this.apiURL);
  }

  ajouterMarque(marque: Marque): Observable<Marque> {
    return this.http.post<Marque>(this.apiURL, marque, httpOptions);
    
  }

  supprimerMarque(id: number): Observable<any> {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consulterMarque(id: number): Observable<Marque> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Marque>(url);
  }

  trierMarquesNomsPrix(): Observable<Marque[]> {
    const url = `${this.apiURL}/trierMarquesNomsPrix`;
    return this.http.get<Marque[]>(url);
  }
  listePays():Observable<Pays[]>{
    return this.http.get<Pays[]>(this.apiURL+"/pay");
    }
    updateMarque(marque :Marque) : Observable<Marque>
    {
        return this.http.put<Marque>(this.apiURL, marque, httpOptions);
    }
    rechercherParPays(idPays: number):Observable< Marque[]> {
      const url = `${this.apiURL}/marquespays/${idPays}`;
      return this.http.get<Marque[]>(url);
      }
      rechercherParNom(nom: string):Observable< Marque[]> {
        const url = `${this.apiURL}/marByName/${nom}`;
        return this.http.get<Marque[]>(url);
        }
      
}
