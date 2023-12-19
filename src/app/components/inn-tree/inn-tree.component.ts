import { Component, forwardRef, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { DefaultValuePipe } from '../../pipes/default-value.pipe';
import { SearchMarkDirective } from '../../directives/search-mark.directive';
import { BaseTree } from '../../classes/base-tree.class';

@Component({
  selector: 'app-inn-tree',
  standalone: true,
  imports: [CommonModule, DefaultValuePipe, SearchMarkDirective],
  templateUrl: './inn-tree.component.html',
  styleUrls: ['./inn-tree.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InnTreeComponent),
      multi: true
    }
  ]
})
export class InnTreeComponent implements ControlValueAccessor {
  @Input() public treeItems!: BaseTree[];
  @Input() public search: string = '';

  private onTouched: () => void = () => {};
  private onChange: (_: string[]) => void = () => {};

  public onChangeBox(treeItem: BaseTree, $event: any): void {
    treeItem.operation($event.target.checked);

    this.onChange(BaseTree.checkedTreeItemsIds);
  }

  public writeValue(value: string[]): void {}

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
