import { Component, Input, OnInit } from '@angular/core'
import { ValidationErrors } from '@angular/forms'
import { ValidationService } from '@app/shared/validation'

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'validation-messages',
  templateUrl: './validation-messages.component.html',
})
export class ValidationMessagesComponent implements OnInit {
  @Input() errors: ValidationErrors
  @Input() errorsDef: any

  constructor(private validationService: ValidationService) {}

  ngOnInit(): void {}

  get messages(): string[] {
    return this.validationService.getValidationErrorMessages(
      this.errors,
      this.errorsDef
    )
  }
}
