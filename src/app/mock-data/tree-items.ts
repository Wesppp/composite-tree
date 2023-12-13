import { TreeItem } from '../models/tree-item.interface';

export const treeItems: TreeItem[] = [
  {
    id: '1',
    children: [],
    text: 'Item - 1',
    isChecked: false
  },
  {
    id: '2',
    children: [
      {
        id: '21',
        children: [],
        text: 'Item - 21',
        isChecked: false
      },
      {
        id: '22',
        children: [],
        text: '',
        isChecked: false
      }
    ],
    text: 'Item - 2',
    isChecked: false
  },
  {
    id: '3',
    children: [
      {
        id: '31',
        children: [],
        text: 'Item - 31',
        isChecked: false
      },
      {
        id: '32',
        children: [
          {
            id: '321',
            children: [],
            text: '',
            isChecked: false
          },
          {
            id: '322',
            children: [],
            text: 'Item - 322',
            isChecked: false
          }
        ],
        text: 'Item - 32',
        isChecked: false
      },
      {
        id: '33',
        children: [],
        text: 'Item - 33',
        isChecked: false
      }
    ],
    text: 'Item - 3',
    isChecked: false
  },
];
