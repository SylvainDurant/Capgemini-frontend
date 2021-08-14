import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import {  throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private SERVER_URL = "https://capgemini-api.herokuapp.com/";
  private CORS_PROXY = "https://hidden-bayou-12793.herokuapp.com/";
  constructor(private httpClient: HttpClient) { }

  // get account informations
  public getAccountInformations(accountID: string){  
		return this.httpClient.get(
      this.CORS_PROXY +
      this.SERVER_URL +
      "api/currentAccount/accountInformations/" +
      accountID
    ).pipe(catchError(this.handleError));  
	}

  // create new account
  public postNewAccount(dataObject: object){ 
    return this.httpClient.post(
      this.CORS_PROXY +
      this.SERVER_URL +
      "api/currentAccount/newCurrentAccount",
      dataObject
    ).pipe(catchError(this.handleError));  
  } 

  // create new transaction
  public putNewTransaction(dataObject: any){ 
    return this.httpClient.put(
      this.CORS_PROXY +
      this.SERVER_URL +
      "api/transaction/newTransaction",
      dataObject
    ).pipe(catchError(this.handleError));  
  } 

  //handling errors
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
