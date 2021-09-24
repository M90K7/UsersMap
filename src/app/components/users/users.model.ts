import { ColumnItem } from "../controls/table-view/table-view.model";

export interface IUsersComponent {
    openMapModal : (column: ColumnItem, item: any) => void;
}
