import { BaseTree } from './base-tree.class';

export class Leaf extends BaseTree {
  public operation(isChecked: boolean): void {
    this.setCheckField(isChecked, this.id);

    if (this.parent) {
      this.parent.checkChildrenChecked();
    }
  }
}
