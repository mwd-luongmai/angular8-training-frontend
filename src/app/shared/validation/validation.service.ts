import { Injectable } from '@angular/core'
import { ValidationErrors, FormGroup } from '@angular/forms'

@Injectable({ providedIn: 'root' })
export class ValidationService {
  private fieldValidationMessages = {
    usernameMinLength: 'Minimum length of username must be 6 characters.',
    usernameRequired: 'Username is required.',
    skillNameRequired: 'Skill name is required.',
    skillSchemaNameRequired: 'Skill schema name is required.',
    usernamePattern: 'Username must contain only alphabetic characters.',
    nameRequired: 'Name is required.',
    nameMaxLength: 'The maximum length of name is 50 characters.',
    skillNameMaxLength: 'The maximum length of a skill name is 100 characters.',
    skillLevelDescription: 'The maximum length of a skill level description is 2000 characters.',
    skillSchemaNameLength: 'The maximum length of skill schema name is 100 characters.',
    skillLevelName: 'The maximum length of a skill level name is 50 characters.',
    emailRequired: 'Email is required.',
    emailPattern: 'Please enter a valid email address.',
    passwordRequired: 'Password is required.',
    passwordAlphabeticChars:
      'The password must contain at least four alphabetic characters.',
    passwordNonAlphabetucChars:
      'The password must contain at least one non-alphabetic character.',
    passwordMinLength: 'Minimum length of password is 8 characters.',
    profileLocationRequired: 'Location is required.',
    profileLocationMaxLength: 'Maximum length of location is 100 characters.',
    companyRequired: 'Company is required.',
    companyMaxLength: 'Maximum length of company is 50 characters.',
    profileBioRequired: 'Bio is required.',
    profileBioMaxLength: 'Maxium length of bio is 255 characters.',
    // others:
    required: 'Field is required.',
    minLength: 'Mininum length is required',
    notSame: 'Password does not match.'
  }

  getValidationErrorMessage(validatorName: string, errorsDef: any) {
    if (errorsDef && errorsDef[validatorName]) {
      return errorsDef[validatorName]
    } else {
      return this.fieldValidationMessages[validatorName]
        ? this.fieldValidationMessages[validatorName]
        : validatorName
    }
  }

  getValidationErrorMessages(
    errors: ValidationErrors,
    errorsDef: any
  ): string[] {
    const messages: string[] = []
    for (const error in errors) {
      if (errors.hasOwnProperty(error) && errors[error] === true) {
        const message = this.getValidationErrorMessage(error, errorsDef)
        messages.push(message)
      }
    }
    return messages
  }
}
