import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UseServicePedidosService {

  private urlApi = 'https://129bc152-6319-4e38-b755-534a4ee46195.mock.pstmn.io/orders';
  constructor(private http: HttpClient) { }

  public getDatos(status: string = ''): Observable<any> {
    const urlStatus = `${this.urlApi}/${status}`;
    return this.http.get<any>(urlStatus);
  }

  public getDetails(idorden: string = ''): Observable<any> {
    const urlDetails = `${this.urlApi}/?id=${idorden}`;
    return this.http.get<any>(urlDetails);
  }
}
