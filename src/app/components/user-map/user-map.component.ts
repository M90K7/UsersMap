import { Component, Input, OnInit } from '@angular/core';

import { NzModalRef } from "ng-zorro-antd/modal";

import * as models from "models";
import { MapModel } from "../controls/map-view/map-model";

@Component({
  selector: 'app-user-map',
  templateUrl: './user-map.component.html',
  styleUrls: ['./user-map.component.scss']
})
export class UserMapComponent implements OnInit {

  _user?: models.UserModel;

  @Input()
  get user(): models.UserModel {
    return this._user!;
  }
  set user($v: models.UserModel){
    this._user = $v;
    this.mapItems = [{
      lat: +this._user.address.geo.lat,
      long: +this._user.address.geo.lng,
      title: `<div style="text-align:center;">${this._user.name}<br />City: ${this._user.address.city}`
    }];
  }

  mapItems: MapModel[] = [];

  constructor(private nzModalRef: NzModalRef) { }

  ngOnInit(): void {
  }

  destroyModal(): void {
    this.nzModalRef.destroy();
  }

}
