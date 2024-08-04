import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionsService } from '../transactions/transactions.service';
import { ITransaction } from '../transactions/transaction.model';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
  transaction!: ITransaction;
  @Output() add = new EventEmitter();

  constructor(private route: ActivatedRoute, private transactionsSvc: TransactionsService) {
    
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params)=> {
      this.findTransaction(params["transactionIndex"]);
    })
  }

  findTransaction(index: number) {
    this.transactionsSvc.getTransactions().subscribe((data) => {
      this.transaction = data[index]
      })
  }

  addNote() {
    this.add.emit();
    this.transactionsSvc.addNoteToTransaction(this.transaction);
  }
}
