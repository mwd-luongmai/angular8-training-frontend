function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-user-user-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/features/user/active-user/active-user.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/user/active-user/active-user.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturesUserActiveUserActiveUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card>\n    <mat-card-content>\n        <div *ngIf=\"loading\" style=\"text-align: center;\">\n            <h3>Please wait while we activate your account...</h3>\n        </div>\n        <div *ngIf=\"isActivated && !loading\" style=\"text-align: center;\">\n            <h3>Your account has been activated!</h3>\n            <button mat-raised-button routerLink='/auth/login'>Sign In Now</button>\n        </div>\n        <div *ngIf=\"!isActivated && !loading\" style=\"text-align: center;\">\n            <h3>This activation link is invalid. Please try again.</h3>\n            <button mat-raised-button routerLink='/'>Go Home</button>\n        </div>\n    </mat-card-content>\n</mat-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/features/user/change-password/change-password.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/user/change-password/change-password.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturesUserChangePasswordChangePasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"flex-comp-container\">\n  <mat-card>\n    <mat-card-title>Change Password</mat-card-title>\n    <mat-card-content>\n      <form [formGroup]=\"changePassForm\" (ngSubmit)=\"onSubmit()\">\n        <form-input\n          formControlName=\"oldPassword\"\n          [type]=\"'password'\"\n          [errors]=\"formControls.oldPassword.errors\"\n          [errorVisible]=\"submitted\"\n          [placeholder]=\"'Your old password'\"\n          [icon]=\"'lock'\"\n        ></form-input>\n\n        <form-input\n          formControlName=\"password\"\n          [type]=\"'password'\"\n          [errors]=\"formControls.password.errors\"\n          [errorVisible]=\"submitted\"\n          [placeholder]=\"'Your new password'\"\n          [icon]=\"'lock'\"\n        ></form-input>\n\n        <form-input\n          formControlName=\"confirmPassword\"\n          [type]=\"'password'\"\n          [errors]=\"formControls.confirmPassword.errors\"\n          [errorVisible]=\"submitted\"\n          [placeholder]=\"'Your confirmed password'\"\n          [icon]=\"'lock'\"\n        ></form-input>\n\n        <button mat-raised-button [disabled]=\"loading\" color=\"primary\">\n          <mat-icon><i class=\"material-icons md-dark\">done</i></mat-icon>\n          Submit\n        </button>\n       \n      </form>\n    </mat-card-content>\n  </mat-card>\n  <app-loading [visible]=\"loading\"></app-loading>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/features/user/delete-account/delete-account.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/user/delete-account/delete-account.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturesUserDeleteAccountDeleteAccountComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"flex-comp-container\">\n  <form [formGroup]=\"passwordForm\" (ngSubmit)=\"onSubmit()\">\n    <mat-card>\n      <mat-card-title>Delete Account</mat-card-title>\n      <mat-card-content>\n        <p>\n          Hi <b>{{ currentUser.name }}</b\n          >, you are requesting to delete your account.\n        </p>\n        <p>You have to confirm your password to continue the request.</p>\n        <p>The request can not be undone.</p>\n        <br />\n\n        <form-input\n          formControlName=\"password\"\n          [type]=\"'password'\"\n          [errors]=\"formControls.password.errors\"\n          [errorVisible]=\"submitted\"\n          [placeholder]=\"'Password'\"\n          [icon]=\"'lock'\"\n        ></form-input>\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-raised-button [disabled]=\"loading\" color=\"primary\">\n          <mat-icon><i class=\"material-icons md-dark\">send</i></mat-icon\n          >Send\n        </button>\n        <a mat-button routerLink=\"/\" class=\"btn btn-link\">\n          <mat-icon><i class=\"material-icons md-dark\">cancel</i></mat-icon\n          >Cancel\n        </a>\n      </mat-card-actions>\n    </mat-card>\n  </form>\n  <app-loading [visible]=\"loading\"></app-loading>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/features/user/dialog/dialog.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/user/dialog/dialog.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturesUserDialogDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 mat-dialog-title *ngIf=\"data.type =='add'\">Assign skill</h1>\n<h1 mat-dialog-title *ngIf=\"data.type =='update'\">Update skill</h1>\n<div mat-dialog-content [formGroup]=\"assignSkillForm\">\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Skill name</mat-label>\n    <input matInput #input (input)=\"searchSkill(input.value)\" [matAutocomplete]=\"auto\" formControlName=\"skillName\">\n    <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\">\n      <mat-option *ngFor=\"let option of skills$ | async\" [value]=\"option\">\n        {{option.skillName}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Skill level</mat-label>\n    <mat-select formControlName=\"skillLevel\">\n      <mat-option *ngFor=\"let skillLevel of skillLevels\" [value]=\"skillLevel._id\">\n        {{skillLevel.skillLevelName}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">Cancel</button>\n  <button mat-button [mat-dialog-close]=\"animal\" cdkFocusInitial (click)=\"submitForm()\">Submit</button>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/features/user/forgot-password/forgot-password.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/user/forgot-password/forgot-password.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturesUserForgotPasswordForgotPasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"flex-comp-container\">\n  <mat-card>\n    <mat-card-title>Forgot Password</mat-card-title>\n    <mat-card-content>\n      <form [formGroup]=\"forgotPassForm\" (ngSubmit)=\"onSubmit()\">\n        <form-input\n          formControlName=\"email\"\n          [errors]=\"formControls.email.errors\"\n          [errorVisible]=\"submitted\"\n          [placeholder]=\"'Email'\"\n          [icon]=\"'email'\"\n        ></form-input>\n        <button mat-raised-button [disabled]=\"loading\" color=\"primary\">\n          <mat-icon><i class=\"material-icons md-dark\">done</i></mat-icon>\n          Submit\n        </button>\n      </form>\n    </mat-card-content>\n  </mat-card>\n  <app-loading [visible]=\"loading\"></app-loading>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/features/user/profile/profile.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/user/profile/profile.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturesUserProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"flex-comp-container\">\n  <mat-card>\n    <mat-card-title>Update Profile</mat-card-title>\n    <mat-card-content>\n      <form [formGroup]=\"updateProfileForm\" (ngSubmit)=\"onSubmit()\">\n        <input type=\"hidden\" formControlName=\"id\" class=\"form-control\" />\n\n        <form-input\n          formControlName=\"name\"\n          [type]=\"'text'\"\n          [errors]=\"formControls.name.errors\"\n          [errorVisible]=\"submitted\"\n          [placeholder]=\"'Name'\"\n          [icon]=\"'account_box'\"\n        ></form-input>\n\n        <form-input\n          formControlName=\"company\"\n          [type]=\"'text'\"\n          [errors]=\"formControls.company.errors\"\n          [errorVisible]=\"submitted\"\n          [placeholder]=\"'Company'\"\n          [icon]=\"'business'\"\n        ></form-input>\n\n        <form-input\n          formControlName=\"location\"\n          [type]=\"'text'\"\n          [errors]=\"formControls.location.errors\"\n          [errorVisible]=\"submitted\"\n          [placeholder]=\"'Location'\"\n          [icon]=\"'location_on'\"\n        ></form-input>\n\n        <form-input\n          formControlName=\"bio\"\n          [rows]=\"'5'\"\n          [type]=\"'textarea'\"\n          [errors]=\"formControls.bio.errors\"\n          [errorVisible]=\"submitted\"\n          [placeholder]=\"'Bio'\"\n          [icon]=\"'description'\"\n        ></form-input>\n\n        <div>\n          <button\n            mat-raised-button\n            [disabled]=\"loading\"\n            color=\"primary\"\n            type=\"submit\"\n            (click)=\"onSubmit()\"\n          >\n            <mat-icon><i class=\"material-icons md-dark\">done</i></mat-icon\n            >Done\n          </button>\n          <a mat-button routerLink=\"/\" class=\"btn btn-link\">\n            <mat-icon><i class=\"material-icons md-dark\">cancel</i></mat-icon\n            >Cancel\n          </a>\n        </div>\n      </form>\n    </mat-card-content>\n    <mat-card-actions class=\"profile-actions\">\n      <a mat-button routerLink=\"/user/change-password\">\n        <mat-icon><i class=\"material-icons md-dark\">edit</i></mat-icon\n        >Change Password\n      </a>\n      <a mat-button routerLink=\"/user/delete\">\n        <mat-icon><i class=\"material-icons md-dark\">delete</i></mat-icon\n        >Delete Account\n      </a>\n    </mat-card-actions>\n  </mat-card>\n  <app-loading [visible]=\"loading\"></app-loading>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/features/user/reset-password/reset-password.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/user/reset-password/reset-password.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturesUserResetPasswordResetPasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"flex-comp-container\">\n  <mat-card>\n    <mat-card-title>Reset Password</mat-card-title>\n    <mat-card-content>\n      <form [formGroup]=\"resetPassForm\" (ngSubmit)=\"onSubmit()\">\n        <form-input\n          formControlName=\"password\"\n          [type]=\"'password'\"\n          [errors]=\"formControls.password.errors\"\n          [errorVisible]=\"submitted\"\n          [placeholder]=\"'Password'\"\n          [icon]=\"'lock'\"\n        ></form-input>\n        <form-input\n        formControlName=\"confirmPassword\"\n        [type]=\"'password'\"\n        [errors]=\"formControls.confirmPassword.errors\"\n        [errorVisible]=\"submitted\"\n        [placeholder]=\"'Password'\"\n        [icon]=\"'lock'\"\n      ></form-input>\n      <validation-messages [errors]=\"resetPassForm.errors\"></validation-messages>\n        <button mat-raised-button [disabled]=\"loading\" color=\"primary\">\n          <mat-icon><i class=\"material-icons md-dark\">done</i></mat-icon>\n          Submit\n        </button>\n      </form>\n    </mat-card-content>\n  </mat-card>\n  <app-loading [visible]=\"loading\"></app-loading>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/features/user/search-user/search-user.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/user/search-user/search-user.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturesUserSearchUserSearchUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n    <mat-card>\n        <mat-card-title>Search User</mat-card-title>\n        <mat-card-content>\n            <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"searchForm\">\n                <form-select \n                formControlName=\"method\"\n                [errors]=\"formControls.method.errors\" \n                [errorVisible]=\"submitted\"\n                [icon]=\"'list'\"\n                [options]=\"options\"\n                [label]=\"'Search Category'\"\n                ></form-select>\n                \n                <mat-form-field>\n                    <mat-icon matPrefix><i class=\"material-icons md-dark\">input</i></mat-icon>\n                    <input matInput placeholder=\"Enter a keyword\" type=\"text\" formControlName=\"keyword\" class=\"form-control\"\n                        maxlength=\"{{ maxLengthSearch }}\" />\n                </mat-form-field>\n\n                <button mat-raised-button color=\"primary\">\n                    <mat-icon><i class=\"material-icons md-dark\">search</i></mat-icon>Search\n                </button>\n            </form>\n        </mat-card-content>\n        <div *ngIf=\"isShowResult\" class=\"row search-result\">\n            <p *ngIf=\"isNotFound\" class=\"not-found\">\n                There is not any user matching with the search.\n            </p>\n            <div *ngIf=\"!isNotFound\">\n                <p class=\"not-found\" *ngIf=\"users.length > 1\">\n                    {{ users.length }} users has been found.\n                </p>\n                <p class=\"not-found\" *ngIf=\"users.length === 1\">\n                    1 user has been found.\n                </p>\n        \n                <app-table-basic-responsive [dataSource]=\"dataSource\" [dataColumn]=\"dataColumn\"></app-table-basic-responsive>\n            </div>\n        </div>\n    </mat-card>\n    <app-loading [visible]=\"loading\"></app-loading>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/features/user/sign-up/sign-up.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/user/sign-up/sign-up.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturesUserSignUpSignUpComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n    <mat-card>\n        <mat-card-title>Register User</mat-card-title>\n        <mat-card-content>\n            <form [formGroup]=\"signUpForm\" (ngSubmit)=\"onSubmit()\">\n                <form-input formControlName=\"name\" [errors]=\"formControls.name.errors\" [type]=\"'text'\" [errorVisible]=\"submitted\"\n                    [placeholder]=\"'Name'\" [icon]=\"'account_circle'\"></form-input>\n                <form-input formControlName=\"username\" [errors]=\"formControls.username.errors\" [type]=\"'text'\"\n                    [errorVisible]=\"submitted\" [placeholder]=\"'Username'\" [icon]=\"'person'\"></form-input>\n                <form-input formControlName=\"email\" [errors]=\"formControls.email.errors\" [type]=\"'text'\" [errorVisible]=\"submitted\"\n                    [placeholder]=\"'Email'\" [icon]=\"'email'\"></form-input>\n                <form-input formControlName=\"password\" [errors]=\"formControls.password.errors\" [type]=\"'password'\"\n                    [errorVisible]=\"submitted\" [placeholder]=\"'Password'\" [icon]=\"'password'\"></form-input>\n                <button mat-raised-button [disabled]=\"loading\" color=\"primary\">\n                    <mat-icon><i class=\"material-icons md-dark\">done</i></mat-icon>\n                    Sign Up\n                </button>\n                <a [routerLink]=\"['/']\" routerLinkActive=\"router-link-active\" class=\"btn btn-link\" mat-button>\n                    <mat-icon><i class=\"material-icons md-dark\">cancel</i></mat-icon>\n                    Cancel\n                </a>\n            </form>\n        </mat-card-content>\n    </mat-card>\n    <app-loading [visible]=\"loading\"></app-loading>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/features/user/user-skills/user-skills.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/user/user-skills/user-skills.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeaturesUserUserSkillsUserSkillsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div><h1> User Skills</h1></div>\n<div class=\"right\">\n  <button (click)=\"openDialog()\" mat-raised-button [disabled]=\"loading\" color=\"primary\">\n    <mat-icon><i class=\"material-icons md-dark\">add</i></mat-icon\n    > Add skill\n  </button>\n</div>\n\n<div class=\"user-skill-table\">User's skills</div>\n<br>\n<div class=\"mat-elevation-z8 user-skill-table\" *ngIf=\"userSkills.length > 0 \">\n  <table mat-table [dataSource]=\"dataSource\">\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"skillName\">\n      <th mat-header-cell *matHeaderCellDef> Skill Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{ element.skillName }} </td>\n    </ng-container>\n\n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"skillLevel\">\n      <th mat-header-cell *matHeaderCellDef> Skill level </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.skillLevel}} </td>\n    </ng-container>\n\n\n    <ng-container matColumnDef=\"actions\">\n      <th mat-header-cell *matHeaderCellDef> Actions </th>\n      <td mat-cell *matCellDef=\"let element\"> \n        <button *ngIf=\"element.actions.update == true \" (click)=\"updateSkill(element)\"> Update </button>\n        <button *ngIf=\"element.actions.delete == true \" (click)=\"deleteSkill(element)\"> Delete </button>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/features/user/active-user/active-user.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/features/user/active-user/active-user.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeaturesUserActiveUserActiveUserComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3VzZXIvYWN0aXZlLXVzZXIvYWN0aXZlLXVzZXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/features/user/active-user/active-user.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/features/user/active-user/active-user.component.ts ***!
    \********************************************************************/

  /*! exports provided: ActiveUserComponent */

  /***/
  function srcAppFeaturesUserActiveUserActiveUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActiveUserComponent", function () {
      return ActiveUserComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../core/services/user/user.service */
    "./src/app/core/services/user/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

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

    var ActiveUserComponent = /*#__PURE__*/function () {
      function ActiveUserComponent(userService, activeRoute) {
        _classCallCheck(this, ActiveUserComponent);

        this.userService = userService;
        this.activeRoute = activeRoute;
        this.loading = false;
        this.isActivated = false;
      }

      _createClass(ActiveUserComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this = this;

          if (this.userId) {
            this.activeSub = this.userService.active(this.userId).subscribe(function () {
              _this.loading = false;
              _this.isActivated = true;
            }, function (error) {
              _this.loading = false;
              _this.isActivated = false;
            });
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loading = true;
          this.userId = this.activeRoute.snapshot.paramMap.get('id');
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.activeSub) {
            this.activeSub.unsubscribe();
          }
        }
      }]);

      return ActiveUserComponent;
    }();

    ActiveUserComponent.ctorParameters = function () {
      return [{
        type: _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    ActiveUserComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-active-user',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./active-user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/features/user/active-user/active-user.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./active-user.component.scss */
      "./src/app/features/user/active-user/active-user.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_core_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], ActiveUserComponent);
    /***/
  },

  /***/
  "./src/app/features/user/change-password/change-password.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/features/user/change-password/change-password.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeaturesUserChangePasswordChangePasswordComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".m-container .mat-form-field + .mat-form-field {\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdW9uZy5tYWkvTVdELVdPUksvVFJBSU5JTkcvQU5HVUxBUl84X1RSQUlOSU5HL3N3YXRhbmcvYW5ndWxhcjgtdHJhaW5pbmctZnJvbnRlbmQvc3JjL2FwcC9mZWF0dXJlcy91c2VyL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZlYXR1cmVzL3VzZXIvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy91c2VyL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubS1jb250YWluZXIgLm1hdC1mb3JtLWZpZWxkICsgLm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn0iLCIubS1jb250YWluZXIgLm1hdC1mb3JtLWZpZWxkICsgLm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/features/user/change-password/change-password.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/features/user/change-password/change-password.component.ts ***!
    \****************************************************************************/

  /*! exports provided: ChangePasswordComponent */

  /***/
  function srcAppFeaturesUserChangePasswordChangePasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function () {
      return ChangePasswordComponent;
    });
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @core/services */
    "./src/app/core/services/index.ts");
    /* harmony import */


    var _app_shared_validation_field_spec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/shared/validation/field-spec */
    "./src/app/shared/validation/field-spec.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_shared_validation_field_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/shared/validation/field-validator */
    "./src/app/shared/validation/field-validator.ts");

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

    var ChangePasswordComponent = /*#__PURE__*/function () {
      function ChangePasswordComponent(formBuilder, userService, alertService, authenticateService) {
        _classCallCheck(this, ChangePasswordComponent);

        this.formBuilder = formBuilder;
        this.userService = userService;
        this.alertService = alertService;
        this.authenticateService = authenticateService;
        this.loading = false;
        this.submitted = false;
      }

      _createClass(ChangePasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.currentUserSubscription = this.authenticateService.currentUser.subscribe(function (user) {
            _this2.currentUser = user;
          });
          this.changePassForm = this.formBuilder.group({
            oldPassword: ['', [_app_shared_validation_field_spec__WEBPACK_IMPORTED_MODULE_2__["FieldSpecs"].passwordValidator]],
            password: ['', [_app_shared_validation_field_spec__WEBPACK_IMPORTED_MODULE_2__["FieldSpecs"].passwordValidator]],
            confirmPassword: ['', [_app_shared_validation_field_spec__WEBPACK_IMPORTED_MODULE_2__["FieldSpecs"].passwordValidator]]
          }, {
            validator: _app_shared_validation_field_validator__WEBPACK_IMPORTED_MODULE_4__["FieldValidators"].matchPassword
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.currentUserSubscription) {
            this.currentUserSubscription.unsubscribe();
          }
        }
      }, {
        key: "formControls",
        get: function get() {
          return this.changePassForm.controls;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this3 = this;

          this.submitted = true;

          if (this.changePassForm.invalid) {
            return;
          }

          this.loading = true;
          this.userService.changePassword(this.currentUser.id, this.formControls.oldPassword.value, this.formControls.password.value).subscribe(function (re) {
            _this3.loading = false;
            _this3.submitted = false;

            _this3.alertService.success("Your password has been reset successfully");
          }, function (error) {
            _this3.alertService.error(error);

            _this3.loading = false;
          });
        }
      }]);

      return ChangePasswordComponent;
    }();

    ChangePasswordComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]
      }, {
        type: _core_services__WEBPACK_IMPORTED_MODULE_1__["UserService"]
      }, {
        type: _core_services__WEBPACK_IMPORTED_MODULE_1__["AlertService"]
      }, {
        type: _core_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
      }];
    };

    ChangePasswordComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: "app-change-password",
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./change-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/features/user/change-password/change-password.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./change-password.component.scss */
      "./src/app/features/user/change-password/change-password.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"], _core_services__WEBPACK_IMPORTED_MODULE_1__["UserService"], _core_services__WEBPACK_IMPORTED_MODULE_1__["AlertService"], _core_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])], ChangePasswordComponent);
    /***/
  },

  /***/
  "./src/app/features/user/delete-account/delete-account.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/features/user/delete-account/delete-account.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeaturesUserDeleteAccountDeleteAccountComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".flex-comp-container {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  align-items: stretch;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdW9uZy5tYWkvTVdELVdPUksvVFJBSU5JTkcvQU5HVUxBUl84X1RSQUlOSU5HL3N3YXRhbmcvYW5ndWxhcjgtdHJhaW5pbmctZnJvbnRlbmQvc3JjL2FwcC9mZWF0dXJlcy91c2VyL2RlbGV0ZS1hY2NvdW50L2RlbGV0ZS1hY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy91c2VyL2RlbGV0ZS1hY2NvdW50L2RlbGV0ZS1hY2NvdW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvdXNlci9kZWxldGUtYWNjb3VudC9kZWxldGUtYWNjb3VudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZsZXggUmVzcG9uc2l2ZVxuLmZsZXgtY29tcC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG4iLCIuZmxleC1jb21wLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/features/user/delete-account/delete-account.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/features/user/delete-account/delete-account.component.ts ***!
    \**************************************************************************/

  /*! exports provided: DeleteAccountComponent */

  /***/
  function srcAppFeaturesUserDeleteAccountDeleteAccountComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeleteAccountComponent", function () {
      return DeleteAccountComponent;
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


    var _core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @core/services */
    "./src/app/core/services/index.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
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

    var DeleteAccountComponent = /*#__PURE__*/function () {
      function DeleteAccountComponent(formBuilder, authenticateService, userService, alertService, router) {
        _classCallCheck(this, DeleteAccountComponent);

        this.formBuilder = formBuilder;
        this.authenticateService = authenticateService;
        this.userService = userService;
        this.alertService = alertService;
        this.router = router;
        this.loading = false;
        this.submitted = false;
        this.deleted = false;
      }

      _createClass(DeleteAccountComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.currentUserSubscription = this.authenticateService.currentUser.subscribe(function (user) {
            _this4.currentUser = user;
          });
          this.passwordForm = this.formBuilder.group({
            password: ['', _app_shared_validation_field_spec__WEBPACK_IMPORTED_MODULE_5__["FieldSpecs"].passwordValidator]
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.currentUserSubscription) {
            this.currentUserSubscription.unsubscribe();
          }
        }
      }, {
        key: "formControls",
        get: function get() {
          return this.passwordForm.controls;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this5 = this;

          this.submitted = true;

          if (this.passwordForm.invalid) {
            return;
          }

          this.loading = true;
          this.userService.deleteAccount(this.currentUser.id, this.formControls.password.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (_) {
            _this5.deleted = true;

            _this5.authenticateService.invalidate();

            _this5.router.navigate(['/login']);

            _this5.alertService.success('Your account has been deleted.', true);
          }, function (error) {
            _this5.alertService.error(error);

            _this5.loading = false;
          });
        }
      }]);

      return DeleteAccountComponent;
    }();

    DeleteAccountComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }, {
        type: _core_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }, {
        type: _core_services__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _core_services__WEBPACK_IMPORTED_MODULE_3__["AlertService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    DeleteAccountComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-delete-account',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./delete-account.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/features/user/delete-account/delete-account.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./delete-account.component.scss */
      "./src/app/features/user/delete-account/delete-account.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _core_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _core_services__WEBPACK_IMPORTED_MODULE_3__["UserService"], _core_services__WEBPACK_IMPORTED_MODULE_3__["AlertService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], DeleteAccountComponent);
    /***/
  },

  /***/
  "./src/app/features/user/dialog/dialog.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/features/user/dialog/dialog.component.ts ***!
    \**********************************************************/

  /*! exports provided: DialogComponent */

  /***/
  function srcAppFeaturesUserDialogDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogComponent", function () {
      return DialogComponent;
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


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _app_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/core */
    "./src/app/core/index.ts");
    /* harmony import */


    var json2typescript__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! json2typescript */
    "./node_modules/json2typescript/index.js");
    /* harmony import */


    var json2typescript__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(json2typescript__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

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

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var DialogComponent = /*#__PURE__*/function () {
      function DialogComponent(dialogRef, data, formBuilder, skillService, alertService, authenticateService) {
        var _this6 = this;

        _classCallCheck(this, DialogComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
        this.skillService = skillService;
        this.alertService = alertService;
        this.authenticateService = authenticateService;

        this.submitForm = function () {
          if (_this6.data && _this6.data.skill) {
            _this6.updateUserSkill();
          } else {
            _this6.assignSkill();
          }
        };

        this.assignSkill = function () {
          var skillId = _this6.assignSkillForm.get('skillName').value._id;

          var skillLevelId = _this6.assignSkillForm.get('skillLevel').value;

          _this6.skillService.assignSkill(skillId, skillLevelId, _this6.currentUser.id).subscribe(function (message) {
            _this6.data.notify.subscribe(function (m) {
              return m;
            });

            _this6.alertService.success(message);
          });
        };

        this.updateUserSkill = function () {
          var skillId = _this6.assignSkillForm.get('skillName').value._id;

          var skillLevelId = _this6.assignSkillForm.get('skillLevel').value;

          _this6.skillService.updateUserSkill(_this6.data.id, skillId, skillLevelId, _this6.currentUser.id).subscribe(function (message) {
            _this6.data.notify.subscribe(function (m) {
              return m;
            });

            _this6.alertService.success(message);
          });
        };

        this.loadSkill = function (skillId, levelId) {
          _this6.skillService.getSkillProfile(skillId).subscribe(function (item) {
            _this6.assignSkillForm.get('skillName').setValue(item);

            _this6.assignSkillForm.get('skillLevel').setValue(levelId);
          });
        };

        this.searchSkill = function (skillName) {
          console.log(skillName);
          _this6.skills$ = _this6.skillService.searchSkill(skillName).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(10000), // ignore new term if same as previous term
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (item) {
            return _this6.convertJson(item);
          }));
        };
      }

      _createClass(DialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.currentUser = this.authenticateService.currentUserValue;

          if (this.data && this.data.skill) {
            this.skillLevels = this.data.skill.skillLevels;
            this.skills$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])([this.data.skill]);
          }

          this.assignSkillForm = this.formBuilder.group({
            skillName: [this.data.skill ? this.data.skill : ''],
            skillLevel: [this.data.selectedLevel ? this.data.selectedLevel : '']
          });
          this.assignSkillForm.get('skillName').valueChanges.subscribe(function (value) {
            if (value instanceof _app_core__WEBPACK_IMPORTED_MODULE_3__["Skill"]) {
              _this7.skillLevels = value.skillLevels;
            }
          });
        }
      }, {
        key: "convertJson",
        value: function convertJson(skillArray) {
          var jsonConvert = new json2typescript__WEBPACK_IMPORTED_MODULE_4__["JsonConvert"]();
          var lstSkills = jsonConvert.deserializeArray(skillArray, _app_core__WEBPACK_IMPORTED_MODULE_3__["Skill"]);
          return lstSkills;
        }
      }, {
        key: "displayFn",
        value: function displayFn(skill) {
          return skill ? skill.skillName : '';
        }
      }, {
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close();
        }
      }]);

      return DialogComponent;
    }();

    DialogComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }, {
        type: _app_core__WEBPACK_IMPORTED_MODULE_3__["SkillService"]
      }, {
        type: _app_core__WEBPACK_IMPORTED_MODULE_3__["AlertService"]
      }, {
        type: _app_core__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    DialogComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/features/user/dialog/dialog.component.html"))["default"]
    }), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])), __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _app_core__WEBPACK_IMPORTED_MODULE_3__["SkillService"], _app_core__WEBPACK_IMPORTED_MODULE_3__["AlertService"], _app_core__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])], DialogComponent);
    /***/
  },

  /***/
  "./src/app/features/user/forgot-password/forgot-password.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/features/user/forgot-password/forgot-password.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeaturesUserForgotPasswordForgotPasswordComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".m-container .mat-form-field + .mat-form-field {\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdW9uZy5tYWkvTVdELVdPUksvVFJBSU5JTkcvQU5HVUxBUl84X1RSQUlOSU5HL3N3YXRhbmcvYW5ndWxhcjgtdHJhaW5pbmctZnJvbnRlbmQvc3JjL2FwcC9mZWF0dXJlcy91c2VyL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZlYXR1cmVzL3VzZXIvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy91c2VyL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubS1jb250YWluZXIgLm1hdC1mb3JtLWZpZWxkICsgLm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cbiIsIi5tLWNvbnRhaW5lciAubWF0LWZvcm0tZmllbGQgKyAubWF0LWZvcm0tZmllbGQge1xuICBtYXJnaW4tbGVmdDogOHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/features/user/forgot-password/forgot-password.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/features/user/forgot-password/forgot-password.component.ts ***!
    \****************************************************************************/

  /*! exports provided: ForgotPasswordComponent */

  /***/
  function srcAppFeaturesUserForgotPasswordForgotPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
      return ForgotPasswordComponent;
    });
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @core/services */
    "./src/app/core/services/index.ts");
    /* harmony import */


    var _app_shared_validation_field_spec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/shared/validation/field-spec */
    "./src/app/shared/validation/field-spec.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

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

    var ForgotPasswordComponent = /*#__PURE__*/function () {
      function ForgotPasswordComponent(formBuilder, userService, alertService) {
        _classCallCheck(this, ForgotPasswordComponent);

        this.formBuilder = formBuilder;
        this.userService = userService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
      }

      _createClass(ForgotPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.forgotPassForm = this.formBuilder.group({
            email: ["", [_app_shared_validation_field_spec__WEBPACK_IMPORTED_MODULE_2__["FieldSpecs"].emailValidator]]
          });
        }
      }, {
        key: "formControls",
        get: function get() {
          return this.forgotPassForm.controls;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this8 = this;

          this.submitted = true;

          if (this.forgotPassForm.invalid) {
            return;
          }

          this.loading = true;
          this.userService.forgotPassword(this.formControls.email.value, window.location.host).subscribe(function (re) {
            _this8.loading = false;
            _this8.submitted = false;

            _this8.alertService.success("Please check your email to reset your password");
          }, function (error) {
            _this8.alertService.error(error);

            _this8.loading = false;
          });
        }
      }]);

      return ForgotPasswordComponent;
    }();

    ForgotPasswordComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]
      }, {
        type: _core_services__WEBPACK_IMPORTED_MODULE_1__["UserService"]
      }, {
        type: _core_services__WEBPACK_IMPORTED_MODULE_1__["AlertService"]
      }];
    };

    ForgotPasswordComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: "app-forgot-password",
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./forgot-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/features/user/forgot-password/forgot-password.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./forgot-password.component.scss */
      "./src/app/features/user/forgot-password/forgot-password.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"], _core_services__WEBPACK_IMPORTED_MODULE_1__["UserService"], _core_services__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])], ForgotPasswordComponent);
    /***/
  },

  /***/
  "./src/app/features/user/profile/profile.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/features/user/profile/profile.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeaturesUserProfileProfileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".profile-actions {\n  text-align: right;\n}\n\n.flex-comp-container {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  align-items: stretch;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdW9uZy5tYWkvTVdELVdPUksvVFJBSU5JTkcvQU5HVUxBUl84X1RSQUlOSU5HL3N3YXRhbmcvYW5ndWxhcjgtdHJhaW5pbmctZnJvbnRlbmQvc3JjL2FwcC9mZWF0dXJlcy91c2VyL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmVhdHVyZXMvdXNlci9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQ0NGOztBREdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvdXNlci9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1hY3Rpb25zIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi8vIEZsZXggUmVzcG9uc2l2ZVxuLmZsZXgtY29tcC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG5cbi5mbGV4LWNvbXAtaXRlbSB7XG59XG4iLCIucHJvZmlsZS1hY3Rpb25zIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5mbGV4LWNvbXAtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/features/user/profile/profile.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/features/user/profile/profile.component.ts ***!
    \************************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppFeaturesUserProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
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


    var _app_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/core */
    "./src/app/core/index.ts");
    /* harmony import */


    var _app_shared_validation_field_spec__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
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

    var ProfileComponent = /*#__PURE__*/function () {
      function ProfileComponent(formBuilder, alertService, authenticationService, userService, router, cdRef) {
        var _this9 = this;

        _classCallCheck(this, ProfileComponent);

        this.formBuilder = formBuilder;
        this.alertService = alertService;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.router = router;
        this.cdRef = cdRef;
        this.loading = false;
        this.submitted = false;
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(function (x) {
          _this9.currentUser = x;
        });
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.currentUser);
          this.updateProfileForm = this.formBuilder.group({
            id: [''],
            name: ['', _app_shared_validation_field_spec__WEBPACK_IMPORTED_MODULE_4__["FieldSpecs"].nameValidator],
            bio: ['', _app_shared_validation_field_spec__WEBPACK_IMPORTED_MODULE_4__["FieldSpecs"].profileBioValidator],
            company: ['', _app_shared_validation_field_spec__WEBPACK_IMPORTED_MODULE_4__["FieldSpecs"].companyValidator],
            location: ['', _app_shared_validation_field_spec__WEBPACK_IMPORTED_MODULE_4__["FieldSpecs"].profileLocationValidator]
          });
          this.loadProfileData(this.currentUser);
        }
      }, {
        key: "formControls",
        get: function get() {
          return this.updateProfileForm.controls;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this10 = this;

          this.submitted = true;
          this.loading = true;

          if (this.updateProfileForm.invalid) {
            this.loading = false;
            return;
          }

          console.log(this.updateProfileForm.value);
          this.userService.update(this.updateProfileForm.value).subscribe(function (_) {
            _this10.alertService.success('Profile updated successfully.', true);

            _this10.submitted = false;
            _this10.loading = false;

            _this10.router.navigate(['/']);
          }, function (error) {
            _this10.alertService.error(error);

            _this10.submitted = false;
            _this10.loading = false;
          });
        }
      }, {
        key: "loadProfileData",
        value: function loadProfileData(user) {
          if (user) {
            this.updateProfileForm.setValue({
              id: !!user.id ? user.id : '',
              name: !!user.name ? user.name : '',
              bio: !!user.bio ? user.bio : '',
              company: !!user.company ? user.company : '',
              location: !!user.location ? user.location : ''
            });
            this.cdRef.detectChanges();
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.currentUserSubscription) {
            this.currentUserSubscription.unsubscribe();
          }
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }, {
        type: _app_core__WEBPACK_IMPORTED_MODULE_3__["AlertService"]
      }, {
        type: _app_core__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }, {
        type: _app_core__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }];
    };

    ProfileComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-profile',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/features/user/profile/profile.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./profile.component.scss */
      "./src/app/features/user/profile/profile.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _app_core__WEBPACK_IMPORTED_MODULE_3__["AlertService"], _app_core__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _app_core__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/features/user/reset-password/reset-password.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/features/user/reset-password/reset-password.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeaturesUserResetPasswordResetPasswordComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".m-container .mat-form-field + .mat-form-field {\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdW9uZy5tYWkvTVdELVdPUksvVFJBSU5JTkcvQU5HVUxBUl84X1RSQUlOSU5HL3N3YXRhbmcvYW5ndWxhcjgtdHJhaW5pbmctZnJvbnRlbmQvc3JjL2FwcC9mZWF0dXJlcy91c2VyL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy91c2VyL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3VzZXIvcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubS1jb250YWluZXIgLm1hdC1mb3JtLWZpZWxkICsgLm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cbiIsIi5tLWNvbnRhaW5lciAubWF0LWZvcm0tZmllbGQgKyAubWF0LWZvcm0tZmllbGQge1xuICBtYXJnaW4tbGVmdDogOHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/features/user/reset-password/reset-password.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/features/user/reset-password/reset-password.component.ts ***!
    \**************************************************************************/

  /*! exports provided: ResetPasswordComponent */

  /***/
  function srcAppFeaturesUserResetPasswordResetPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function () {
      return ResetPasswordComponent;
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


    var _core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @core/services */
    "./src/app/core/services/index.ts");
    /* harmony import */


    var _app_shared_validation_field_spec__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/shared/validation/field-spec */
    "./src/app/shared/validation/field-spec.ts");
    /* harmony import */


    var _app_shared_validation_field_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/shared/validation/field-validator */
    "./src/app/shared/validation/field-validator.ts");

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

    var ResetPasswordComponent = /*#__PURE__*/function () {
      function ResetPasswordComponent(formBuilder, route, router, userService, alertService) {
        _classCallCheck(this, ResetPasswordComponent);

        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
      }

      _createClass(ResetPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var routeParams = this.route.snapshot.paramMap;
          this.resetToken = routeParams.get("token");
          this.resetPassForm = this.formBuilder.group({
            password: ["", [_app_shared_validation_field_spec__WEBPACK_IMPORTED_MODULE_4__["FieldSpecs"].passwordValidator]],
            confirmPassword: ["", [_app_shared_validation_field_spec__WEBPACK_IMPORTED_MODULE_4__["FieldSpecs"].passwordValidator]]
          }, {
            validator: _app_shared_validation_field_validator__WEBPACK_IMPORTED_MODULE_5__["FieldValidators"].matchPassword
          });
        }
      }, {
        key: "formControls",
        get: function get() {
          return this.resetPassForm.controls;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this11 = this;

          this.submitted = true;

          if (this.resetPassForm.invalid) {
            return;
          }

          this.loading = true;
          this.userService.resetPassword(this.resetToken, this.formControls.password.value).subscribe(function (re) {
            _this11.loading = false;
            _this11.submitted = false;

            _this11.alertService.success("Your password has been reseted successfully!");

            setTimeout(function () {
              _this11.router.navigate(["/"]);
            }, 5000);
          }, function (error) {
            _this11.alertService.error(error);

            _this11.loading = false;
          });
        }
      }]);

      return ResetPasswordComponent;
    }();

    ResetPasswordComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _core_services__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _core_services__WEBPACK_IMPORTED_MODULE_3__["AlertService"]
      }];
    };

    ResetPasswordComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: "app-reset-password",
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./reset-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/features/user/reset-password/reset-password.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./reset-password.component.scss */
      "./src/app/features/user/reset-password/reset-password.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _core_services__WEBPACK_IMPORTED_MODULE_3__["UserService"], _core_services__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])], ResetPasswordComponent);
    /***/
  },

  /***/
  "./src/app/features/user/search-user/search-user.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/features/user/search-user/search-user.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeaturesUserSearchUserSearchUserComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3VzZXIvc2VhcmNoLXVzZXIvc2VhcmNoLXVzZXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/features/user/search-user/search-user.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/features/user/search-user/search-user.component.ts ***!
    \********************************************************************/

  /*! exports provided: SearchUserComponent */

  /***/
  function srcAppFeaturesUserSearchUserSearchUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchUserComponent", function () {
      return SearchUserComponent;
    });
    /* harmony import */


    var _app_core_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @app/core/services */
    "./src/app/core/services/index.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../core/services/user/user.service */
    "./src/app/core/services/user/user.service.ts");
    /* harmony import */


    var _app_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/shared */
    "./src/app/shared/index.ts");

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

    var SearchUserComponent = /*#__PURE__*/function () {
      function SearchUserComponent(formBuilder, userService, alertService) {
        _classCallCheck(this, SearchUserComponent);

        this.formBuilder = formBuilder;
        this.userService = userService;
        this.alertService = alertService;
        this.options = [{
          value: '0',
          text: 'Search by Name'
        }, {
          value: '1',
          text: 'Search by Username'
        }, {
          value: '2',
          text: 'Search by Email'
        }];
        this.submitted = false;
        this.users = [];
        this.isNotFound = false;
        this.isShowResult = false;
        this.maxLengthSearch = _app_shared__WEBPACK_IMPORTED_MODULE_5__["Constants"].MAX_LENGTH_SEARCH;
        this.displayedColumns = ['name', 'username', 'email', 'company', 'location', 'bio'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.users);
        this.dataColumn = {
          displayedColumns: ['name', 'username', 'email', 'company', 'location', 'bio'],
          columnsConfig: [{
            key: 'name',
            name: 'Name'
          }, {
            key: 'username',
            name: 'Username'
          }, {
            key: 'email',
            name: 'Email'
          }, {
            key: 'company',
            name: 'Company'
          }, {
            key: 'location',
            name: 'Location'
          }, {
            key: 'bio',
            name: 'Bio'
          }]
        };
        this.loading = false;
      }

      _createClass(SearchUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.searchForm = this.formBuilder.group({
            method: [this.options[0].value],
            keyword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          });
        }
      }, {
        key: "formControls",
        get: function get() {
          return this.searchForm.controls;
        }
      }, {
        key: "onMethodChanged",
        value: function onMethodChanged(value) {
          this.formControls.method.setValue(value);
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this12 = this;

          this.submitted = true;

          if (this.searchForm.invalid) {
            this.isShowResult = false;
            return;
          }

          var keyValue = this.formControls.keyword.value;
          var searchMethod = this.formControls.method.value;

          if (keyValue) {
            this.userService.search(searchMethod, this.processSearchInput(keyValue)).subscribe(function (users) {
              _this12.users = users;
              _this12.dataSource.data = users;
              _this12.dataSource.sort = _this12.sort;
              _this12.isShowResult = true;
              _this12.isNotFound = _this12.users.length === 0;
            }, function (error) {
              _this12.alertService.error(error);

              _this12.submitted = false;
              _this12.isShowResult = false;
            });
          }
        }
      }, {
        key: "processSearchInput",
        value: function processSearchInput(keyValue) {
          var searchKeyword = keyValue;

          if (searchKeyword.length > this.maxLengthSearch) {
            searchKeyword = searchKeyword.substr(0, this.maxLengthSearch);
            this.formControls.keyword.setValue(searchKeyword);
          }

          searchKeyword = encodeURIComponent(searchKeyword);
          return searchKeyword;
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.dataSource.sort = this.sort;
        }
      }]);

      return SearchUserComponent;
    }();

    SearchUserComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: _app_core_services__WEBPACK_IMPORTED_MODULE_0__["AlertService"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], {
      "static": false
    }), __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])], SearchUserComponent.prototype, "sort", void 0);

    SearchUserComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-search-user',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./search-user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/features/user/search-user/search-user.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./search-user.component.scss */
      "./src/app/features/user/search-user/search-user.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _core_services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _app_core_services__WEBPACK_IMPORTED_MODULE_0__["AlertService"]])], SearchUserComponent);
    /***/
  },

  /***/
  "./src/app/features/user/sign-up/sign-up.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/features/user/sign-up/sign-up.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeaturesUserSignUpSignUpComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3VzZXIvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/features/user/sign-up/sign-up.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/features/user/sign-up/sign-up.component.ts ***!
    \************************************************************/

  /*! exports provided: SignUpComponent */

  /***/
  function srcAppFeaturesUserSignUpSignUpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpComponent", function () {
      return SignUpComponent;
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


    var _app_shared_validation_field_spec__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/shared/validation/field-spec */
    "./src/app/shared/validation/field-spec.ts");
    /* harmony import */


    var _core_services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../core/services/authentication/authentication.service */
    "./src/app/core/services/authentication/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _core_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../core/services/alert/alert.service */
    "./src/app/core/services/alert/alert.service.ts");

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

    var SignUpComponent = /*#__PURE__*/function () {
      function SignUpComponent(formBuilder, authenticateService, router, alertService, activeRoute) {
        _classCallCheck(this, SignUpComponent);

        this.formBuilder = formBuilder;
        this.authenticateService = authenticateService;
        this.router = router;
        this.alertService = alertService;
        this.activeRoute = activeRoute;
        this.submitted = false;
        this.loading = false;
        this.returnURL = "";
      }

      _createClass(SignUpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.signUpForm = this.formBuilder.group({
            name: ['', [_app_shared_validation_field_spec__WEBPACK_IMPORTED_MODULE_2__["FieldSpecs"].nameValidator]],
            username: ['', [_app_shared_validation_field_spec__WEBPACK_IMPORTED_MODULE_2__["FieldSpecs"].usernameValidator]],
            email: ['', [_app_shared_validation_field_spec__WEBPACK_IMPORTED_MODULE_2__["FieldSpecs"].emailValidator]],
            password: ['', [_app_shared_validation_field_spec__WEBPACK_IMPORTED_MODULE_2__["FieldSpecs"].passwordValidator]]
          });
          this.returnURL = this.activeRoute.snapshot.queryParams['returnUrl'] || '/';
        }
      }, {
        key: "formControls",
        get: function get() {
          return this.signUpForm.controls;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this13 = this;

          this.submitted = true;

          if (this.signUpForm.invalid) {
            return;
          }

          this.loading = true;
          var name = this.formControls.name.value;
          var username = this.formControls.username.value;
          var email = this.formControls.email.value;
          var password = this.formControls.password.value;
          this.signUpSub = this.authenticateService.signUp(name, username, email, password).subscribe(function () {
            _this13.alertService.success("Welcome to SWATANG. Please check your email and make a verification.");

            _this13.loading = false;
            setTimeout(function () {
              return _this13.router.navigate([_this13.returnURL]);
            }, 3000);
          }, function (error) {
            _this13.alertService.error(error);

            _this13.loading = false;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.signUpSub) {
            this.signUpSub.unsubscribe();
          }
        }
      }]);

      return SignUpComponent;
    }();

    SignUpComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }, {
        type: _core_services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _core_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    SignUpComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-sign-up',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./sign-up.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/features/user/sign-up/sign-up.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./sign-up.component.scss */
      "./src/app/features/user/sign-up/sign-up.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _core_services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _core_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])], SignUpComponent);
    /***/
  },

  /***/
  "./src/app/features/user/user-routing.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/features/user/user-routing.module.ts ***!
    \******************************************************/

  /*! exports provided: UserRoutingModule */

  /***/
  function srcAppFeaturesUserUserRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function () {
      return UserRoutingModule;
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


    var _app_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/core */
    "./src/app/core/index.ts");
    /* harmony import */


    var _delete_account_delete_account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./delete-account/delete-account.component */
    "./src/app/features/user/delete-account/delete-account.component.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/features/user/profile/profile.component.ts");
    /* harmony import */


    var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sign-up/sign-up.component */
    "./src/app/features/user/sign-up/sign-up.component.ts");
    /* harmony import */


    var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./change-password/change-password.component */
    "./src/app/features/user/change-password/change-password.component.ts");
    /* harmony import */


    var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./forgot-password/forgot-password.component */
    "./src/app/features/user/forgot-password/forgot-password.component.ts");
    /* harmony import */


    var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./reset-password/reset-password.component */
    "./src/app/features/user/reset-password/reset-password.component.ts");
    /* harmony import */


    var _user_skills_user_skills_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./user-skills/user-skills.component */
    "./src/app/features/user/user-skills/user-skills.component.ts");
    /* harmony import */


    var _active_user_active_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./active-user/active-user.component */
    "./src/app/features/user/active-user/active-user.component.ts");
    /* harmony import */


    var _search_user_search_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./search-user/search-user.component */
    "./src/app/features/user/search-user/search-user.component.ts");

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
      redirectTo: '/user',
      pathMatch: 'full'
    }, {
      path: '',
      children: [{
        path: 'sign-up',
        component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__["SignUpComponent"]
      }, {
        path: 'active/:id',
        component: _active_user_active_user_component__WEBPACK_IMPORTED_MODULE_10__["ActiveUserComponent"]
      }, {
        path: 'search',
        component: _search_user_search_user_component__WEBPACK_IMPORTED_MODULE_11__["SearchUserComponent"],
        canActivate: [_app_core__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
      }, {
        path: 'forgot-password',
        component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordComponent"]
      }, {
        path: 'delete',
        component: _delete_account_delete_account_component__WEBPACK_IMPORTED_MODULE_3__["DeleteAccountComponent"],
        canActivate: [_app_core__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
      }, {
        path: 'reset-password/:token',
        component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_8__["ResetPasswordComponent"]
      }, {
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"],
        canActivate: [_app_core__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
      }]
    }, {
      path: '',
      children: [{
        path: 'change-password',
        component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordComponent"]
      }]
    }, {
      path: 'user-skills',
      component: _user_skills_user_skills_component__WEBPACK_IMPORTED_MODULE_9__["UserSkillsComponent"]
    }];

    var UserRoutingModule = function UserRoutingModule() {
      _classCallCheck(this, UserRoutingModule);
    };

    UserRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })], UserRoutingModule);
    /***/
  },

  /***/
  "./src/app/features/user/user-skills/user-skills.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/features/user/user-skills/user-skills.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeaturesUserUserSkillsUserSkillsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-table {\n  width: 100%;\n}\n\n.right {\n  display: flex;\n  flex-direction: row-reverse;\n  padding: 15px;\n}\n\n.user-skill-table {\n  margin: 0px 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdW9uZy5tYWkvTVdELVdPUksvVFJBSU5JTkcvQU5HVUxBUl84X1RSQUlOSU5HL3N3YXRhbmcvYW5ndWxhcjgtdHJhaW5pbmctZnJvbnRlbmQvc3JjL2FwcC9mZWF0dXJlcy91c2VyL3VzZXItc2tpbGxzL3VzZXItc2tpbGxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy91c2VyL3VzZXItc2tpbGxzL3VzZXItc2tpbGxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3VzZXIvdXNlci1za2lsbHMvdXNlci1za2lsbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnJpZ2h0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICBwYWRkaW5nOiAxNXB4O1xufVxuXG4udXNlci1za2lsbC10YWJsZSB7XG4gICAgbWFyZ2luOiAwcHggMTVweDtcbn0iLCIubWF0LXRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLnVzZXItc2tpbGwtdGFibGUge1xuICBtYXJnaW46IDBweCAxNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/features/user/user-skills/user-skills.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/features/user/user-skills/user-skills.component.ts ***!
    \********************************************************************/

  /*! exports provided: UserSkillsComponent */

  /***/
  function srcAppFeaturesUserUserSkillsUserSkillsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserSkillsComponent", function () {
      return UserSkillsComponent;
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


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../dialog/dialog.component */
    "./src/app/features/user/dialog/dialog.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _core_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @core/services */
    "./src/app/core/services/index.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

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

    var UserSkillsComponent = /*#__PURE__*/function () {
      function UserSkillsComponent(formBuilder, authenticateService, userService, alertService, skillService, router, dialog) {
        var _this14 = this;

        _classCallCheck(this, UserSkillsComponent);

        this.formBuilder = formBuilder;
        this.authenticateService = authenticateService;
        this.userService = userService;
        this.alertService = alertService;
        this.skillService = skillService;
        this.router = router;
        this.dialog = dialog;
        this.loading = false;
        this.submitted = false;
        this.deleted = false;
        this.userSkills = [];
        this.displayedColumns = ['skillName', 'skillLevel', 'actions'];

        this.getUserSkills = function () {
          _this14.userService.getUserSkills(_this14.currentUser.id).subscribe(function (userSkills) {
            _this14.userSkills = userSkills;
            _this14.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](_this14.userSkills);
            _this14.dataSource.paginator = _this14.paginator;
          });
        };

        this.updateSkill = function (userSkill) {
          _this14.skillService.getSkillProfile(userSkill.skillNameId).subscribe(function (item) {
            _this14.openDialog(item, userSkill);
          });
        };

        this.deleteSkill = function (userSkill) {
          _this14.skillService.removeUserSkill(userSkill.skillNameId, _this14.currentUser.id).subscribe(function (m) {
            _this14.alertService.success(m);

            _this14.getUserSkills();
          });
        };
      }

      _createClass(UserSkillsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          this.currentUserSubscription = this.authenticateService.currentUser.subscribe(function (user) {
            _this15.currentUser = user;

            _this15.getUserSkills();
          });
          this.updateEvent$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Observable"](function (subscriber) {
            _this15.getUserSkills();

            subscriber.next('');
            subscriber.complete();
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.currentUserSubscription) {
            this.currentUserSubscription.unsubscribe();
          }
        }
      }, {
        key: "formControls",
        get: function get() {
          return this.passwordForm.controls;
        }
      }, {
        key: "openDialog",
        value: function openDialog(skill, userSkill) {
          var _this16 = this;

          var dialogRef = this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"], {
            width: '500px',
            data: skill ? {
              skill: skill,
              selectedLevel: userSkill ? userSkill.skillLevelId : '',
              id: userSkill ? userSkill._id : '',
              type: 'update',
              notify: this.updateEvent$
            } : {
              type: 'add',
              notify: this.updateEvent$
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            _this16.animal = result;
          });
        }
      }]);

      return UserSkillsComponent;
    }();

    UserSkillsComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
      }, {
        type: _core_services__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]
      }, {
        type: _core_services__WEBPACK_IMPORTED_MODULE_7__["UserService"]
      }, {
        type: _core_services__WEBPACK_IMPORTED_MODULE_7__["AlertService"]
      }, {
        type: _core_services__WEBPACK_IMPORTED_MODULE_7__["SkillService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], {
      "static": false
    }), __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])], UserSkillsComponent.prototype, "paginator", void 0);

    UserSkillsComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./user-skills.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/features/user/user-skills/user-skills.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./user-skills.component.scss */
      "./src/app/features/user/user-skills/user-skills.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _core_services__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"], _core_services__WEBPACK_IMPORTED_MODULE_7__["UserService"], _core_services__WEBPACK_IMPORTED_MODULE_7__["AlertService"], _core_services__WEBPACK_IMPORTED_MODULE_7__["SkillService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])], UserSkillsComponent);
    /***/
  },

  /***/
  "./src/app/features/user/user.module.ts":
  /*!**********************************************!*\
    !*** ./src/app/features/user/user.module.ts ***!
    \**********************************************/

  /*! exports provided: UserModule */

  /***/
  function srcAppFeaturesUserUserModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserModule", function () {
      return UserModule;
    });
    /* harmony import */


    var _user_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./user-routing.module */
    "./src/app/features/user/user-routing.module.ts");
    /* harmony import */


    var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./sign-up/sign-up.component */
    "./src/app/features/user/sign-up/sign-up.component.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/features/user/profile/profile.component.ts");
    /* harmony import */


    var _delete_account_delete_account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./delete-account/delete-account.component */
    "./src/app/features/user/delete-account/delete-account.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _core_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../core/material.module */
    "./src/app/core/material.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./forgot-password/forgot-password.component */
    "./src/app/features/user/forgot-password/forgot-password.component.ts");
    /* harmony import */


    var _user_skills_user_skills_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./user-skills/user-skills.component */
    "./src/app/features/user/user-skills/user-skills.component.ts");
    /* harmony import */


    var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./dialog/dialog.component */
    "./src/app/features/user/dialog/dialog.component.ts");
    /* harmony import */


    var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./reset-password/reset-password.component */
    "./src/app/features/user/reset-password/reset-password.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./change-password/change-password.component */
    "./src/app/features/user/change-password/change-password.component.ts");
    /* harmony import */


    var _active_user_active_user_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./active-user/active-user.component */
    "./src/app/features/user/active-user/active-user.component.ts");
    /* harmony import */


    var _search_user_search_user_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./search-user/search-user.component */
    "./src/app/features/user/search-user/search-user.component.ts");

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

    var UserModule = function UserModule() {
      _classCallCheck(this, UserModule);
    };

    UserModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_12__["NgModule"])({
      entryComponents: [_user_skills_user_skills_component__WEBPACK_IMPORTED_MODULE_8__["UserSkillsComponent"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DialogComponent"]],
      declarations: [_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_1__["SignUpComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordComponent"], _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_10__["ResetPasswordComponent"], _delete_account_delete_account_component__WEBPACK_IMPORTED_MODULE_3__["DeleteAccountComponent"], _active_user_active_user_component__WEBPACK_IMPORTED_MODULE_14__["ActiveUserComponent"], _search_user_search_user_component__WEBPACK_IMPORTED_MODULE_15__["SearchUserComponent"], _user_skills_user_skills_component__WEBPACK_IMPORTED_MODULE_8__["UserSkillsComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"], _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_13__["ChangePasswordComponent"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DialogComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], _user_routing_module__WEBPACK_IMPORTED_MODULE_0__["UserRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _core_material_module__WEBPACK_IMPORTED_MODULE_5__["CustomMaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]]
    })], UserModule);
    /***/
  }
}]);
//# sourceMappingURL=features-user-user-module-es5.js.map