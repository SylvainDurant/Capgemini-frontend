import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { ModalService } from '../../services/modal/modal.service';

@Component({
  selector: 'app-new-account-modal',
  templateUrl: './new-account-modal.component.html',
  styleUrls: ['./new-account-modal.component.css']
})
export class NewAccountModalComponent implements OnInit {

  error: string = "";
  dataObject: any = {};
  loading: boolean = false;
  customerID: string = "";
  initialCredit: any;
  @Output() passAccountEvent = new EventEmitter<object>();

  constructor(
    private apiService: ApiService,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.error = '';      
    
    if (!this.customerID) {
      this.error = "Please, enter a valid customer id.";
    } else if (this.initialCredit < 0 || (!this.initialCredit && this.initialCredit !== 0)) {
      this.error = "Please, enter a positive value.";
    } else {
      this.loading = true;
      this.dataObject.customerID = this.customerID;
      this.dataObject.initialCredit = parseInt(this.initialCredit);

      this.apiService.postNewAccount(this.dataObject).subscribe( async (data: any)=>{
        if (data.error) {
          this.loading = false;
          this.error = data.error;
        } else {          
          this.apiService.getAccountInformations(data.accountNumber).subscribe((data: any)=>{
            if (data.error) {
              this.loading = false;
              this.error = data.error;
            } else {
              this.customerID = '';
              this.initialCredit = '';
              this.loading = false;
              this.modalService.closeModal("newAccountModal");
              this.passAccountEvent.emit(data);
            }
          }) 
        }
      }) 
    } 
  }
}
