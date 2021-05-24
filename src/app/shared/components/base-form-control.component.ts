import { Input } from '@angular/core'
import { FormGroup } from '@angular/forms'

export abstract class BaseFormControlComponent {
  @Input()
  submitted = false

  @Input()
  parentGroup: FormGroup

  constructor(public name: string, public label: string) {}
}
