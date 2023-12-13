import { TreeItem } from './tree-item.interface';

export abstract class BaseTreeComponent implements TreeItem {
  public children: BaseTreeComponent[] = [];
  public isChecked: boolean = false;
  public id!: string;
  public text!: string;

  protected parent!: BaseTreeComponent | null;

  static checkedTreeItemsIds: string[] = [];

  constructor(id: string, text: string, isChecked: boolean) {
    this.text = text;
    this.id = id;
    this.isChecked = isChecked;
  }

  public setParent(parent: BaseTreeComponent | null): void {
    this.parent = parent;
  }

  public setCheckField(isChecked: boolean, id: string): void {
    this.isChecked = isChecked;

    if (isChecked) {
      BaseTreeComponent.checkedTreeItemsIds = [...BaseTreeComponent.checkedTreeItemsIds, id];
    } else {
      BaseTreeComponent.checkedTreeItemsIds = BaseTreeComponent.checkedTreeItemsIds
        .filter(itemId => itemId !== id);
    }
  }

  public addComponent(component: BaseTreeComponent): void {}

  public checkChildrenChecked(): void {};
  public abstract operation(isChecked: boolean): void;
}
