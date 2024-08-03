import { Component } from '@angular/core';
import { TransactionsService } from './transactions.service';
import { ITransaction } from './transaction.model';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {
  transactions: ITransaction[] = [];

  constructor(private transactionsSvc: TransactionsService) {

  }

  ngOnInit () {
    const today = new Date();
    this.transactionsSvc.getTransactions().subscribe((transactions) => {
      this.transactions = transactions.length > 10 ? transactions.sort((a,b) => { return (new Date(b.date)).getTime() - (new Date(a.date)).getTime()}).slice(0, 10) : transactions;
    })
  }

}
