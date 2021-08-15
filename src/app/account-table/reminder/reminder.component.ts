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
    if(localStorage.getItem('accountArray')) {
      this.accountArray = localStorage.getItem('accountArray')?.split(",");
    }
  }

  ngOnChanges() {
    if (this.accountNumber && !this.accountArray.includes(this.accountNumber)) {
      this.accountArray.push(this.accountNumber);

      localStorage.setItem('accountArray', this.accountArray);
    }
  }

}
