import { Component } from "@angular/core";

import { NzIconService } from "ng-zorro-antd/icon";
import { GlobalOutline, GithubOutline } from '@ant-design/icons-angular/icons';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {

  constructor(nzIconSvc: NzIconService) {
    nzIconSvc.addIcon(...[GlobalOutline, GithubOutline]);
  }

}
