import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private SERVER_URL = "https://capgemini-api.herokuapp.com/";
  private CORS_PROXY = "https://hidden-bayou-12793.herokuapp.com/";
  constructor(private httpClient: HttpClient) { }

  // get account informations
  public get(accountID: string){  
		return this.httpClient.get(
      this.CORS_PROXY +
      this.SERVER_URL +
      "api/currentAccount/accountInformations/" +
      accountID);  
	} 
}
