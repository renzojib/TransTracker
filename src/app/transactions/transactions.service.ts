import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ITransaction } from './transaction.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  transactions: ITransaction[] = [];

  constructor(private http: HttpClient) { 
    this.http.get<ITransaction[]>("/api/transactions").subscribe((data) => {
      this.transactions = data;
    })
  }

  getTransactions (): Observable<ITransaction[]> {
    return this.http.get<ITransaction[]>("/api/transactions");
  }

  addNoteToTransaction(transaction: ITransaction) {
    this.http.post<ITransaction>("/api/note", {transaction: transaction});
  }
}
