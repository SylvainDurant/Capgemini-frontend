import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-find-account-modal',
  templateUrl: './find-account-modal.component.html',
  styleUrls: ['./find-account-modal.component.css']
})
export class FindAccountModalComponent implements OnInit {

  error: string = "";
  @Output() passAccountEvent = new EventEmitter<object>();

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  onSubmit(accountNumber: string) {
    this.error = '';

    if (!accountNumber) {
      this.error = "Please, enter a valid account number.";
    } else {
      this.apiService.getAccountInformations(accountNumber).subscribe((data: any)=>{
        if (data.error) {
          this.error = data.error;
        } else {
          this.passAccountEvent.emit(data);
        }
      }) 
    } 
  }
}
