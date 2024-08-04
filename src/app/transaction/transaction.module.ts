import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './transactions/transactions.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    TransactionsComponent,
    EditComponent
  ],
  imports: [
    CommonModule, HttpClientModule, FormsModule
  ],
  exports: [TransactionsComponent, EditComponent]
})
export class TransactionModule { }
