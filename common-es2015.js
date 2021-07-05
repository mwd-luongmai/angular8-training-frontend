(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/shared/validation/field-spec.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/validation/field-spec.ts ***!
  \*************************************************/
/*! exports provided: FieldSpecs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldSpecs", function() { return FieldSpecs; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
function finalizeValidationResult(result) {
    const newResult = {};
    Object.keys(result).forEach(property => {
        if (result[property]) {
            newResult[property] = true;
        }
    });
    if (newResult) {
        return newResult;
    }
    return null;
}
const USER_NAME_MIN_LENGTH = 6;
const USER_NAME_PATTERN = new RegExp(/^[a-zA-Z0-9]+$/);
const NAME_MAX_LENGTH = 50;
const COMPANY_MAX_LENGTH = 50;
const EMAIL_PATTERN = new RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/);
const PASSWORD_MIN_LENGTH = 8;
const PASSWORD_NONALPHABETIC_PATTERN = new RegExp(/[^a-zA-Z]+/);
const PASSWORD_ALPHABETIC_PATTERN = new RegExp(/[a-zA-Z]{4,}/);
const PROFILE_LOCATION_MAX_LENGTH = 100;
const BIO_MAX_LENGTH = 255;
class FieldSpecs {
    static usernameValidator(control) {
        const username = control.value.trim();
        const usernameRequired = !username;
        const usernameMinLength = username.length < USER_NAME_MIN_LENGTH;
        const usernamePattern = !USER_NAME_PATTERN.test(username);
        if (usernameRequired) {
            return { usernameRequired };
        }
        return finalizeValidationResult({
            usernameRequired,
            usernameMinLength,
            usernamePattern,
        });
    }
    static fieldRequiredValidator(validatorName, trimValue = true) {
        return (control) => {
            let value = control.value;
            if (trimValue) {
                value = value.trim();
            }
            const result = {};
            result[validatorName] = !value;
            return finalizeValidationResult(result);
        };
    }
    static fieldMaxLengthValidator(validatorName, trimValue = true, maxLength) {
        return (control) => {
            let value = control.value;
            if (trimValue) {
                value = value.trim();
            }
            const result = {};
            if (value.length > maxLength) {
                result[validatorName] = true;
                control.setErrors(result);
            }
            return finalizeValidationResult(result);
        };
    }
    static nameValidator(control) {
        const name = control.value.trim();
        const nameRequired = !name;
        const nameMaxLength = name.length > NAME_MAX_LENGTH;
        if (nameRequired) {
            return { nameRequired };
        }
        return finalizeValidationResult({ nameRequired, nameMaxLength });
    }
    static companyValidator(control) {
        const company = control.value.trim();
        const companyRequired = !company;
        const companyMaxLength = company.length > COMPANY_MAX_LENGTH;
        if (companyRequired) {
            return { companyRequired };
        }
        return finalizeValidationResult({ companyRequired, companyMaxLength });
    }
    static emailValidator(control) {
        const email = control.value.trim();
        const emailRequired = !email;
        const emailPattern = !EMAIL_PATTERN.test(email);
        if (emailRequired) {
            return { emailRequired };
        }
        return finalizeValidationResult({ emailRequired, emailPattern });
    }
    static passwordValidator(control) {
        const password = control.value;
        const passwordRequired = !password;
        const passwordAlphabeticChars = !PASSWORD_ALPHABETIC_PATTERN.test(password);
        const passwordNonAlphabetucChars = !PASSWORD_NONALPHABETIC_PATTERN.test(password);
        const passwordMinLength = password.length < PASSWORD_MIN_LENGTH;
        if (passwordRequired) {
            return { passwordRequired };
        }
        return finalizeValidationResult({
            passwordRequired,
            passwordAlphabeticChars,
            passwordNonAlphabetucChars,
            passwordMinLength,
        });
    }
    static simplePasswordValidator(control) {
        const password = control.value;
        const passwordRequired = !password;
        const passwordMinLength = password.length < PASSWORD_MIN_LENGTH;
        if (passwordRequired) {
            return { passwordRequired };
        }
        return finalizeValidationResult({ passwordRequired, passwordMinLength });
    }
    static profileLocationValidator(control) {
        const location = control.value.trim();
        const profileLocationRequired = !location;
        const profileLocationMaxLength = location.length > PROFILE_LOCATION_MAX_LENGTH;
        if (profileLocationRequired) {
            return { profileLocationRequired };
        }
        return finalizeValidationResult({
            profileLocationRequired,
            profileLocationMaxLength,
        });
    }
    static profileBioValidator(control) {
        const bio = control.value.trim();
        const profileBioRequired = !bio;
        const profileBioMaxLength = bio.length > BIO_MAX_LENGTH;
        if (profileBioRequired) {
            return { profileBioRequired };
        }
        return finalizeValidationResult({ profileBioRequired, profileBioMaxLength });
    }
}


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map