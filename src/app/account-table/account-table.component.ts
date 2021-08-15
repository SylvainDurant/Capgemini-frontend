import { Component, OnInit} from '@angular/core';
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-account-table',
  templateUrl: './account-table.component.html',
  styleUrls: ['./account-table.component.css']
})
export class AccountTableComponent implements OnInit {

	account: any = {};

	constructor() { }

	ngOnInit() {
	}

	receiveAccount(account: object) {
		this.account = account
		if (this.account.userInformations.firstName === "Wade") {
			console.log(environment.wade);
		}
	}
}
