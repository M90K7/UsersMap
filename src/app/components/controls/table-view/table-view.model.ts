import { Type } from "@angular/core";
import {
    NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder
} from "ng-zorro-antd/table";


export interface ColumnItem {
    fieldName?: string;
    headerName: string;
    type?: "number" | "string";
    componentType?: Type<any>;
    getValue?: (value: any) => any;
    sortOrder?: NzTableSortOrder | null;
    sortFn?: NzTableSortFn<any>;
    listOfFilter?: NzTableFilterList;
    filterFn?: NzTableFilterFn<any>;
    filterMultiple?: boolean;
    sortDirections?: NzTableSortOrder[];
}

export interface TableViewCellRenderComponent<T = any> {
    onTableRowInit: (parentComponent: T, column: ColumnItem, item: any) => void;
}