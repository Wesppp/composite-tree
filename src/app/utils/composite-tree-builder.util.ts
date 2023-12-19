import { TreeItem } from '../models/tree-item.interface';
import { BaseTree } from '../classes/base-tree.class';
import { Composite } from '../classes/composite.class';
import { Leaf } from '../classes/leaf.class';

export function buildTree(tree: TreeItem[]): BaseTree[] {
  return tree.map((item: TreeItem): Composite | Leaf => {
    if (item.children.length) {
      const children: BaseTree[] = buildTree(item.children);

      return new Composite(item.id, item.text, item.isChecked, children);
    } else {
      return new Leaf(item.id, item.text, item.isChecked)
    }
  });
}
