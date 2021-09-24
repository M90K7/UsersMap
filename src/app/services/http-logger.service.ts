import { Injectable } from '@angular/core';
import { HttpErrorResponse } from "@angular/common/http";

import { throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpLogger {

  logApi() {
  }

  handleError(error: Error) {
    if (error instanceof HttpErrorResponse) {
      const { message, status, statusText } = error;
      // TODO Log to API
    }

    // throw to UI handle error
    return throwError(error);
  }
}
