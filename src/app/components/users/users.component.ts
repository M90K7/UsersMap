import { Component, OnInit } from '@angular/core';

import { NzModalService } from "ng-zorro-antd/modal";

import * as svc from "services";
import * as models from "models";

import { IUsersComponent } from "./users.model";
import { UsersOperationComponent } from "./users-operation.component";
import { ColumnItem } from "../controls/table-view/table-view.model";
import { UserMapComponent } from "../user-map/user-map.component";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, IUsersComponent {

  loading = false;
  userItems: models.UserModel[] = [];

  columns: ColumnItem[] = [
    {
      fieldName: 'name',
      headerName: 'نام'
    },
    {
      fieldName: "username",
      headerName: "نام کاربری"
    },
    {
      fieldName: "email",
      headerName: "ایمیل"
    },
    {
      fieldName: "phone",
      headerName: "موبایل"
    },
    {
      fieldName: "website",
      headerName: "سایت"
    },
    {
      getValue: (v: models.UserModel) => v.address.street,
      headerName: "خیابان"
    },
    {
      getValue: (v: models.UserModel) => v.address.suite,
      headerName: "سوئیت"
    },
    {
      getValue: (v: models.UserModel) => v.address.city,
      headerName: "شهر"
    },
    {
      getValue: (v: models.UserModel) => v.company.name,
      headerName: "نام شرکت"
    },
    {
      getValue: (v: models.UserModel) => v.company.bs,
      headerName: "توضیحات شرکت"
    },
    {
      componentType: UsersOperationComponent,
      headerName: "عملیات"
    }
  ];
  that: any;

  constructor(
    private nzModalSvc: NzModalService,
    private readonly userSvc: svc.UserService
  ) { 
    this.that = this;
  }

  ngOnInit(): void {
    this.loading = true;
    this.userSvc.getUsers().subscribe(users => {
      this.loading = false;
      this.userItems = users;
    }, err => {
      this.loading = false;
    });
  }

  openMapModal(column: ColumnItem, item: models.UserModel) {
    this.nzModalSvc.success({
      nzTitle: "موقعیت مکانی کاربر",
      nzCentered: true,
      nzComponentParams: {user: item},
      nzContent: UserMapComponent,
      nzWidth: "75%"
    });
  }
}


