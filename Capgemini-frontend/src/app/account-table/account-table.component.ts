import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-account-table',
  templateUrl: './account-table.component.html',
  styleUrls: ['./account-table.component.css']
})
export class AccountTableComponent implements OnInit {

	account: any = {};
	constructor(private apiService: ApiService) { }

	ngOnInit() {
		this.apiService.get('BE58431265588767').subscribe((data: any)=>{   
			this.account = data;  
      console.log(this.account);
      
		})  
	}

}
