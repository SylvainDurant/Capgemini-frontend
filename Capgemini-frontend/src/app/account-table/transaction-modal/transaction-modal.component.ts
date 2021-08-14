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
  accountNumber: string = '';

  error: string = "";
  dataObject: any = {};
  loading: boolean = false;
  @Output() passAccountEvent = new EventEmitter<object>();

  constructor(
    private apiService: ApiService,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(sender: string, receiver: string,  transactionValue: any) {
    this.error = '';

    if (!receiver) {
      this.error = "Please, enter a valid account number.";
    } else if (!transactionValue || transactionValue <= 0) {
      this.error = "Please, enter a value greater than 0.";
    } else {
      this.loading = true;
      this.dataObject.sender = sender;
      this.dataObject.receiver = receiver;
      this.dataObject.transactionValue = parseInt(transactionValue);
      
      this.apiService.putNewTransaction(this.dataObject).subscribe((data: any)=>{
        if (data.error) {
          this.loading = false;
          this.error = data.error;
        } else {
          this.apiService.getAccountInformations(data.sender).subscribe((data: any)=>{
            if (data.error) {
              this.loading = false;
              this.error = data.error;
            } else {
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
