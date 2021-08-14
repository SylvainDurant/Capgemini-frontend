import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Capgemini-frontend';

  findAccount() {
    console.log("hello world");
  }
}
