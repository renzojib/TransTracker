import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TransactionsComponent } from './transaction/transactions/transactions.component';
import { EditComponent } from './transaction/edit/edit.component';

const routes: Routes = [
  { path: "home", component: HomeComponent, title: "TransTracker - Home"},
  {path: "transactions", component:TransactionsComponent, title: "TransTracker - Transaction"},
  {path: "note", component:EditComponent, title: "TransTracker - Note"},
  { path: "", redirectTo: "/home", pathMatch: "full"}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
