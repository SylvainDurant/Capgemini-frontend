import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent implements OnInit {

  @Input()
	accountNumber: string = '';

  accountArray: any = [];
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (!this.accountArray.includes(this.accountNumber)) {
      this.accountArray.push(this.accountNumber);
    }
  }

}
