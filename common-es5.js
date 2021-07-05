function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/shared/validation/field-spec.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/validation/field-spec.ts ***!
    \*************************************************/

  /*! exports provided: FieldSpecs */

  /***/
  function srcAppSharedValidationFieldSpecTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FieldSpecs", function () {
      return FieldSpecs;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    function finalizeValidationResult(result) {
      var newResult = {};
      Object.keys(result).forEach(function (property) {
        if (result[property]) {
          newResult[property] = true;
        }
      });

      if (newResult) {
        return newResult;
      }

      return null;
    }

    var USER_NAME_MIN_LENGTH = 6;
    var USER_NAME_PATTERN = new RegExp(/^[a-zA-Z0-9]+$/);
    var NAME_MAX_LENGTH = 50;
    var COMPANY_MAX_LENGTH = 50;
    var EMAIL_PATTERN = new RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/);
    var PASSWORD_MIN_LENGTH = 8;
    var PASSWORD_NONALPHABETIC_PATTERN = new RegExp(/[^a-zA-Z]+/);
    var PASSWORD_ALPHABETIC_PATTERN = new RegExp(/[a-zA-Z]{4,}/);
    var PROFILE_LOCATION_MAX_LENGTH = 100;
    var BIO_MAX_LENGTH = 255;

    var FieldSpecs = /*#__PURE__*/function () {
      function FieldSpecs() {
        _classCallCheck(this, FieldSpecs);
      }

      _createClass(FieldSpecs, null, [{
        key: "usernameValidator",
        value: function usernameValidator(control) {
          var username = control.value.trim();
          var usernameRequired = !username;
          var usernameMinLength = username.length < USER_NAME_MIN_LENGTH;
          var usernamePattern = !USER_NAME_PATTERN.test(username);

          if (usernameRequired) {
            return {
              usernameRequired: usernameRequired
            };
          }

          return finalizeValidationResult({
            usernameRequired: usernameRequired,
            usernameMinLength: usernameMinLength,
            usernamePattern: usernamePattern
          });
        }
      }, {
        key: "fieldRequiredValidator",
        value: function fieldRequiredValidator(validatorName) {
          var trimValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return function (control) {
            var value = control.value;

            if (trimValue) {
              value = value.trim();
            }

            var result = {};
            result[validatorName] = !value;
            return finalizeValidationResult(result);
          };
        }
      }, {
        key: "fieldMaxLengthValidator",
        value: function fieldMaxLengthValidator(validatorName) {
          var trimValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          var maxLength = arguments.length > 2 ? arguments[2] : undefined;
          return function (control) {
            var value = control.value;

            if (trimValue) {
              value = value.trim();
            }

            var result = {};

            if (value.length > maxLength) {
              result[validatorName] = true;
              control.setErrors(result);
            }

            return finalizeValidationResult(result);
          };
        }
      }, {
        key: "nameValidator",
        value: function nameValidator(control) {
          var name = control.value.trim();
          var nameRequired = !name;
          var nameMaxLength = name.length > NAME_MAX_LENGTH;

          if (nameRequired) {
            return {
              nameRequired: nameRequired
            };
          }

          return finalizeValidationResult({
            nameRequired: nameRequired,
            nameMaxLength: nameMaxLength
          });
        }
      }, {
        key: "companyValidator",
        value: function companyValidator(control) {
          var company = control.value.trim();
          var companyRequired = !company;
          var companyMaxLength = company.length > COMPANY_MAX_LENGTH;

          if (companyRequired) {
            return {
              companyRequired: companyRequired
            };
          }

          return finalizeValidationResult({
            companyRequired: companyRequired,
            companyMaxLength: companyMaxLength
          });
        }
      }, {
        key: "emailValidator",
        value: function emailValidator(control) {
          var email = control.value.trim();
          var emailRequired = !email;
          var emailPattern = !EMAIL_PATTERN.test(email);

          if (emailRequired) {
            return {
              emailRequired: emailRequired
            };
          }

          return finalizeValidationResult({
            emailRequired: emailRequired,
            emailPattern: emailPattern
          });
        }
      }, {
        key: "passwordValidator",
        value: function passwordValidator(control) {
          var password = control.value;
          var passwordRequired = !password;
          var passwordAlphabeticChars = !PASSWORD_ALPHABETIC_PATTERN.test(password);
          var passwordNonAlphabetucChars = !PASSWORD_NONALPHABETIC_PATTERN.test(password);
          var passwordMinLength = password.length < PASSWORD_MIN_LENGTH;

          if (passwordRequired) {
            return {
              passwordRequired: passwordRequired
            };
          }

          return finalizeValidationResult({
            passwordRequired: passwordRequired,
            passwordAlphabeticChars: passwordAlphabeticChars,
            passwordNonAlphabetucChars: passwordNonAlphabetucChars,
            passwordMinLength: passwordMinLength
          });
        }
      }, {
        key: "simplePasswordValidator",
        value: function simplePasswordValidator(control) {
          var password = control.value;
          var passwordRequired = !password;
          var passwordMinLength = password.length < PASSWORD_MIN_LENGTH;

          if (passwordRequired) {
            return {
              passwordRequired: passwordRequired
            };
          }

          return finalizeValidationResult({
            passwordRequired: passwordRequired,
            passwordMinLength: passwordMinLength
          });
        }
      }, {
        key: "profileLocationValidator",
        value: function profileLocationValidator(control) {
          var location = control.value.trim();
          var profileLocationRequired = !location;
          var profileLocationMaxLength = location.length > PROFILE_LOCATION_MAX_LENGTH;

          if (profileLocationRequired) {
            return {
              profileLocationRequired: profileLocationRequired
            };
          }

          return finalizeValidationResult({
            profileLocationRequired: profileLocationRequired,
            profileLocationMaxLength: profileLocationMaxLength
          });
        }
      }, {
        key: "profileBioValidator",
        value: function profileBioValidator(control) {
          var bio = control.value.trim();
          var profileBioRequired = !bio;
          var profileBioMaxLength = bio.length > BIO_MAX_LENGTH;

          if (profileBioRequired) {
            return {
              profileBioRequired: profileBioRequired
            };
          }

          return finalizeValidationResult({
            profileBioRequired: profileBioRequired,
            profileBioMaxLength: profileBioMaxLength
          });
        }
      }]);

      return FieldSpecs;
    }();
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map