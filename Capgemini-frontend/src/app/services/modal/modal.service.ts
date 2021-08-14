import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  public closeModal (modalID: string) {
    console.log("in closeModal");
    const modal = document.getElementById(modalID);
    const button = modal?.querySelector("a");
    console.log(button);

    button?.click();
  }
}
