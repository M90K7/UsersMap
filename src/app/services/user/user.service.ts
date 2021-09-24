// #region imports

import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from '@angular/core';

// rxjs
import { catchError } from "rxjs/operators";

// models
import * as models from "models";

// services
import { UrlService } from "../url.service";
import { HttpLogger } from "../http-logger.service";
import { of } from "rxjs";

//#endregion imports

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private readonly $httpSvc: HttpClient,
    private readonly urlSvc: UrlService,
    private readonly httpLogger: HttpLogger
  ) { }

  getUsers() {
    return this.$httpSvc.get<models.UserModel[]>(this.urlSvc.userUrl)
      .pipe(
        catchError(this.httpLogger.handleError.bind(this.httpLogger))
      );
  }
}
