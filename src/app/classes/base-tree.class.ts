import { TreeItem } from '../models/tree-item.interface';

export abstract class BaseTree implements TreeItem {
  static checkedTreeItemsIds: string[] = [];

  protected parent!: BaseTree | null;
  public children: BaseTree[] = [];
  public isChecked: boolean = false;
  public id!: string;
  public text!: string;

  constructor(id: string, text: string, isChecked: boolean) {
    this.text = text;
    this.id = id;
    this.isChecked = isChecked;
  }


  public abstract operation(isChecked: boolean): void;

  public setParent(parent: BaseTree | null): void {
    this.parent = parent;
  }

  public setCheckField(isChecked: boolean, id: string): void {
    this.isChecked = isChecked;

    if (isChecked) {
      BaseTree.checkedTreeItemsIds = [...BaseTree.checkedTreeItemsIds, id];
    } else {
      BaseTree.checkedTreeItemsIds = BaseTree.checkedTreeItemsIds
        .filter(itemId => itemId !== id);
    }
  }

  public addComponent(component: BaseTree): void {}

  public checkChildrenChecked(): void {};
}
