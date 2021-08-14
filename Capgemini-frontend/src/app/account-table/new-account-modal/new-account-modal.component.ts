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
  @Output() passAccountEvent = new EventEmitter<object>();

  constructor(
    private apiService: ApiService,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(customerID: string,  initialCredit: any) {
    this.error = '';

    if (!customerID) {
      this.error = "Please, enter a valid customer id.";
    } else if (!initialCredit || initialCredit < 0) {
      this.error = "Please, enter a positive value.";
    } else {
      this.loading = true;
      this.dataObject.customerID = customerID;
      this.dataObject.initialCredit = parseInt(initialCredit);

      this.apiService.postNewAccount(this.dataObject)
      // .subscribe((data: any)=>{
      //   if (data.error) {
      //     this.error = data.error;
      //   } else {
      //     this.modalService.closeModal("newAccountModal");
      //     this.passAccountEvent.emit(data);
      //   }
      // }) 
    } 
  }
}
