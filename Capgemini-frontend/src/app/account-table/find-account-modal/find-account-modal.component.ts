import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { ModalService } from '../../services/modal/modal.service';

@Component({
  selector: 'app-find-account-modal',
  templateUrl: './find-account-modal.component.html',
  styleUrls: ['./find-account-modal.component.css']
})
export class FindAccountModalComponent implements OnInit {

  error: string = "";
  loading: boolean = false;
  @Output() passAccountEvent = new EventEmitter<object>();

  constructor(
    private apiService: ApiService,
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(accountNumber: string) {
    this.error = '';

    if (!accountNumber || accountNumber.length != 16) { //16 being the length of an account number
      this.error = "Please, enter a valid account number.";
    } else {
      this.loading = true;

      this.apiService.getAccountInformations(accountNumber).subscribe((data: any)=>{
        if (data.error) {
          this.loading = false;
          this.error = data.error;
        } else {
          const accountNumberInput = document.getElementById("AccountNumber");
          
          this.loading = false;
          this.modalService.closeModal("findModal");
          this.passAccountEvent.emit(data);
        }
      }) 
    } 
  }
}
