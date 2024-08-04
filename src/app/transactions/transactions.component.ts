import { Component, inject, Injectable, Input } from '@angular/core';
import { TransactionsService } from './transactions.service';
import { ITransaction } from './transaction.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {
  transactions: ITransaction[] = [];
  note: string = "";
  showTransactions!: boolean;

  @Input() topTransactions!: boolean;

  constructor(private transactionsSvc: TransactionsService, private router: Router) {

  }

  ngOnInit () {
    this.showTransactions = true;
    const today = new Date();
    this.transactionsSvc.getTransactions().subscribe((transactions) => {
      this.transactions = !!this.topTransactions == false ? transactions 
                                                          :  (transactions.length > 10 ? 
                                                                                        transactions.sort((a,b) => 
                                                                                        { return (new Date(b.date)).getTime() - (new Date(a.date)).getTime()}).slice(0, 10) 
                                                                                        : transactions);
    })
  }

  removeTransaction (index: number) {
    this.transactions.splice(index,1);
  }

  //Evil laughter
  showNoteSection(index: number) {
    this.showTransactions = false;
    this.router.navigate(["note"], {queryParams: {transactionIndex: index}});
  }

  toggleShowTransactions() {
    this.showTransactions = !this.showTransactions;
  }

}
