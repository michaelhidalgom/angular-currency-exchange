import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface ExchangeRequest {
  monto: number;
  monedaOrigen: string;
  monedaDestino: string;
}

export interface ExchangeResponse {
  monto: number;
  montoCambio: number;
  monedaOrigen: string;
  monedaDestino: string;
  tipoCambio: number;
}

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  processExchange(request: ExchangeRequest): Observable<ExchangeResponse> {
    return this.http.post<ExchangeResponse>(`${this.apiUrl}/intercambios/procesa`, request);
  }

  getExchangeHistory(): Observable<ExchangeResponse[]> {
    return this.http.get<ExchangeResponse[]>(`${this.apiUrl}/intercambios`);
  }
}
