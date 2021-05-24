import { Component, forwardRef, Input } from '@angular/core'
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  ValidationErrors,
} from '@angular/forms'

const noop = () => {}

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputComponent),
  multi: true,
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-input',
  templateUrl: './input.component.html',
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
})
export class InputComponent implements ControlValueAccessor {
  @Input() errorVisible = false
  @Input() errors: ValidationErrors
  @Input() type: string = 'text'
  @Input() rows: number = 1
  @Input() errorsDef: any
  @Input() placeholder: string = ''
  @Input() icon: string = ''

  private innerValue: any = ''

  private onTouchedCallback: () => void = noop
  private onChangeCallback: (_: any) => void = noop

  get value(): any {
    return this.innerValue
  }

  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v
      this.onChangeCallback(v)
    }
  }

  onBlur() {
    this.onTouchedCallback()
  }

  writeValue(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value
    }
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn
  }

  get hasError(): boolean {
    for (const error in this.errors) {
      if (this.errors[error]) {
        return true
      }
    }
    return false
  }
}
