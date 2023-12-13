import { Component, forwardRef, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { DefaultValuePipe } from '../../pipes/default-value.pipe';
import { SearchMarkDirective } from '../../directives/search-mark.directive';
import { BaseTreeComponent } from '../../models/base-tree-component.class';

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
  @Input() public treeItems!: BaseTreeComponent[];
  @Input() public set value(val: string[]) {
    this._value = val;

    this.onChange(this._value);
  };
  @Input() search: string = '';

  public get value(): string[] {
    return this._value;
  }
  private _value: string[] = [];

  public onChangeBox(treeItem: BaseTreeComponent, $event: any): void {
    treeItem.operation($event.target.checked);

    this.value = BaseTreeComponent.checkedTreeItemsIds;
  }

  public onChange(_: string[]): void {}

  public writeValue(value: string[]): void {
    this.value = value;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(): void {}
}
