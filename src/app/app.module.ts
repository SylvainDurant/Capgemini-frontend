import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AccountTableComponent } from './account-table/account-table.component';
import { TransactionModalComponent } from './account-table/transaction-modal/transaction-modal.component';
import { FindAccountModalComponent } from './account-table/find-account-modal/find-account-modal.component';
import { NewAccountModalComponent } from './account-table/new-account-modal/new-account-modal.component';
import { ReminderComponent } from './account-table/reminder/reminder.component';




@NgModule({
  declarations: [
    AppComponent,
    AccountTableComponent,
    TransactionModalComponent,
    FindAccountModalComponent,
    NewAccountModalComponent,
    ReminderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
