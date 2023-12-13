import { BaseTreeComponent } from './base-tree-component.class';

export class Leaf extends BaseTreeComponent {
  public operation(isChecked: boolean): void {
    this.setCheckField(isChecked, this.id);

    if (this.parent) {
      this.parent.checkChildrenChecked();
    }
  }
}
