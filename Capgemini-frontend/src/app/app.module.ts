import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
