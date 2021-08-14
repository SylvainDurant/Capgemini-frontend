import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccountTableComponent } from './account-table/account-table.component';
import { TransactionModalComponent } from './account-table/transaction-modal/transaction-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountTableComponent,
    TransactionModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
