import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  public closeModal (modalID: string) {
    const modal = document.getElementById(modalID);
    const button = modal?.querySelector("a");

    button?.click();
  }
}
