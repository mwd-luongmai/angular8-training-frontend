import { AbstractControl, ValidatorFn, Validators } from '@angular/forms'

export class FieldValidators {
  constructor() {}

  static emptyValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const text: string = control.value
      if (text === '' || (text && text.trim().length === 0)) {
        return { emptyValid: { value: true } }
      } else {
        return null
      }
    }
  }

  static atLeastOneNonAlphabeticValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const rex = new RegExp('[^a-zA-Z]+')
      const isValid = rex.test(control.value)
      return isValid
        ? null
        : { atLeastOneNonAlphabetic: { value: control.value } }
    }
  }

  static atLeastFourAlphabeticValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const rex = new RegExp('[a-zA-Z]{4,}')
      const isValid = rex.test(control.value)
      return isValid
        ? null
        : { atLeastFourAlphabetic: { value: control.value } }
    }
  }

  static matchPassword(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const password = control.get('newpassword').value
      const confirmPassword = control.get('confirmpassword').value
      const isValid = password === confirmPassword
      if (!isValid) {
        control.get('confirmpassword').setErrors({ matchPassword: true })
      }
      return isValid ? null : { matchPassword: { value: confirmPassword } }
    }
  }

  static emailAddress(): ValidatorFn {
    return Validators.pattern('^[^@]+@[^@]+$')
  }

  static username(): ValidatorFn {
    return Validators.pattern('^[a-zA-Z0-9]+$')
  }
}
