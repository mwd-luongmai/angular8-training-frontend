function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-authentication-authentication-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/features/authentication/login/login.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/authentication/login/login.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturesAuthenticationLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"flex-comp-container\">\n  <mat-card>\n    <mat-card-title>Login</mat-card-title>\n    <mat-card-content>\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n        <form-input\n          formControlName=\"username\"\n          [errors]=\"f.username.errors\"\n          [errorVisible]=\"submitted\"\n          [placeholder]=\"'Username or Email'\"\n          [icon]=\"'email'\"\n        ></form-input>\n\n        <form-input\n          formControlName=\"password\"\n          [type]=\"'password'\"\n          [errors]=\"f.password.errors\"\n          [errorVisible]=\"submitted\"\n          [placeholder]=\"'Password'\"\n          [icon]=\"'lock'\"\n        ></form-input>\n\n        <button mat-raised-button [disabled]=\"loading\" color=\"primary\">\n          <mat-icon><i class=\"material-icons md-dark\">done</i></mat-icon>\n          Login\n        </button>\n        <a mat-button routerLink=\"/users/register\" class=\"btn btn-link\">\n          <mat-icon><i class=\"material-icons md-dark\">person_add</i></mat-icon>\n          Register\n        </a>\n        <a mat-button routerLink=\"/users/forgot-password\" class=\"btn btn-link\">\n          <mat-icon\n            ><i class=\"material-icons md-dark\">contact_support</i></mat-icon\n          >\n          Forgot Password\n        </a>\n      </form>\n    </mat-card-content>\n  </mat-card>\n  <app-loading [visible]=\"loading\"></app-loading>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/features/authentication/authentication-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/features/authentication/authentication-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: AuthenticationRoutingModule */

  /***/
  function srcAppFeaturesAuthenticationAuthenticationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationRoutingModule", function () {
      return AuthenticationRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/features/authentication/login/login.component.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var routes = [{
      path: '',
      redirectTo: '/auth/login',
      pathMatch: 'full'
    }, {
      path: '',
      children: [{
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
      }]
    }];

    var AuthenticationRoutingModule = function AuthenticationRoutingModule() {
      _classCallCheck(this, AuthenticationRoutingModule);
    };

    AuthenticationRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })], AuthenticationRoutingModule);
    /***/
  },

  /***/
  "./src/app/features/authentication/authentication.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/features/authentication/authentication.module.ts ***!
    \******************************************************************/

  /*! exports provided: AuthenticationModule */

  /***/
  function srcAppFeaturesAuthenticationAuthenticationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function () {
      return AuthenticationModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _authentication_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./authentication-routing.module */
    "./src/app/features/authentication/authentication-routing.module.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/features/authentication/login/login.component.ts");
    /* harmony import */


    var _app_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/shared */
    "./src/app/shared/index.ts");
    /* harmony import */


    var _app_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/core */
    "./src/app/core/index.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AuthenticationModule = function AuthenticationModule() {
      _classCallCheck(this, AuthenticationModule);
    };

    AuthenticationModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _authentication_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthenticationRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _app_shared__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _app_core__WEBPACK_IMPORTED_MODULE_6__["CustomMaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]
    })], AuthenticationModule);
    /***/
  },

  /***/
  "./src/app/features/authentication/login/login.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/features/authentication/login/login.component.ts ***!
    \******************************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppFeaturesAuthenticationLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _core_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @core/services */
    "./src/app/core/services/index.ts");
    /* harmony import */


    var _app_shared_validation_field_spec__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/shared/validation/field-spec */
    "./src/app/shared/validation/field-spec.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(formBuilder, route, router, authenticationService, alertService) {
        _classCallCheck(this, LoginComponent);

        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false; // redirect to home if already logged in

        if (this.authenticationService.currentUserValue) {
          this.router.navigate(['/']);
        }
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginForm = this.formBuilder.group({
            username: ['', [_app_shared_validation_field_spec__WEBPACK_IMPORTED_MODULE_5__["FieldSpecs"].fieldRequiredValidator('usernameRequired')]],
            password: ['', [_app_shared_validation_field_spec__WEBPACK_IMPORTED_MODULE_5__["FieldSpecs"].fieldRequiredValidator('passwordRequired')]]
          }); // get return url from route parameters or default to '/'

          this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        } // convenience getter for easy access to form fields

      }, {
        key: "f",
        get: function get() {
          return this.loginForm.controls;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this = this;

          this.submitted = true; // stop here if form is invalid

          if (this.loginForm.invalid) {
            return;
          }

          this.loading = true;
          this.authenticationService.login(this.f.username.value, this.f.password.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function () {
            _this.router.navigate([_this.returnUrl]);
          }, function (error) {
            _this.alertService.error(error);

            _this.loading = false;
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _core_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
      }, {
        type: _core_services__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
      }];
    };

    LoginComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/features/authentication/login/login.component.html"))["default"]
    }), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _core_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"], _core_services__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])], LoginComponent);
    /***/
  },

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
    var USER_NAME_PATTERN = new RegExp('^[a-zA-Z0-9]+$');
    var NAME_MAX_LENGTH = 50;
    var COMPANY_MAX_LENGTH = 50;
    var EMAIL_PATTERN = new RegExp('^[^@]+@[^@]+$');
    var PASSWORD_MIN_LENGTH = 8;
    var PASSWORD_NONALPHABETIC_PATTERN = new RegExp('[^a-zA-Z]+');
    var PASSWORD_ALPHABETIC_PATTERN = new RegExp('[a-zA-Z]{4,}');
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
//# sourceMappingURL=features-authentication-authentication-module-es5.js.map