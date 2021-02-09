import { Directive, Input } from '@angular/core';
import {
  AsyncValidator,
  AbstractControl,
  ValidationErrors,
  Validators,
  NG_ASYNC_VALIDATORS,
  AsyncValidatorFn,
  ValidatorFn
} from '@angular/forms';
import { Subscription } from 'rxjs';

export function compareValidators(controlNameToCompare: string): ValidatorFn {
  return (c: AbstractControl): ValidationErrors | null => {
    if (c.value === null || c.value.length === 0) {
      return null;
    }
    const controlToCompare = c.root.get(controlNameToCompare);
    if (controlToCompare) {
      const subscription: Subscription = controlToCompare.valueChanges.subscribe(() => {
        c.updateValueAndValidity();
        subscription.unsubscribe();
      });
    }
    return controlToCompare && controlToCompare.value !== c.value ? { 'compare': true } : null;

  };

}

@Directive({
  selector: '[compare]'
})
export class ConfirmPasswordDirective {
  @Input('compare') controlNameToCompare: string;
  constructor() { }
  validate(c: AbstractControl): ValidationErrors | null {
    if (c.value === null || c.value.length === 0) {
      return null;
    }
    const controlToCompare = c.root.get(this.controlNameToCompare);
    if (controlToCompare) {
      const subscription: Subscription = controlToCompare.valueChanges.subscribe(() => {
        c.updateValueAndValidity();
        subscription.unsubscribe();
      });
    }
    // tslint:disable-next-line: object-literal-key-quotes
    return controlToCompare && controlToCompare.value !== c.value ? { 'compare': true } : null;

  }

}
