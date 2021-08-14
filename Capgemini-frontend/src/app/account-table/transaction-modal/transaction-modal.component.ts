import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-transaction-modal',
  templateUrl: './transaction-modal.component.html',
  styleUrls: ['./transaction-modal.component.css']
})
export class TransactionModalComponent implements OnInit {

  @Input()
  accountNumber: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
