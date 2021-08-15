import { Component, OnInit} from '@angular/core';

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
	}
}
