import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  public closeModal () {
    const button = document.getElementById("closeButton");

    button?.click();
  }
}
