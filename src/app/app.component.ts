import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { BaseTree } from './classes/base-tree.class';
import { TREE_ITEMS } from './constants/tree-items';
import { buildTree } from './utils/composite-tree-builder.util';

interface TreeSearchForm {
  idInfo: FormControl<string[] | null>;
  search: FormControl<string | null>;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public form!: FormGroup;
  public treeItems!: BaseTree[];

  public ngOnInit(): void {
    this.treeItems = buildTree(TREE_ITEMS);

    this.createForm();
  }

  private createForm(): void {
    this.form = new FormGroup<TreeSearchForm>({
      idInfo: new FormControl<string[] | null>([]),
      search: new FormControl<string | null>('')
    });
  }

  public onSubmit(formValue: string[]): void {
    console.log(formValue);
  }
}
