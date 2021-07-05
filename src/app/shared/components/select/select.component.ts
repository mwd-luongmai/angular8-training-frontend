import { Output, EventEmitter, Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ValidationErrors } from '@angular/forms';

interface IOptionItem {
  value: string,
  text: string
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SelectComponent), multi: true}]
})
export class SelectComponent implements ControlValueAccessor{

  @Input() icon: string = ''
  @Input() label: string = ''
  @Input() options: IOptionItem[] = []
  @Input() errorVisible = false
  @Input() errors: ValidationErrors
  @Input() errorsDef: any
  @Output() valueChanged = new EventEmitter<string>()

  private innerValue: any
  disabled: boolean = false
  private onChangeFunc: (value: any) => void = () => {}
  private onTouchFunc: () => void = () => {}

  constructor() {}

  set value(v: any){
    if(v !== this.innerValue){
      this.innerValue = v
      this.valueChanged.emit(v)
      this.onChangeFunc(this.innerValue)
    }
  }

  get value(): any{
    return this.innerValue
  }

  writeValue(obj: any): void {
    if(obj !== this.innerValue){
      this.innerValue = obj
      this.onChangeFunc(this.innerValue)
    }
  }

  registerOnChange(fn: any): void {
    this.onChangeFunc = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouchFunc = fn
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled
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
