import { Component } from "@angular/core";

import { ColumnItem, TableViewCellRenderComponent } from "../controls/table-view/table-view.model";
import { IUsersComponent } from "./users.model";

@Component({
    selector: 'app-operation-user',
    template: `
<button nz-button nzType="primary" nzSize="default" nzShape="round"
    nz-tooltip nzTooltipTitle="نقشه"
    (click)="onViewMap()">
   <i nz-icon nzType="global" nzTheme="outline"></i>
</button>`,
    styles: [``]
})
export class UsersOperationComponent implements TableViewCellRenderComponent<IUsersComponent> {

    parentComponent!: IUsersComponent;
    column!: ColumnItem;
    item: any;

    onTableRowInit(parentComponent: IUsersComponent, column: ColumnItem, item: any) {
        this.parentComponent = parentComponent;
        this.column = column;
        this.item = item;
    }

    onViewMap(){
        this.parentComponent.openMapModal(this.column, this.item);
    }
}
 