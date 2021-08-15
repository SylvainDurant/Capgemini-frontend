import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { ModalService } from '../../services/modal/modal.service';

@Component({
  selector: 'app-transaction-modal',
  templateUrl: './transaction-modal.component.html',
  styleUrls: ['./transaction-modal.component.css']
})
export class TransactionModalComponent implements OnInit {

  @Input()
  sender: string = '';

  error: string = "";
  dataObject: any = {};
  loading: boolean = false;
  receiver: string = '';
  transactionValue: any;
  @Output() passAccountEvent = new EventEmitter<object>();

  constructor(
    private apiService: ApiService,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.error = '';

    if (!this.receiver || this.receiver.length != 16) { //16 being the length of an account number
      this.error = "Please, enter a valid account number.";
    } else if (!this.transactionValue || this.transactionValue <= 0) {
      this.error = "Please, enter a value greater than 0.";
    } else if (this.sender === this.receiver) {
      this.error = "Sender and receiver cannot be the same account.";
    } else {
      this.loading = true;
      this.dataObject.sender = this.sender;
      this.dataObject.receiver = this.receiver;
      this.dataObject.transactionValue = parseInt(this.transactionValue);
      
      this.apiService.putNewTransaction(this.dataObject).subscribe((data: any)=>{
        if (data.error) {
          this.loading = false;
          this.error = data.error;
        } else {
          this.apiService.getAccountInformations(this.sender).subscribe((data: any)=>{
            if (data.error) {
              this.loading = false;
              this.error = data.error;
            } else {
              this.sender = '';
              this.receiver = '';
              this.transactionValue = '';
              this.loading = true;
              this.modalService.closeModal("transactionModal");
              this.passAccountEvent.emit(data);
            }
          }) 
        }
      }) 
    } 
  }
}
