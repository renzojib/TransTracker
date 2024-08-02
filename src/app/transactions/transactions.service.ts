import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ITransaction } from './transaction.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private http: HttpClient) { }

  getTransactions (): Observable<ITransaction[]> {
    return this.http.get<ITransaction[]>("/#/transactions");
  }
}
