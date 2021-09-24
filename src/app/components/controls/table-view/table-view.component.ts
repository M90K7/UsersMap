import { Component, ComponentRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { NzTableFilterValue, NzTableSortOrder } from "ng-zorro-antd/table";

import { ColumnItem, TableViewCellRenderComponent } from "./table-view.model";

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit, OnChanges {

  @Input()
  columns: ColumnItem[] = [];

  @Input()
  data: any[] = [];

  @Input()
  loading = false;

  @Input()
  parentComponent: any;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    const _columns = changes["columns"];
    if (_columns && _columns.currentValue) {
      this.setColumns();
    }

    const _data = changes["data"];
    if (_data && _data.currentValue) {
      this.setListOfFilter();
    }
  }

  ngOnInit(): void {
  }

  setColumns() {
    for (const col of this.columns) {
      ("sortFn" in col) || (col.sortFn = this.sortFunc.bind(this, col));
      ("sortDirections" in col) || (col.sortDirections = ['ascend', 'descend', null]);
      ("filterMultiple" in col) || (col.filterMultiple = true);
      ("filterFn" in col) || (col.filterFn = this.filterFunc.bind(this, col));
    }
  }

  setListOfFilter() {
    for (const col of this.columns) {
      col.listOfFilter = [...new Set(this.data.map(item => this.getValue(col, item)))].map(f => ({ text: f, value: f }));
    }
  }

  sortFunc(col: ColumnItem, objA: any, objB: any, sortOrder?: NzTableSortOrder): number {
    const a = this.getValue(col, objA);
    const b = this.getValue(col, objB);

    if (col.type === "number") {
      return a - b;
    } else {
      return (a as string).localeCompare(b);
    }
  }

  filterFunc(col: ColumnItem, values: NzTableFilterValue, item: any): boolean {
    const val = this.getValue(col, item);

    if (col.type === "number") {
      return values.some((v: number) => val === v);
    } else {
      return values.some((v: string) => val.indexOf(v) !== -1);
    }
  }

  getValue(column: ColumnItem, item: any) {
    if (column.getValue) {
      return column.getValue(item);
    }
    if (column.fieldName) {
      return item[column.fieldName];
    }
    if (column.headerName && column.headerName in item) {
      return item[column.headerName];
    }
    return null;
  }

  componentCreated(compRef: ComponentRef<TableViewCellRenderComponent>, column: ColumnItem, item: any) {
    compRef.instance.onTableRowInit && compRef.instance.onTableRowInit(this.parentComponent, column, item);
  }
}
