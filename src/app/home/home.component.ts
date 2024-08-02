import { Component } from '@angular/core';
import { ITransaction } from '../transactions/transaction.model';
import { TransactionsService } from '../transactions/transactions.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  topTransaction: any;

  constructor(private transactions: TransactionsService) {

  }

  ngOnInit () {
    this.topTransaction = this.transactions.getTransactions().subscribe((transactions) => {
      this.topTransaction = transactions.filter((transaction) => {
        var today = new Date();
        return transaction.date.getFullYear == today.getFullYear;
      }).sort((a, b) => {
        return a.date.getMonth() - b.date.getMonth();
      }).filter((transaction) => {
        transaction.date.get > da
      })
    })
  }

}
