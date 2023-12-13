export interface TreeItem {
  id: string;
  children: TreeItem[];
  text: string;
  isChecked: boolean;
}
