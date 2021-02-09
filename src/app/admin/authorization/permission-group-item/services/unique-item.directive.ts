import { Directive } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import {
  AsyncValidator,
  AbstractControl,
  ValidationErrors,
  Validators,
  NG_ASYNC_VALIDATORS,
  AsyncValidatorFn,
} from '@angular/forms';
import { ItemService } from './item.service';

export function UniqueItemValidator(itemService: ItemService): AsyncValidatorFn {
  return (
    c: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return itemService.checkUniquePermission(c.value).pipe(
      map(res => {
        // tslint:disable-next-line: curly
        if (res)
        // tslint:disable-next-line: object-literal-key-quotes
        return { 'UniqueItem': true};

      })
    );
  };
}

@Directive({
  selector: '[UniqueItem]'
})
export class UniqueItemDirective {

  constructor(private itemService: ItemService) { }

  validate(
    c: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.itemService.checkUniquePermission(c.value).pipe(
      map(res => {
        // tslint:disable-next-line: object-literal-key-quotes
        return res && res.length > 0 ? { 'UniqueItem': true } : null;
      })
    );
  }

}
