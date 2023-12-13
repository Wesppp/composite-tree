import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CompositeTreeBuilderService } from './services/composite-tree-builder.service';
import { BaseTreeComponent } from './models/base-tree-component.class';
import { treeItems } from './mock-data/tree-items';

interface IForm {
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
  public treeItems!: BaseTreeComponent[];

  constructor(private compositeTreeBuilderService: CompositeTreeBuilderService) {
  }

  public ngOnInit(): void {
    this.treeItems = this.compositeTreeBuilderService.buildTree(treeItems);

    console.log(this.treeItems);

    this.createForm();
  }

  private createForm(): void {
    this.form = new FormGroup<IForm>({
      idInfo: new FormControl([]),
      search: new FormControl('')
    });
  }

  public onSubmit(formValue: string[]): void {
    console.log(formValue);
  }
}
