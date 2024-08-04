import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionsService } from '../transactions/transactions.service';
import { ITransaction } from '../transactions/transaction.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  transaction: ITransaction = {date: new Date(), description: "", amount: 0};
  note: string = "This will not get saved. In other to do that you will need to update the Itransaction model to account for note and finish the backend setup.";

  @Input() transactionIndex! : number;

  @Output() add = new EventEmitter();

  constructor(private route: ActivatedRoute, private transactionsSvc: TransactionsService) {
    
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params)=> {
      this.findTransaction();
    })
  }

  findTransaction() {
    this.transactionsSvc.getTransactions().subscribe((data) => {
      this.transaction = data[this.transactionIndex];
      })
  }

  addNote() {
    this.transactionsSvc.addNoteToTransaction(this.transaction);
    this.add.emit();
  }
}
