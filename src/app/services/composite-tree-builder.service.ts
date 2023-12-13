import { Injectable } from '@angular/core';

import { BaseTreeComponent } from '../models/base-tree-component.class';
import { TreeItem } from '../models/tree-item.interface';
import { Composite } from '../models/composite.class';
import { Leaf } from '../models/leaf.class';

@Injectable({
  providedIn: 'root'
})
export class CompositeTreeBuilderService {
  public buildTree(tree: TreeItem[]): BaseTreeComponent[] {
    return tree.map(item => {
      if (item.children.length) {
        const children = this.buildTree(item.children);

        return new Composite(item.id, item.text, item.isChecked, children);
      } else {
        return new Leaf(item.id, item.text, item.isChecked)
      }
    });
  }
}
