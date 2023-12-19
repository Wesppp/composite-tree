import { BaseTree } from './base-tree.class';

export class Composite extends BaseTree {

  constructor(id: string, text: string, isChecked: boolean, children: BaseTree[]) {
    super(id, text, isChecked);

    children.forEach(child => {
      this.addComponent(child);
    });
  }

  public override addComponent(component: BaseTree): void {
    this.children.push(component);

    component.setParent(this);
  }

  public override checkChildrenChecked(): void {
   this.isChecked = this.children.every(el => el.isChecked);

    if (this.parent) {
      this.parent.checkChildrenChecked();
    }
  }

  public operation(isChecked: boolean): void {
    this.setCheckField(isChecked, this.id);

    this.children.forEach(child => child.operation(isChecked));
  }
}
