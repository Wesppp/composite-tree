import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultValue',
  standalone: true
})
export class DefaultValuePipe implements PipeTransform {
  public transform<T>(value: T): T | string {
    if (!value) { return 'Поле не определено'; }

    return value;
  }
}
