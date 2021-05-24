(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- main app container -->\n<div class=\"jumbotron\">\n  <div class=\"container\">\n    <mat-toolbar\n      color=\"primary\"\n      class=\"toolbar\"\n      fxShow=\"true\"\n      fxHide.lt-md=\"true\"\n    >\n      <div class=\"logo\" routerLink=\"/\">\n        <ng-container i18n=\"logo text\">SWATANG</ng-container>\n      </div>\n      <div class=\"welcome\" *ngIf=\"currentUser\">\n        <a mat-button routerLink=\"/users/search-user\"\n          ><mat-icon><i class=\"material-icons md-dark\">search</i></mat-icon></a\n        >\n        <a mat-button routerLink=\"/users/profile\"\n          ><mat-icon\n            ><i class=\"material-icons md-dark\">account_circle</i></mat-icon\n          ><span class=\"name\"\n            ><ng-container i18n=\"@@hi-en\">Hi </ng-container\n            >{{ currentUser.name }}\n            <ng-container i18n=\"@@hi-ja\">Hi </ng-container>!</span\n          ></a\n        >\n        <a mat-button (click)=\"logout()\"\n          ><mat-icon><i class=\"material-icons md-dark\">exit_to_app</i></mat-icon\n          ><ng-container i18n=\"@@logout-link\">Log out</ng-container></a\n        >\n      </div>\n    </mat-toolbar>\n    <mat-toolbar\n      color=\"primary\"\n      class=\"m-toolbar\"\n      fxShow=\"true\"\n      fxHide.gt-sm=\"true\"\n    >\n      <button mat-icon-button (click)=\"sidenav.toggle()\" *ngIf=\"currentUser\">\n        <mat-icon>menu</mat-icon>\n      </button>\n      <span class=\"logo\" routerLink=\"/\">\n        <ng-container i18n=\"logo text\">SWATANG</ng-container>\n      </span>\n    </mat-toolbar>\n\n    <mat-sidenav-container fxHide.gt-sm=\"true\">\n      <mat-sidenav #sidenav mode=\"over\" fixedInViewport=\"true\" fixedTopGap=\"56\">\n        <mat-nav-list *ngIf=\"currentUser\">\n          <a\n            mat-list-item\n            routerLink=\"/users/search-user\"\n            (click)=\"sidenav.toggle()\"\n            ><mat-icon\n              ><i class=\"material-icons md-dark\">search</i></mat-icon\n            ></a\n          >\n          <a\n            mat-list-item\n            routerLink=\"/users/profile\"\n            (click)=\"sidenav.toggle()\"\n            ><mat-icon\n              ><i class=\"material-icons md-dark\">account_circle</i></mat-icon\n            ><span class=\"name\"\n              ><ng-container i18n=\"@@hi-en\">Hi </ng-container\n              >{{ currentUser.name }}\n              <ng-container i18n=\"@@hi-ja\">Hi </ng-container>!</span\n            ></a\n          >\n          <a mat-list-item (click)=\"logout()\" (click)=\"sidenav.toggle()\"\n            ><mat-icon\n              ><i class=\"material-icons md-dark\">exit_to_app</i></mat-icon\n            ><ng-container i18n=\"@@logout-link\">Log out</ng-container></a\n          >\n        </mat-nav-list>\n      </mat-sidenav>\n    </mat-sidenav-container>\n\n    <div class=\"themes\">\n      <app-change-theme (themeChange)=\"applyTheme($event)\"></app-change-theme>\n      <app-change-language\n        (changeLanguage)=\"changeLang($event)\"\n      ></app-change-language>\n    </div>\n\n    <app-alert></app-alert>\n    <router-outlet></router-outlet>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/alert/alert.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/alert/alert.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/change-language/change-language.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/change-language/change-language.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div *ngFor=\"let lang of languages\">\n  <span *ngIf=\"lang.code !== localeId\">\n    <img class=\"language-flag\" src=\"{{lang.src}}\" height=\"20\" width=\"30\"><a (click)=\"onSetLanguage(lang.code)\">{{lang.label}}</a>\n  </span>\n  <span *ngIf=\"lang.code === localeId\">{{lang.label}} </span>\n</div> -->\n<select id=\"change-language\" (change)=\"onSetLanguage($event.target.value)\">\n  <option\n    *ngFor=\"let lang of languages\"\n    [value]=\"lang.code\"\n    [selected]=\"lang.code === currLocale\"\n    ><img class=\"language-flag\" src=\"{{ lang.src }}\" height=\"20\" width=\"30\" />{{\n      lang.label\n    }}</option\n  >\n</select>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/change-theme/change-theme.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/change-theme/change-theme.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<select [(ngModel)]=\"selectedTheme\" (ngModelChange)=\"onSetTheme($event)\">\n  <option *ngFor=\"let t of themes\" [ngValue]=\"t\"\n    ><span i18n=\"@@themeName\"\n      >dummy {t.id, select, default-theme {tname}}</span\n    ></option\n  >\n</select>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/input/input.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/input/input.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-form-field>\n  <mat-icon matPrefix\n    ><i class=\"material-icons md-dark\">{{ icon }}</i></mat-icon\n  >\n  <input\n    *ngIf=\"type !== 'textarea'\"\n    matInput\n    placeholder=\"{{ placeholder }}\"\n    [(ngModel)]=\"value\"\n    [attr.type]=\"type\"\n    (blur)=\"onBlur()\"\n  />\n  <textarea\n    *ngIf=\"type === 'textarea'\"\n    matInput\n    rows=\"{{ rows }}\"\n    placeholder=\"{{ placeholder }}\"\n    [(ngModel)]=\"value\"\n    [attr.type]=\"type\"\n    (blur)=\"onBlur()\"\n  ></textarea>\n  <validation-messages\n    *ngIf=\"errorVisible && errors\"\n    [errors]=\"errors\"\n    [errorsDef]=\"errorsDef\"\n  ></validation-messages>\n</mat-form-field>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/loading/loading.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/loading/loading.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"visible\">\n  <img\n    class=\"loading\"\n    src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\n  />\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/table-basic-responsive/table-basic-responsive.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/table-basic-responsive/table-basic-responsive.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"table-container mat-elevation-z8\">\n  <mat-table #table [dataSource]=\"dataSource\">\n    <ng-container *ngFor=\"let c of columns\" matColumnDef=\"{{ c.key }}\">\n      <mat-header-cell *matHeaderCellDef>{{ c.name }}</mat-header-cell>\n      <mat-cell *matCellDef=\"let element\">\n        <span class=\"mobile-label\">{{ c.name }}:</span>\n        {{ element[c.key] }}\n      </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\n  </mat-table>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/validation-messages/validation-messages.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/validation-messages/validation-messages.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-error *ngFor=\"let message of messages\">{{ message.toString() }}</mat-error>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/locale/messages.en.xlf":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/locale/messages.en.xlf ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<xliff version=\"1.2\" xmlns=\"urn:oasis:names:tc:xliff:document:1.2\">\n  <file source-language=\"en\" datatype=\"plaintext\" original=\"ng2.template\">\n    <body>\n      <trans-unit id=\"themeName\" datatype=\"html\">\n        <source>dummy <x id=\"ICU\" equiv-text=\"{t.id, select, default-theme {...}}\"/></source>\n        <target><x id=\"ICU\" equiv-text=\"{t.id, select, default-theme {...}}\"/></target>\n        <context-group purpose=\"location\">\n          <context context-type=\"sourcefile\">app/shared/components/change-theme/change-theme.component.html</context>\n          <context context-type=\"linenumber\">3</context>\n        </context-group>\n      </trans-unit>\n      <trans-unit id=\"6cace3d84ff82ccd0b82f38f46d0f89159a054d6\" datatype=\"html\">\n        <source>{VAR_SELECT, select, default-theme {tname} }</source>\n        <target>{VAR_SELECT, select, default-theme {Default Theme} dark-theme {Dark Theme} light-theme {Light Theme}}</target>\n        <context-group purpose=\"location\">\n          <context context-type=\"sourcefile\">app/shared/components/change-theme/change-theme.component.html</context>\n          <context context-type=\"linenumber\">3</context>\n        </context-group>\n      </trans-unit>\n      <trans-unit id=\"bbc8f53f2aec142586628fa4d3ed63f6171a0448\" datatype=\"html\">\n        <source>VR 360</source>\n        <target>VR 360</target>\n        <context-group purpose=\"location\">\n          <context context-type=\"sourcefile\">app/app.component.html</context>\n          <context context-type=\"linenumber\">5</context>\n        </context-group>\n        <note priority=\"1\" from=\"description\">logo text</note>\n      </trans-unit>\n      <trans-unit id=\"vr360detailMenu\" datatype=\"html\">\n        <source>VR 360 Detail</source>\n        <target>VR 360 Detail</target>\n        <context-group purpose=\"location\">\n          <context context-type=\"sourcefile\">app/app.component.html</context>\n          <context context-type=\"linenumber\">12</context>\n        </context-group>\n      </trans-unit>\n      <trans-unit id=\"b5803ef8e027f0962ff2c63153577e8f71ec2a4d\" datatype=\"html\">\n        <source>VR 360 Sweep Setting</source>\n        <target>VR 360 Sweep Setting</target>\n        <context-group purpose=\"location\">\n          <context context-type=\"sourcefile\">app/app.component.html</context>\n          <context context-type=\"linenumber\">13</context>\n        </context-group>\n      </trans-unit>\n      <trans-unit id=\"hi-en\" datatype=\"html\">\n        <source>Hi </source>\n        <target>Hi </target>\n        <context-group purpose=\"location\">\n          <context context-type=\"sourcefile\">app/app.component.html</context>\n          <context context-type=\"linenumber\">15</context>\n        </context-group>\n      </trans-unit>\n      <trans-unit id=\"hi-ja\" datatype=\"html\">\n        <source>Hi </source>\n        <target></target>\n        <context-group purpose=\"location\">\n          <context context-type=\"sourcefile\">app/app.component.html</context>\n          <context context-type=\"linenumber\">15</context>\n        </context-group>\n      </trans-unit>\n      <trans-unit id=\"logout-link\" datatype=\"html\">\n        <source>Log out</source>\n        <target>Log out</target>\n        <context-group purpose=\"location\">\n          <context context-type=\"sourcefile\">app/app.component.html</context>\n          <context context-type=\"linenumber\">16</context>\n        </context-group>\n        <note priority=\"1\" from=\"description\">header logout link</note>\n      </trans-unit>\n      <trans-unit id=\"b36e1450940b7f6028d8587568c7d669b53f7a06\" datatype=\"html\">\n        <source>Active</source>\n        <target>Active</target>\n        <context-group purpose=\"location\">\n          <context context-type=\"sourcefile\">app/features/home/home-page/home-page.component.html</context>\n          <context context-type=\"linenumber\">7</context>\n        </context-group>\n      </trans-unit>\n      <trans-unit id=\"43c4133c7a0263d2e33dd4c2e74d40784b2e4b1c\" datatype=\"html\">\n        <source>Inactive</source>\n        <target>Inactive</target>\n        <context-group purpose=\"location\">\n          <context context-type=\"sourcefile\">app/features/home/home-page/home-page.component.html</context>\n          <context context-type=\"linenumber\">8</context>\n        </context-group>\n      </trans-unit>\n      <trans-unit id=\"c95505b5a74151a0c235b19b9c41db7983205ba7\" datatype=\"html\">\n        <source>Deactivate</source>\n        <target>Deactivate</target>\n        <context-group purpose=\"location\">\n          <context context-type=\"sourcefile\">app/features/home/home-page/home-page.component.html</context>\n          <context context-type=\"linenumber\">13</context>\n        </context-group>\n      </trans-unit>\n      <trans-unit id=\"53ad3c1256487d3686556f37cbb120b64855c9e6\" datatype=\"html\">\n        <source>LEFT</source>\n        <target>LEFT</target>\n        <context-group purpose=\"location\">\n          <context context-type=\"sourcefile\">app/features/vr360/vr360-details/vr360-details.component.html</context>\n          <context context-type=\"linenumber\">17</context>\n        </context-group>\n      </trans-unit>\n      <trans-unit id=\"0aa5fefc418b95ff0d711d6daeba953a0088e965\" datatype=\"html\">\n        <source>RIGHT</source>\n        <target>RIGHT</target>\n        <context-group purpose=\"location\">\n          <context context-type=\"sourcefile\">app/features/vr360/vr360-details/vr360-details.component.html</context>\n          <context context-type=\"linenumber\">18</context>\n        </context-group>\n      </trans-unit>\n      <trans-unit id=\"63124e065ac6a47929045e38a0f5acc2d0f4f5a2\" datatype=\"html\">\n        <source>FORWARD</source>\n        <target>FORWARD</target>\n        <context-group purpose=\"location\">\n          <context context-type=\"sourcefile\">app/features/vr360/vr360-details/vr360-details.component.html</context>\n          <context context-type=\"linenumber\">19</context>\n        </context-group>\n      </trans-unit>\n      <trans-unit id=\"b0ff926f8a9440093ff25f43f53692c4b90d0d26\" datatype=\"html\">\n        <source>BACKWARD</source>\n        <target>BACKWARD</target>\n        <context-group purpose=\"location\">\n          <context context-type=\"sourcefile\">app/features/vr360/vr360-details/vr360-details.component.html</context>\n          <context context-type=\"linenumber\">20</context>\n        </context-group>\n      </trans-unit>\n      <trans-unit id=\"9f83599e7b9613378f9fdfadc26446ec17eee701\" datatype=\"html\">\n        <source>UP</source>\n        <target>UP</target>\n        <context-group purpose=\"location\">\n          <context context-type=\"sourcefile\">app/features/vr360/vr360-details/vr360-details.component.html</context>\n          <context context-type=\"linenumber\">21</context>\n        </context-group>\n      </trans-unit>\n      <trans-unit id=\"6043652b2edaaf7c290c686721eaff9ee716fecf\" datatype=\"html\">\n        <source>DOWN</source>\n        <target>DOWN</target>\n        <context-group purpose=\"location\">\n          <context context-type=\"sourcefile\">app/features/vr360/vr360-details/vr360-details.component.html</context>\n          <context context-type=\"linenumber\">22</context>\n        </context-group>\n      </trans-unit>\n    </body>\n  </file>\n</xliff>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/locale/messages.ja.xlf":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/locale/messages.ja.xlf ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<xliff version=\"1.2\" xmlns=\"urn:oasis:names:tc:xliff:document:1.2\">\n  <file source-language=\"en\" datatype=\"plaintext\" original=\"ng2.template\">\n    <body>\n      <trans-unit id=\"themeName\" datatype=\"html\">\n        <source>dummy <x id=\"ICU\" equiv-text=\"{t.id, select, default-theme {...}}\"/></source>\n        <target><x id=\"ICU\" equiv-text=\"{t.id, select, default-theme {...}}\"/></target>\n        <context-group purpose=\"location\">\n          <context context-type=\"sourcefile\">app/shared/components/change-theme/change-theme.component.html</context>\n          <context context-type=\"linenumber\">3</context>\n        </context-group>\n      </trans-unit>\n      <trans-unit id=\"6cace3d84ff82ccd0b82f38f46d0f89159a054d6\" datatype=\"html\">\n        <source>{VAR_SELECT, select, default-theme {tname} }</source>\n        <target>{VAR_SELECT, select, default-theme {デフォルトテーマ} dark-theme {暗いテーマ} light-theme {光のテーマ}}</target>\n        <context-group purpose=\"location\">\n          <context context-type=\"sourcefile\">app/shared/components/change-theme/change-theme.component.html</context>\n          <context context-type=\"linenumber\">3</context>\n        </context-group>\n      </trans-unit>\n      <trans-unit id=\"bbc8f53f2aec142586628fa4d3ed63f6171a0448\" datatype=\"html\">\n        <source>VR 360</source>\n        <target>360 度 VR</target>\n        <context-group purpose=\"location\">\n          <context context-type=\"sourcefile\">app/app.component.html</context>\n          <context context-type=\"linenumber\">5</context>\n        </context-group>\n        <note priority=\"1\" from=\"description\">logo text</note>\n      </trans-unit>\n      <trans-unit id=\"vr360detailMenu\" datatype=\"html\">\n        <source>VR 360 Detail</source>\n        <target>公開 Web サービス</target>\n        <context-group purpose=\"location\">\n          <context context-type=\"sourcefile\">app/app.component.html</context>\n          <context context-type=\"linenumber\">12</context>\n        </context-group>\n      </trans-unit>\n      <trans-unit id=\"b5803ef8e027f0962ff2c63153577e8f71ec2a4d\" datatype=\"html\">\n        <source>VR 360 Sweep Setting</source>\n        <target>360 度 VR 作成</target>\n        <context-group purpose=\"location\">\n          <context context-type=\"sourcefile\">app/app.component.html</context>\n          <context context-type=\"linenumber\">13</context>\n        </context-group>\n      </trans-unit>\n      <trans-unit id=\"hi-en\" datatype=\"html\">\n        <source>Hi </source>\n        <target></target>\n        <context-group purpose=\"location\">\n          <context context-type=\"sourcefile\">app/app.component.html</context>\n          <context context-type=\"linenumber\">15</context>\n        </context-group>\n      </trans-unit>\n      <trans-unit id=\"hi-ja\" datatype=\"html\">\n        <source>Hi </source>\n        <target> さん</target>\n        <context-group purpose=\"location\">\n          <context context-type=\"sourcefile\">app/app.component.html</context>\n          <context context-type=\"linenumber\">15</context>\n        </context-group>\n      </trans-unit>\n      <trans-unit id=\"logout-link\" datatype=\"html\">\n        <source>Log out</source>\n        <target>ログアウト</target>\n        <context-group purpose=\"location\">\n          <context context-type=\"sourcefile\">app/app.component.html</context>\n          <context context-type=\"linenumber\">16</context>\n        </context-group>\n        <note priority=\"1\" from=\"description\">header logout link</note>\n      </trans-unit>\n      <trans-unit id=\"b36e1450940b7f6028d8587568c7d669b53f7a06\" datatype=\"html\">\n        <source>Active</source>\n        <target>活性化</target>\n        <context-group purpose=\"location\">\n          <context context-type=\"sourcefile\">app/features/home/home-page/home-page.component.html</context>\n          <context context-type=\"linenumber\">7</context>\n        </context-group>\n      </trans-unit>\n      <trans-unit id=\"43c4133c7a0263d2e33dd4c2e74d40784b2e4b1c\" datatype=\"html\">\n        <source>Inactive</source>\n        <target>不活性化</target>\n        <context-group purpose=\"location\">\n          <context context-type=\"sourcefile\">app/features/home/home-page/home-page.component.html</context>\n          <context context-type=\"linenumber\">8</context>\n        </context-group>\n      </trans-unit>\n      <trans-unit id=\"c95505b5a74151a0c235b19b9c41db7983205ba7\" datatype=\"html\">\n        <source>Deactivate</source>\n        <target>無効化</target>\n        <context-group purpose=\"location\">\n          <context context-type=\"sourcefile\">app/features/home/home-page/home-page.component.html</context>\n          <context context-type=\"linenumber\">13</context>\n        </context-group>\n      </trans-unit>\n      <trans-unit id=\"53ad3c1256487d3686556f37cbb120b64855c9e6\" datatype=\"html\">\n        <source>LEFT</source>\n        <target>左</target>\n        <context-group purpose=\"location\">\n          <context context-type=\"sourcefile\">app/features/vr360/vr360-details/vr360-details.component.html</context>\n          <context context-type=\"linenumber\">17</context>\n        </context-group>\n      </trans-unit>\n      <trans-unit id=\"0aa5fefc418b95ff0d711d6daeba953a0088e965\" datatype=\"html\">\n        <source>RIGHT</source>\n        <target>右</target>\n        <context-group purpose=\"location\">\n          <context context-type=\"sourcefile\">app/features/vr360/vr360-details/vr360-details.component.html</context>\n          <context context-type=\"linenumber\">18</context>\n        </context-group>\n      </trans-unit>\n      <trans-unit id=\"63124e065ac6a47929045e38a0f5acc2d0f4f5a2\" datatype=\"html\">\n        <source>FORWARD</source>\n        <target>次</target>\n        <context-group purpose=\"location\">\n          <context context-type=\"sourcefile\">app/features/vr360/vr360-details/vr360-details.component.html</context>\n          <context context-type=\"linenumber\">19</context>\n        </context-group>\n      </trans-unit>\n      <trans-unit id=\"b0ff926f8a9440093ff25f43f53692c4b90d0d26\" datatype=\"html\">\n        <source>BACKWARD</source>\n        <target>前</target>\n        <context-group purpose=\"location\">\n          <context context-type=\"sourcefile\">app/features/vr360/vr360-details/vr360-details.component.html</context>\n          <context context-type=\"linenumber\">20</context>\n        </context-group>\n      </trans-unit>\n      <trans-unit id=\"9f83599e7b9613378f9fdfadc26446ec17eee701\" datatype=\"html\">\n        <source>UP</source>\n        <target>アップ</target>\n        <context-group purpose=\"location\">\n          <context context-type=\"sourcefile\">app/features/vr360/vr360-details/vr360-details.component.html</context>\n          <context context-type=\"linenumber\">21</context>\n        </context-group>\n      </trans-unit>\n      <trans-unit id=\"6043652b2edaaf7c290c686721eaff9ee716fecf\" datatype=\"html\">\n        <source>DOWN</source>\n        <target>ダウン</target>\n        <context-group purpose=\"location\">\n          <context context-type=\"sourcefile\">app/features/vr360/vr360-details/vr360-details.component.html</context>\n          <context context-type=\"linenumber\">22</context>\n        </context-group>\n      </trans-unit>\n    </body>\n  </file>\n</xliff>\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("li {\n  display: inline;\n  font-size: 12px;\n}\n\nli::after {\n  content: \"|\";\n  padding: 5px;\n}\n\nli:last-child::after {\n  content: \"\";\n}\n\n.logo {\n  font-size: 20pt;\n  font-weight: bold;\n}\n\n.toolbar .menu ul li {\n  font-size: 11pt;\n}\n\n.user-avatar {\n  background-image: url(\"https://upload.wikimedia.org/wikipedia/commons/1/1e/Default-avatar.jpg\");\n  background-size: cover;\n}\n\n.welcome {\n  width: 100%;\n  text-align: right;\n  margin: 10px;\n}\n\n.themes {\n  text-align: right;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.m-toolbar {\n  position: fixed;\n  z-index: 2;\n}\n\n/* \n  ##Device = Desktops\n  ##Screen = 1281px to higher resolution desktops\n*/\n\n/* \n  ##Device = Laptops, Desktops\n  ##Screen = B/w 1025px to 1280px\n*/\n\n/* \n  ##Device = Tablets, Ipads (portrait)\n  ##Screen = B/w 768px to 1024px\n*/\n\n/* \n  ##Device = Tablets, Ipads (landscape)\n  ##Screen = B/w 768px to 1024px\n*/\n\n/* \n  ##Device = Low Resolution Tablets, Mobiles (Landscape)\n  ##Screen = B/w 481px to 767px\n*/\n\n@media (min-width: 481px) and (max-width: 767px) {\n  .themes {\n    text-align: right;\n    margin-top: 65px;\n  }\n}\n\n/* \n  ##Device = Most of the Smartphones Mobiles (Portrait)\n  ##Screen = B/w 320px to 479px\n*/\n\n@media (min-width: 320px) and (max-width: 480px) {\n  .themes {\n    text-align: right;\n    margin-top: 65px;\n    margin-bottom: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdW9uZy5tYWkvTVdELVdPUksvVFJBSU5JTkcvQU5HVUxBUl84X1RSQUlOSU5HL1NvdXJjZS9td2Qtc3dhdGFuZy1mZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUNDRjs7QURHRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FDQUo7O0FER0U7RUFDRSxXQUFBO0FDREo7O0FES0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNGRjs7QURLQTtFQUNFLGVBQUE7QUNGRjs7QURLQTtFQUNFLCtGQUFBO0VBQ0Esc0JBQUE7QUNGRjs7QURLQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNGRjs7QURLQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0ZGOztBREtBO0VBQ0UsZUFBQTtFQUNBLFVBQUE7QUNGRjs7QURLQTs7O0NBQUE7O0FBU0E7OztDQUFBOztBQVNBOzs7Q0FBQTs7QUFTQTs7O0NBQUE7O0FBU0E7OztDQUFBOztBQUtBO0VBQ0U7SUFDRSxpQkFBQTtJQUNBLGdCQUFBO0VDdkJGO0FBQ0Y7O0FEMEJBOzs7Q0FBQTs7QUFLQTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0VDekJGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsaSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5saSB7XG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnfCc7XG4gICAgcGFkZGluZzogNXB4O1xuICB9XG5cbiAgJjpsYXN0LWNoaWxkOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gIH1cbn1cblxuLmxvZ28ge1xuICBmb250LXNpemU6IDIwcHQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udG9vbGJhciAubWVudSB1bCBsaSB7XG4gIGZvbnQtc2l6ZTogMTFwdDtcbn1cblxuLnVzZXItYXZhdGFyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zLzEvMWUvRGVmYXVsdC1hdmF0YXIuanBnJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi53ZWxjb21lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi50aGVtZXMge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLm0tdG9vbGJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMjtcbn1cblxuLyogXG4gICMjRGV2aWNlID0gRGVza3RvcHNcbiAgIyNTY3JlZW4gPSAxMjgxcHggdG8gaGlnaGVyIHJlc29sdXRpb24gZGVza3RvcHNcbiovXG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMjgxcHgpIHtcbiAgLy9DU1Ncbn1cblxuLyogXG4gICMjRGV2aWNlID0gTGFwdG9wcywgRGVza3RvcHNcbiAgIyNTY3JlZW4gPSBCL3cgMTAyNXB4IHRvIDEyODBweFxuKi9cblxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkgYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xuICAvL0NTU1xufVxuXG4vKiBcbiAgIyNEZXZpY2UgPSBUYWJsZXRzLCBJcGFkcyAocG9ydHJhaXQpXG4gICMjU2NyZWVuID0gQi93IDc2OHB4IHRvIDEwMjRweFxuKi9cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC8vQ1NTXG59XG5cbi8qIFxuICAjI0RldmljZSA9IFRhYmxldHMsIElwYWRzIChsYW5kc2NhcGUpXG4gICMjU2NyZWVuID0gQi93IDc2OHB4IHRvIDEwMjRweFxuKi9cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgLy9DU1Ncbn1cblxuLyogXG4gICMjRGV2aWNlID0gTG93IFJlc29sdXRpb24gVGFibGV0cywgTW9iaWxlcyAoTGFuZHNjYXBlKVxuICAjI1NjcmVlbiA9IEIvdyA0ODFweCB0byA3NjdweFxuKi9cblxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MXB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnRoZW1lcyB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luLXRvcDogNjVweDtcbiAgfVxufVxuXG4vKiBcbiAgIyNEZXZpY2UgPSBNb3N0IG9mIHRoZSBTbWFydHBob25lcyBNb2JpbGVzIChQb3J0cmFpdClcbiAgIyNTY3JlZW4gPSBCL3cgMzIwcHggdG8gNDc5cHhcbiovXG5cbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC50aGVtZXMge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IDY1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxufVxuIiwibGkge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxubGk6OmFmdGVyIHtcbiAgY29udGVudDogXCJ8XCI7XG4gIHBhZGRpbmc6IDVweDtcbn1cbmxpOmxhc3QtY2hpbGQ6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbn1cblxuLmxvZ28ge1xuICBmb250LXNpemU6IDIwcHQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udG9vbGJhciAubWVudSB1bCBsaSB7XG4gIGZvbnQtc2l6ZTogMTFwdDtcbn1cblxuLnVzZXItYXZhdGFyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy8xLzFlL0RlZmF1bHQtYXZhdGFyLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLndlbGNvbWUge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLnRoZW1lcyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubS10b29sYmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAyO1xufVxuXG4vKiBcbiAgIyNEZXZpY2UgPSBEZXNrdG9wc1xuICAjI1NjcmVlbiA9IDEyODFweCB0byBoaWdoZXIgcmVzb2x1dGlvbiBkZXNrdG9wc1xuKi9cbi8qIFxuICAjI0RldmljZSA9IExhcHRvcHMsIERlc2t0b3BzXG4gICMjU2NyZWVuID0gQi93IDEwMjVweCB0byAxMjgwcHhcbiovXG4vKiBcbiAgIyNEZXZpY2UgPSBUYWJsZXRzLCBJcGFkcyAocG9ydHJhaXQpXG4gICMjU2NyZWVuID0gQi93IDc2OHB4IHRvIDEwMjRweFxuKi9cbi8qIFxuICAjI0RldmljZSA9IFRhYmxldHMsIElwYWRzIChsYW5kc2NhcGUpXG4gICMjU2NyZWVuID0gQi93IDc2OHB4IHRvIDEwMjRweFxuKi9cbi8qIFxuICAjI0RldmljZSA9IExvdyBSZXNvbHV0aW9uIFRhYmxldHMsIE1vYmlsZXMgKExhbmRzY2FwZSlcbiAgIyNTY3JlZW4gPSBCL3cgNDgxcHggdG8gNzY3cHhcbiovXG5AbWVkaWEgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAudGhlbWVzIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXJnaW4tdG9wOiA2NXB4O1xuICB9XG59XG4vKiBcbiAgIyNEZXZpY2UgPSBNb3N0IG9mIHRoZSBTbWFydHBob25lcyBNb2JpbGVzIChQb3J0cmFpdClcbiAgIyNTY3JlZW4gPSBCL3cgMzIwcHggdG8gNDc5cHhcbiovXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAudGhlbWVzIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXJnaW4tdG9wOiA2NXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let AppComponent = class AppComponent {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.authenticationService.currentUser.subscribe((x) => (this.currentUser = x));
    }
    logout() {
        this.authenticationService.logout();
        this.router.navigate(['auth/login']);
    }
    applyTheme($theme) {
        this.componentCssClass = $theme;
    }
    changeLang($lang) {
        if ($lang === 'fr') {
            localStorage.setItem('locale', 'fr');
        }
        else if ($lang === 'ja') {
            localStorage.setItem('locale', 'ja');
        }
        else {
            localStorage.setItem('locale', 'en');
        }
        location.reload(true);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _core_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class'),
    __metadata("design:type", Object)
], AppComponent.prototype, "componentCssClass", void 0);
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-swatang',
        template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _core_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing.module */ "./src/app/app.routing.module.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};










let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            // core & shared
            _app_core__WEBPACK_IMPORTED_MODULE_0__["CoreModule"],
            _shared__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _app_core__WEBPACK_IMPORTED_MODULE_0__["CustomMaterialModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
        ],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        providers: [
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_9__["APP_BASE_HREF"], useValue: '/' },
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: ['en', 'fr', 'ja'] }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


const appRoutes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() | features-home-home-module */ "features-home-home-module").then(__webpack_require__.bind(null, /*! ./features/home/home.module */ "./src/app/features/home/home.module.ts")).then(m => m.HomeModule),
    },
    {
        path: 'auth',
        loadChildren: () => __webpack_require__.e(/*! import() | features-authentication-authentication-module */ "features-authentication-authentication-module").then(__webpack_require__.bind(null, /*! ./features/authentication/authentication.module */ "./src/app/features/authentication/authentication.module.ts")).then(m => m.AuthenticationModule),
    },
    // otherwise redirect to home
    { path: '**', redirectTo: '/home' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, { useHash: true })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        providers: [],
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/core/config/app-config.ts":
/*!*******************************************!*\
  !*** ./src/app/core/config/app-config.ts ***!
  \*******************************************/
/*! exports provided: AppConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfig", function() { return AppConfig; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
const AppConfig = {
    API_URL: 'http://localhost:4000',
    MatterpostSDKKey: 'db4d6653-164a-4cfc-87d5-4f38e0756512',
    MatterpostSDKVersion: '3.0'
};


/***/ }),

/***/ "./src/app/core/config/index.ts":
/*!**************************************!*\
  !*** ./src/app/core/config/index.ts ***!
  \**************************************/
/*! exports provided: AppConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-config */ "./src/app/core/config/app-config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppConfig", function() { return _app_config__WEBPACK_IMPORTED_MODULE_0__["AppConfig"]; });

var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _guards_module_import_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/module-import.guard */ "./src/app/core/guards/module-import.guard.ts");
/* harmony import */ var _interceptors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interceptors */ "./src/app/core/interceptors/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





let CoreModule = class CoreModule {
    constructor(parentModule) {
        Object(_guards_module_import_guard__WEBPACK_IMPORTED_MODULE_3__["throwIfAlreadyLoaded"])(parentModule, 'CoreModule');
    }
};
CoreModule.ctorParameters = () => [
    { type: CoreModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] }
];
CoreModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _interceptors__WEBPACK_IMPORTED_MODULE_4__["JwtInterceptor"], multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _interceptors__WEBPACK_IMPORTED_MODULE_4__["ErrorInterceptor"], multi: true },
        ],
    }),
    __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
    __metadata("design:paramtypes", [CoreModule])
], CoreModule);



/***/ }),

/***/ "./src/app/core/guards/auth.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let AuthGuard = class AuthGuard {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    canActivate(route, state) {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            // authorised so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/auth/login'], {
            queryParams: { returnUrl: state.url },
        });
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _core_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
AuthGuard = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        _core_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
], AuthGuard);



/***/ }),

/***/ "./src/app/core/guards/index.ts":
/*!**************************************!*\
  !*** ./src/app/core/guards/index.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/core/guards/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });

var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



/***/ }),

/***/ "./src/app/core/guards/module-import.guard.ts":
/*!****************************************************!*\
  !*** ./src/app/core/guards/module-import.guard.ts ***!
  \****************************************************/
/*! exports provided: throwIfAlreadyLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function() { return throwIfAlreadyLoaded; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(`${moduleName} has already been loaded. Import ${moduleName} modules in the AppModule only.`);
    }
}


/***/ }),

/***/ "./src/app/core/index.ts":
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/*! exports provided: CoreModule, CustomMaterialModule, AppConfig, AuthGuard, ErrorInterceptor, JwtInterceptor, User, AlertService, AuthenticationService, UserService, ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.module */ "./src/app/core/core.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return _core_module__WEBPACK_IMPORTED_MODULE_0__["CoreModule"]; });

/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./material.module */ "./src/app/core/material.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomMaterialModule", function() { return _material_module__WEBPACK_IMPORTED_MODULE_1__["CustomMaterialModule"]; });

/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./src/app/core/config/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppConfig", function() { return _config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"]; });

/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards */ "./src/app/core/guards/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _guards__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]; });

/* harmony import */ var _interceptors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interceptors */ "./src/app/core/interceptors/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _interceptors__WEBPACK_IMPORTED_MODULE_4__["ErrorInterceptor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _interceptors__WEBPACK_IMPORTED_MODULE_4__["JwtInterceptor"]; });

/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models */ "./src/app/core/models/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _models__WEBPACK_IMPORTED_MODULE_5__["User"]; });

/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services */ "./src/app/core/services/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _services__WEBPACK_IMPORTED_MODULE_6__["AlertService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _services__WEBPACK_IMPORTED_MODULE_6__["UserService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return _services__WEBPACK_IMPORTED_MODULE_6__["ApiService"]; });

var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};









/***/ }),

/***/ "./src/app/core/interceptors/error.interceptor.ts":
/*!********************************************************!*\
  !*** ./src/app/core/interceptors/error.interceptor.ts ***!
  \********************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





let ErrorInterceptor = class ErrorInterceptor {
    constructor(authenticationService, alertService, router) {
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.router = router;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                location.reload(true);
            }
            else if (err.status === 403) {
                // logout if 403 response returned from api
                this.authenticationService.invalidate();
                this.alertService.error(err.error.message, true);
                this.router.navigate(['/login']);
            }
            else if (err.status === 0) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('We can not process your request right now. Please try again later.');
            }
            const error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: _core_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _core_services__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
ErrorInterceptor = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
        _core_services__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], ErrorInterceptor);



/***/ }),

/***/ "./src/app/core/interceptors/index.ts":
/*!********************************************!*\
  !*** ./src/app/core/interceptors/index.ts ***!
  \********************************************/
/*! exports provided: ErrorInterceptor, JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/core/interceptors/error.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_0__["ErrorInterceptor"]; });

/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/core/interceptors/jwt.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__["JwtInterceptor"]; });

var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




/***/ }),

/***/ "./src/app/core/interceptors/jwt.interceptor.ts":
/*!******************************************************!*\
  !*** ./src/app/core/interceptors/jwt.interceptor.ts ***!
  \******************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let JwtInterceptor = class JwtInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        // add authorization header with jwt token if available
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`,
                },
            });
        }
        return next.handle(request);
    }
};
JwtInterceptor.ctorParameters = () => [
    { type: _core_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }
];
JwtInterceptor = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
], JwtInterceptor);



/***/ }),

/***/ "./src/app/core/material.module.ts":
/*!*****************************************!*\
  !*** ./src/app/core/material.module.ts ***!
  \*****************************************/
/*! exports provided: CustomMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomMaterialModule", function() { return CustomMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let CustomMaterialModule = class CustomMaterialModule {
};
CustomMaterialModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatLineModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatOptionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPseudoCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
        ],
        exports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatLineModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatOptionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPseudoCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
        ],
    })
], CustomMaterialModule);



/***/ }),

/***/ "./src/app/core/models/index.ts":
/*!**************************************!*\
  !*** ./src/app/core/models/index.ts ***!
  \**************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./src/app/core/models/user.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _user__WEBPACK_IMPORTED_MODULE_0__["User"]; });

var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



/***/ }),

/***/ "./src/app/core/models/user.ts":
/*!*************************************!*\
  !*** ./src/app/core/models/user.ts ***!
  \*************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var json2typescript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! json2typescript */ "./node_modules/json2typescript/index.js");
/* harmony import */ var json2typescript__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(json2typescript__WEBPACK_IMPORTED_MODULE_0__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

class User {
    constructor() {
        this.id = undefined;
        this.username = undefined;
        this.password = undefined;
        this.name = undefined;
        this.email = undefined;
        this.bio = undefined;
        this.company = undefined;
        this.location = undefined;
        this.token = undefined;
        this.active = true;
    }
}
__decorate([
    Object(json2typescript__WEBPACK_IMPORTED_MODULE_0__["JsonProperty"])('_id', String, true),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    Object(json2typescript__WEBPACK_IMPORTED_MODULE_0__["JsonProperty"])('username', String, true),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    Object(json2typescript__WEBPACK_IMPORTED_MODULE_0__["JsonProperty"])('password', String, true),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    Object(json2typescript__WEBPACK_IMPORTED_MODULE_0__["JsonProperty"])('name', String, true),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    Object(json2typescript__WEBPACK_IMPORTED_MODULE_0__["JsonProperty"])('email', String, true),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    Object(json2typescript__WEBPACK_IMPORTED_MODULE_0__["JsonProperty"])('bio', String, true),
    __metadata("design:type", String)
], User.prototype, "bio", void 0);
__decorate([
    Object(json2typescript__WEBPACK_IMPORTED_MODULE_0__["JsonProperty"])('company', String, true),
    __metadata("design:type", String)
], User.prototype, "company", void 0);
__decorate([
    Object(json2typescript__WEBPACK_IMPORTED_MODULE_0__["JsonProperty"])('location', String, true),
    __metadata("design:type", String)
], User.prototype, "location", void 0);
__decorate([
    Object(json2typescript__WEBPACK_IMPORTED_MODULE_0__["JsonProperty"])('token', String, true),
    __metadata("design:type", String)
], User.prototype, "token", void 0);
__decorate([
    Object(json2typescript__WEBPACK_IMPORTED_MODULE_0__["JsonProperty"])('active', Boolean, true),
    __metadata("design:type", Boolean)
], User.prototype, "active", void 0);


/***/ }),

/***/ "./src/app/core/services/alert/alert.service.ts":
/*!******************************************************!*\
  !*** ./src/app/core/services/alert/alert.service.ts ***!
  \******************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let AlertService = class AlertService {
    constructor(router) {
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    this.subject.next();
                }
            }
        });
    }
    success(message, keepAfterNavigationChange = false) {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    }
    error(message, keepAfterNavigationChange = false) {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    }
    getMessage() {
        return this.subject.asObservable();
    }
};
AlertService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
AlertService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], AlertService);



/***/ }),

/***/ "./src/app/core/services/api/api.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/api/api.service.ts ***!
  \**************************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/app-config */ "./src/app/core/config/app-config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



const BASE_URL = _config_app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"].API_URL;
let ApiService = class ApiService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json'),
        };
    }
    get(path, params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()) {
        return this.httpClient.get(BASE_URL + path, { params });
    }
    put(path, body = {}) {
        return this.httpClient.put(BASE_URL + path, JSON.stringify(body), this.options);
    }
    post(path, body = {}) {
        return this.httpClient.post(BASE_URL + path, JSON.stringify(body), this.options);
    }
    delete(path, options = {}) {
        return this.httpClient.delete(BASE_URL + path, options);
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ApiService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root',
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], ApiService);



/***/ }),

/***/ "./src/app/core/services/authentication/authentication.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/core/services/authentication/authentication.service.ts ***!
  \************************************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/models */ "./src/app/core/models/index.ts");
/* harmony import */ var json2typescript__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! json2typescript */ "./node_modules/json2typescript/index.js");
/* harmony import */ var json2typescript__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(json2typescript__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/api.service */ "./src/app/core/services/api/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






const routes = {
    login: '/users/authenticate',
    logout: '/users/logout',
};
let AuthenticationService = class AuthenticationService {
    constructor(apiService) {
        this.apiService = apiService;
        this.jsonConvert = new json2typescript__WEBPACK_IMPORTED_MODULE_4__["JsonConvert"]();
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    login(username, password) {
        return this.apiService.post(routes.login, { username, password }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(user => {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                const mappedUser = this.jsonConvert.deserialize(user, _core_models__WEBPACK_IMPORTED_MODULE_3__["User"]);
                localStorage.setItem('currentUser', JSON.stringify(mappedUser));
                this.currentUserSubject.next(mappedUser);
            }
            return user;
        }));
    }
    logout() {
        this.apiService.post(routes.logout).subscribe();
        // remove user from local storage to log user out
        this.invalidate();
    }
    invalidate() {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
    refreshLocalData() {
        this.currentUserSubject.next(JSON.parse(localStorage.getItem('currentUser')));
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _api_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }
];
AuthenticationService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
    __metadata("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]])
], AuthenticationService);



/***/ }),

/***/ "./src/app/core/services/index.ts":
/*!****************************************!*\
  !*** ./src/app/core/services/index.ts ***!
  \****************************************/
/*! exports provided: AlertService, AuthenticationService, UserService, ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert/alert.service */ "./src/app/core/services/alert/alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"]; });

/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication/authentication.service */ "./src/app/core/services/authentication/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]; });

/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/user.service */ "./src/app/core/services/user/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]; });

/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/api.service */ "./src/app/core/services/api/api.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return _api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]; });

var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






/***/ }),

/***/ "./src/app/core/services/user/user.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/user/user.service.ts ***!
  \****************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/models */ "./src/app/core/models/index.ts");
/* harmony import */ var json2typescript__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! json2typescript */ "./node_modules/json2typescript/index.js");
/* harmony import */ var json2typescript__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(json2typescript__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../authentication/authentication.service */ "./src/app/core/services/authentication/authentication.service.ts");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/api.service */ "./src/app/core/services/api/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







const routes = {
    users: '/users',
    user: (id) => `/users/${id}`,
    register: '/users/register',
    changePassword: (id) => `/users/${id}/password`,
    deactivate: (id) => `/users/${id}/deactivate`,
    search: (keyword, method) => `/users/search/${keyword}/${method}`,
    deleteAccount: '/users/deleteAccount',
    forgotPassword: '/users/forgot-password',
    resetPassword: '/users/reset-password',
};
let UserService = class UserService {
    constructor(apiService, authenticationService) {
        this.apiService = apiService;
        this.authenticationService = authenticationService;
        this.jsonConvert = new json2typescript__WEBPACK_IMPORTED_MODULE_3__["JsonConvert"]();
    }
    getAll() {
        return this.apiService.get(routes.users).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(users => {
            return this.jsonConvert.deserializeArray(users, _core_models__WEBPACK_IMPORTED_MODULE_2__["User"]);
        }));
    }
    getById(id) {
        return this.apiService.get(routes.user(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(user => {
            return this.jsonConvert.deserialize(user, _core_models__WEBPACK_IMPORTED_MODULE_2__["User"]);
        }));
    }
    update(user) {
        return this.apiService.put(routes.user(user.id), user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => {
            this.updateUserLocal(user);
        }));
    }
    delete(id) {
        return this.apiService.delete(routes.user(id));
    }
    deactivate(id) {
        return this.apiService.put(routes.deactivate(id));
    }
    deleteAccount(id, password) {
        const body = { id, password };
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({}),
            body,
        };
        return this.apiService.delete(routes.deleteAccount, options);
    }
    updateUserLocal(user) {
        const currentUser = this.authenticationService.currentUserValue;
        if (!!currentUser && !!user) {
            const mappedUser = this.jsonConvert.deserialize(user, _core_models__WEBPACK_IMPORTED_MODULE_2__["User"]);
            currentUser.name =
                mappedUser.name !== undefined && mappedUser.name !== null
                    ? mappedUser.name
                    : currentUser.name;
            currentUser.bio =
                mappedUser.bio !== undefined && mappedUser.bio !== null
                    ? mappedUser.bio
                    : currentUser.bio;
            currentUser.company =
                mappedUser.company !== undefined && mappedUser.company !== null
                    ? mappedUser.company
                    : currentUser.company;
            currentUser.location =
                mappedUser.location !== undefined && mappedUser.location !== null
                    ? mappedUser.location
                    : currentUser.location;
            currentUser.email =
                mappedUser.email !== undefined && mappedUser.email !== null
                    ? mappedUser.email
                    : currentUser.email;
            currentUser.username =
                mappedUser.username !== undefined && mappedUser.username !== null
                    ? mappedUser.username
                    : currentUser.username;
            currentUser.active =
                mappedUser.active !== undefined && mappedUser.active !== null
                    ? mappedUser.active
                    : currentUser.active;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            this.authenticationService.refreshLocalData();
        }
    }
};
UserService.ctorParameters = () => [
    { type: _api_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }
];
UserService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    __metadata("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"],
        _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]])
], UserService);



/***/ }),

/***/ "./src/app/safe.pipe.ts":
/*!******************************!*\
  !*** ./src/app/safe.pipe.ts ***!
  \******************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let SafePipe = class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
};
SafePipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }
];
SafePipe = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
        name: 'safe',
    }),
    __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
], SafePipe);



/***/ }),

/***/ "./src/app/shared/components/alert/alert.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/components/alert/alert.component.ts ***!
  \************************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let AlertComponent = class AlertComponent {
    constructor(alertService, snackBar) {
        this.alertService = alertService;
        this.snackBar = snackBar;
        this.setAutoHide = true;
        this.autoHide = 5000;
        this.horizontalPosition = 'center';
        this.verticalPosition = 'bottom';
    }
    ngOnInit() {
        const config = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarConfig"]();
        config.verticalPosition = this.verticalPosition;
        config.horizontalPosition = this.horizontalPosition;
        config.duration = this.setAutoHide ? this.autoHide : 0;
        this.subscription = this.alertService.getMessage().subscribe(message => {
            this.message = message;
            if (this.message) {
                if (this.message.type === 'success') {
                    console.log(this.message.type);
                    config.panelClass = ['success-snackbar'];
                }
                else if (this.message.type === 'error') {
                    config.panelClass = ['error-snackbar'];
                }
                this.snackBar.open(this.message.text, 'Close', config);
            }
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
AlertComponent.ctorParameters = () => [
    { type: _core_services__WEBPACK_IMPORTED_MODULE_1__["AlertService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
AlertComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-alert',
        template: __importDefault(__webpack_require__(/*! raw-loader!./alert.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/alert/alert.component.html")).default,
    }),
    __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_1__["AlertService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
], AlertComponent);



/***/ }),

/***/ "./src/app/shared/components/change-language/change-language.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/change-language/change-language.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".language-flag {\n  padding-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdW9uZy5tYWkvTVdELVdPUksvVFJBSU5JTkcvQU5HVUxBUl84X1RSQUlOSU5HL1NvdXJjZS9td2Qtc3dhdGFuZy1mZS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NoYW5nZS1sYW5ndWFnZS9jaGFuZ2UtbGFuZ3VhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NoYW5nZS1sYW5ndWFnZS9jaGFuZ2UtbGFuZ3VhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2hhbmdlLWxhbmd1YWdlL2NoYW5nZS1sYW5ndWFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYW5ndWFnZS1mbGFnIHtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuIiwiLmxhbmd1YWdlLWZsYWcge1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/shared/components/change-language/change-language.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/change-language/change-language.component.ts ***!
  \********************************************************************************/
/*! exports provided: ChangeLanguageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeLanguageComponent", function() { return ChangeLanguageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let ChangeLanguageComponent = class ChangeLanguageComponent {
    constructor(localeId) {
        this.localeId = localeId;
        this.languages = [
            { code: 'en', label: 'English', src: 'assets/image/eng-flag.png' },
            { code: 'ja', label: '日本語', src: 'assets/image/japan-flag.png' },
        ];
        this.changeLanguage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.currLocale = localStorage.getItem('locale');
    }
    onSetLanguage(lang) {
        this.changeLanguage.emit(lang);
    }
};
ChangeLanguageComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"],] }] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], ChangeLanguageComponent.prototype, "changeLanguage", void 0);
ChangeLanguageComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-change-language',
        template: __importDefault(__webpack_require__(/*! raw-loader!./change-language.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/change-language/change-language.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./change-language.component.scss */ "./src/app/shared/components/change-language/change-language.component.scss")).default]
    }),
    __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"])),
    __metadata("design:paramtypes", [String])
], ChangeLanguageComponent);



/***/ }),

/***/ "./src/app/shared/components/change-theme/change-theme.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/change-theme/change-theme.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NoYW5nZS10aGVtZS9jaGFuZ2UtdGhlbWUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/shared/components/change-theme/change-theme.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/change-theme/change-theme.component.ts ***!
  \**************************************************************************/
/*! exports provided: ChangeThemeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeThemeComponent", function() { return ChangeThemeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm2015/overlay.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let ChangeThemeComponent = class ChangeThemeComponent {
    constructor(overlayContainer) {
        this.overlayContainer = overlayContainer;
        this.themes = [
            { id: 'default-theme', name: 'Default Theme' },
            { id: 'dark-theme', name: 'Dark Theme' },
            { id: 'light-theme', name: 'Light Theme' },
        ];
        this.selectedTheme = this.themes[0];
        this.themeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    onSetTheme(theme) {
        this.selectedTheme = theme;
        this.overlayContainer
            .getContainerElement()
            .classList.add(this.selectedTheme.id);
        this.themeChange.emit(this.selectedTheme.id);
    }
};
ChangeThemeComponent.ctorParameters = () => [
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayContainer"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], ChangeThemeComponent.prototype, "themeChange", void 0);
ChangeThemeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-change-theme',
        template: __importDefault(__webpack_require__(/*! raw-loader!./change-theme.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/change-theme/change-theme.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./change-theme.component.scss */ "./src/app/shared/components/change-theme/change-theme.component.scss")).default]
    }),
    __metadata("design:paramtypes", [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayContainer"]])
], ChangeThemeComponent);



/***/ }),

/***/ "./src/app/shared/components/input/input.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/components/input/input.component.ts ***!
  \************************************************************/
/*! exports provided: CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR", function() { return CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


const noop = () => { };
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => InputComponent),
    multi: true,
};
let InputComponent = class InputComponent {
    constructor() {
        this.errorVisible = false;
        this.type = 'text';
        this.rows = 1;
        this.placeholder = '';
        this.icon = '';
        this.innerValue = '';
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
    }
    get value() {
        return this.innerValue;
    }
    set value(v) {
        if (v !== this.innerValue) {
            this.innerValue = v;
            this.onChangeCallback(v);
        }
    }
    onBlur() {
        this.onTouchedCallback();
    }
    writeValue(value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    get hasError() {
        for (const error in this.errors) {
            if (this.errors[error]) {
                return true;
            }
        }
        return false;
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], InputComponent.prototype, "errorVisible", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], InputComponent.prototype, "errors", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", String)
], InputComponent.prototype, "type", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Number)
], InputComponent.prototype, "rows", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], InputComponent.prototype, "errorsDef", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", String)
], InputComponent.prototype, "placeholder", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", String)
], InputComponent.prototype, "icon", void 0);
InputComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        // tslint:disable-next-line:component-selector
        selector: 'form-input',
        template: __importDefault(__webpack_require__(/*! raw-loader!./input.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/input/input.component.html")).default,
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
    })
], InputComponent);



/***/ }),

/***/ "./src/app/shared/components/loading/loading.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/loading/loading.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".loading {\n  position: fixed;\n  z-index: 9999;\n  height: 1.5em;\n  width: 1.5em;\n  overflow: visible;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdW9uZy5tYWkvTVdELVdPUksvVFJBSU5JTkcvQU5HVUxBUl84X1RSQUlOSU5HL1NvdXJjZS9td2Qtc3dhdGFuZy1mZS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkaW5nIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTk5O1xuICBoZWlnaHQ6IDEuNWVtO1xuICB3aWR0aDogMS41ZW07XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBtYXJnaW46IGF1dG87XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn1cbiIsIi5sb2FkaW5nIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTk5O1xuICBoZWlnaHQ6IDEuNWVtO1xuICB3aWR0aDogMS41ZW07XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBtYXJnaW46IGF1dG87XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/components/loading/loading.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/loading/loading.component.ts ***!
  \****************************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let LoadingComponent = class LoadingComponent {
    constructor() {
        this.visible = false;
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Boolean)
], LoadingComponent.prototype, "visible", void 0);
LoadingComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-loading',
        template: __importDefault(__webpack_require__(/*! raw-loader!./loading.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/loading/loading.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./loading.component.scss */ "./src/app/shared/components/loading/loading.component.scss")).default]
    })
], LoadingComponent);



/***/ }),

/***/ "./src/app/shared/components/table-basic-responsive/table-basic-responsive.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/shared/components/table-basic-responsive/table-basic-responsive.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table-container {\n  display: flex;\n  flex-direction: column;\n  max-height: 500px;\n  min-width: 300px;\n  overflow-y: scroll;\n}\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px;\n}\n\n.mobile-label {\n  display: none;\n}\n\n@media (max-width: 600px) {\n  .mobile-label {\n    width: 100px;\n    display: inline-block;\n    font-weight: bold;\n  }\n\n  .mat-header-row {\n    display: none;\n  }\n\n  .mat-row {\n    flex-direction: column;\n    align-items: start;\n    padding: 8px 10px;\n    min-height: 0px;\n  }\n\n  .mat-cell {\n    min-height: 30px;\n  }\n\n  .mat-cell:first-of-type {\n    padding-left: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sdW9uZy5tYWkvTVdELVdPUksvVFJBSU5JTkcvQU5HVUxBUl84X1RSQUlOSU5HL1NvdXJjZS9td2Qtc3dhdGFuZy1mZS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3RhYmxlLWJhc2ljLXJlc3BvbnNpdmUvdGFibGUtYmFzaWMtcmVzcG9uc2l2ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGFibGUtYmFzaWMtcmVzcG9uc2l2ZS90YWJsZS1iYXNpYy1yZXNwb25zaXZlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLHFCQUFBO0lBQ0EsaUJBQUE7RUNDRjs7RURFQTtJQUNFLGFBQUE7RUNDRjs7RURFQTtJQUNFLHNCQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7RUNDRjs7RURFQTtJQUNFLGdCQUFBO0VDQ0Y7O0VERUE7SUFDRSxpQkFBQTtFQ0NGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy90YWJsZS1iYXNpYy1yZXNwb25zaXZlL3RhYmxlLWJhc2ljLXJlc3BvbnNpdmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLm1hdC10YWJsZSB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbn1cblxuLm1vYmlsZS1sYWJlbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubW9iaWxlLWxhYmVsIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgLm1hdC1oZWFkZXItcm93IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLm1hdC1yb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgIHBhZGRpbmc6IDhweCAxMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDBweDtcbiAgfVxuXG4gIC5tYXQtY2VsbCB7XG4gICAgbWluLWhlaWdodDogMzBweDtcbiAgfVxuXG4gIC5tYXQtY2VsbDpmaXJzdC1vZi10eXBlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgfVxufVxuIiwiLnRhYmxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi5tYXQtdGFibGUge1xuICBvdmVyZmxvdzogYXV0bztcbiAgbWF4LWhlaWdodDogNTAwcHg7XG59XG5cbi5tb2JpbGUtbGFiZWwge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLm1vYmlsZS1sYWJlbCB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuXG4gIC5tYXQtaGVhZGVyLXJvdyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5tYXQtcm93IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgICBwYWRkaW5nOiA4cHggMTBweDtcbiAgICBtaW4taGVpZ2h0OiAwcHg7XG4gIH1cblxuICAubWF0LWNlbGwge1xuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XG4gIH1cblxuICAubWF0LWNlbGw6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/components/table-basic-responsive/table-basic-responsive.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/components/table-basic-responsive/table-basic-responsive.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: TableBasicResponsiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableBasicResponsiveComponent", function() { return TableBasicResponsiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let TableBasicResponsiveComponent = class TableBasicResponsiveComponent {
    // {
    //   'displayedColumns' : ['position', 'name'],
    //   'columnsConfig' : [
    //     {
    //       key : "position",
    //       name : "Position"
    //     },
    //     {
    //       key : "name",
    //       name : "Name"
    //     }
    //   ]
    // };
    constructor() {
        this.displayedColumns = [];
        this.columns = [];
    }
    ngOnInit() {
        this.displayedColumns = this.dataColumn.displayedColumns;
        this.columns = this.dataColumn.columnsConfig;
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"])
], TableBasicResponsiveComponent.prototype, "dataSource", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], TableBasicResponsiveComponent.prototype, "dataColumn", void 0);
TableBasicResponsiveComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-table-basic-responsive',
        template: __importDefault(__webpack_require__(/*! raw-loader!./table-basic-responsive.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/table-basic-responsive/table-basic-responsive.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./table-basic-responsive.component.scss */ "./src/app/shared/components/table-basic-responsive/table-basic-responsive.component.scss")).default]
    }),
    __metadata("design:paramtypes", [])
], TableBasicResponsiveComponent);



/***/ }),

/***/ "./src/app/shared/components/validation-messages/validation-messages.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/validation-messages/validation-messages.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ValidationMessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationMessagesComponent", function() { return ValidationMessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_shared_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/validation */ "./src/app/shared/validation/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let ValidationMessagesComponent = class ValidationMessagesComponent {
    constructor(validationService) {
        this.validationService = validationService;
    }
    ngOnInit() { }
    get messages() {
        return this.validationService.getValidationErrorMessages(this.errors, this.errorsDef);
    }
};
ValidationMessagesComponent.ctorParameters = () => [
    { type: _app_shared_validation__WEBPACK_IMPORTED_MODULE_1__["ValidationService"] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], ValidationMessagesComponent.prototype, "errors", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], ValidationMessagesComponent.prototype, "errorsDef", void 0);
ValidationMessagesComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        // tslint:disable-next-line:component-selector
        selector: 'validation-messages',
        template: __importDefault(__webpack_require__(/*! raw-loader!./validation-messages.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/validation-messages/validation-messages.component.html")).default,
    }),
    __metadata("design:paramtypes", [_app_shared_validation__WEBPACK_IMPORTED_MODULE_1__["ValidationService"]])
], ValidationMessagesComponent);



/***/ }),

/***/ "./src/app/shared/constants/constants.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/constants/constants.ts ***!
  \***********************************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
class Constants {
}
Constants.MAX_LENGTH_SEARCH = 2048;


/***/ }),

/***/ "./src/app/shared/constants/enum.ts":
/*!******************************************!*\
  !*** ./src/app/shared/constants/enum.ts ***!
  \******************************************/
/*! exports provided: SearchMethod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchMethod", function() { return SearchMethod; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var SearchMethod;
(function (SearchMethod) {
    SearchMethod[SearchMethod["Name"] = 0] = "Name";
    SearchMethod[SearchMethod["Username"] = 1] = "Username";
    SearchMethod[SearchMethod["Email"] = 2] = "Email";
})(SearchMethod || (SearchMethod = {}));


/***/ }),

/***/ "./src/app/shared/constants/index.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/constants/index.ts ***!
  \*******************************************/
/*! exports provided: Constants, SearchMethod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/app/shared/constants/constants.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"]; });

/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enum */ "./src/app/shared/constants/enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchMethod", function() { return _enum__WEBPACK_IMPORTED_MODULE_1__["SearchMethod"]; });

var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: SharedModule, Constants, SearchMethod, FieldValidators, ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.module */ "./src/app/shared/shared.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]; });

/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/app/shared/constants/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["Constants"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchMethod", function() { return _constants__WEBPACK_IMPORTED_MODULE_1__["SearchMethod"]; });

/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validation */ "./src/app/shared/validation/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FieldValidators", function() { return _validation__WEBPACK_IMPORTED_MODULE_2__["FieldValidators"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return _validation__WEBPACK_IMPORTED_MODULE_2__["ValidationService"]; });

var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/alert/alert.component */ "./src/app/shared/components/alert/alert.component.ts");
/* harmony import */ var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/loading/loading.component */ "./src/app/shared/components/loading/loading.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _components_input_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/input/input.component */ "./src/app/shared/components/input/input.component.ts");
/* harmony import */ var _components_validation_messages_validation_messages_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/validation-messages/validation-messages.component */ "./src/app/shared/components/validation-messages/validation-messages.component.ts");
/* harmony import */ var _components_change_theme_change_theme_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/change-theme/change-theme.component */ "./src/app/shared/components/change-theme/change-theme.component.ts");
/* harmony import */ var _components_change_language_change_language_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/change-language/change-language.component */ "./src/app/shared/components/change-language/change-language.component.ts");
/* harmony import */ var _app_safe_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/safe.pipe */ "./src/app/safe.pipe.ts");
/* harmony import */ var _components_table_basic_responsive_table_basic_responsive_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/table-basic-responsive/table-basic-responsive.component */ "./src/app/shared/components/table-basic-responsive/table-basic-responsive.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};












let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"],
            _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"],
            _components_input_input_component__WEBPACK_IMPORTED_MODULE_6__["InputComponent"],
            _components_validation_messages_validation_messages_component__WEBPACK_IMPORTED_MODULE_7__["ValidationMessagesComponent"],
            _components_change_theme_change_theme_component__WEBPACK_IMPORTED_MODULE_8__["ChangeThemeComponent"],
            _components_change_language_change_language_component__WEBPACK_IMPORTED_MODULE_9__["ChangeLanguageComponent"],
            _app_safe_pipe__WEBPACK_IMPORTED_MODULE_10__["SafePipe"],
            _components_table_basic_responsive_table_basic_responsive_component__WEBPACK_IMPORTED_MODULE_11__["TableBasicResponsiveComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _app_core__WEBPACK_IMPORTED_MODULE_5__["CustomMaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        ],
        exports: [
            _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_2__["AlertComponent"],
            _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_3__["LoadingComponent"],
            _app_core__WEBPACK_IMPORTED_MODULE_5__["CustomMaterialModule"],
            _components_input_input_component__WEBPACK_IMPORTED_MODULE_6__["InputComponent"],
            _components_validation_messages_validation_messages_component__WEBPACK_IMPORTED_MODULE_7__["ValidationMessagesComponent"],
            _components_change_theme_change_theme_component__WEBPACK_IMPORTED_MODULE_8__["ChangeThemeComponent"],
            _components_change_language_change_language_component__WEBPACK_IMPORTED_MODULE_9__["ChangeLanguageComponent"],
            _components_table_basic_responsive_table_basic_responsive_component__WEBPACK_IMPORTED_MODULE_11__["TableBasicResponsiveComponent"],
        ],
    })
], SharedModule);



/***/ }),

/***/ "./src/app/shared/validation/field-validator.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/validation/field-validator.ts ***!
  \******************************************************/
/*! exports provided: FieldValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldValidators", function() { return FieldValidators; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

class FieldValidators {
    constructor() { }
    static emptyValidator() {
        return (control) => {
            const text = control.value;
            if (text === '' || (text && text.trim().length === 0)) {
                return { emptyValid: { value: true } };
            }
            else {
                return null;
            }
        };
    }
    static atLeastOneNonAlphabeticValidator() {
        return (control) => {
            const rex = new RegExp('[^a-zA-Z]+');
            const isValid = rex.test(control.value);
            return isValid
                ? null
                : { atLeastOneNonAlphabetic: { value: control.value } };
        };
    }
    static atLeastFourAlphabeticValidator() {
        return (control) => {
            const rex = new RegExp('[a-zA-Z]{4,}');
            const isValid = rex.test(control.value);
            return isValid
                ? null
                : { atLeastFourAlphabetic: { value: control.value } };
        };
    }
    static matchPassword() {
        return (control) => {
            const password = control.get('newpassword').value;
            const confirmPassword = control.get('confirmpassword').value;
            const isValid = password === confirmPassword;
            if (!isValid) {
                control.get('confirmpassword').setErrors({ matchPassword: true });
            }
            return isValid ? null : { matchPassword: { value: confirmPassword } };
        };
    }
    static emailAddress() {
        return _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('^[^@]+@[^@]+$');
    }
    static username() {
        return _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('^[a-zA-Z0-9]+$');
    }
}


/***/ }),

/***/ "./src/app/shared/validation/index.ts":
/*!********************************************!*\
  !*** ./src/app/shared/validation/index.ts ***!
  \********************************************/
/*! exports provided: FieldValidators, ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _field_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./field-validator */ "./src/app/shared/validation/field-validator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FieldValidators", function() { return _field_validator__WEBPACK_IMPORTED_MODULE_0__["FieldValidators"]; });

/* harmony import */ var _validation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validation.service */ "./src/app/shared/validation/validation.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return _validation_service__WEBPACK_IMPORTED_MODULE_1__["ValidationService"]; });

var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




/***/ }),

/***/ "./src/app/shared/validation/validation.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/validation/validation.service.ts ***!
  \*********************************************************/
/*! exports provided: ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let ValidationService = class ValidationService {
    constructor() {
        this.fieldValidationMessages = {
            usernameMinLength: 'Minimum length of username must be 6 characters.',
            usernameRequired: 'Username is required.',
            usernamePattern: 'Username must contain only alphabetic characters.',
            nameRequired: 'Name is required.',
            nameMaxLength: 'The maximum length of name is 50 characters.',
            emailRequired: 'Email is required.',
            emailPattern: 'Please enter a valid email address.',
            passwordRequired: 'Password is required.',
            passwordAlphabeticChars: 'The password must contain at least four alphabetic characters.',
            passwordNonAlphabetucChars: 'The password must contain at least one non-alphabetic character.',
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
        };
    }
    getValidationErrorMessage(validatorName, errorsDef) {
        if (errorsDef && errorsDef[validatorName]) {
            return errorsDef[validatorName];
        }
        else {
            return this.fieldValidationMessages[validatorName]
                ? this.fieldValidationMessages[validatorName]
                : validatorName;
        }
    }
    getValidationErrorMessages(errors, errorsDef) {
        const messages = [];
        for (const error in errors) {
            if (errors.hasOwnProperty(error) && errors[error] === true) {
                const message = this.getValidationErrorMessage(error, errorsDef);
                messages.push(message);
            }
        }
        return messages;
    }
};
ValidationService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' })
], ValidationService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/locale sync recursive ./node_modules/raw-loader/dist/cjs.js!./ ^\\.\\/messages\\..*\\.xlf$":
/*!***************************************************************************************!*\
  !*** ./src/locale sync ./node_modules/raw-loader/dist/cjs.js ^\.\/messages\..*\.xlf$ ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./messages.en.xlf": "./node_modules/raw-loader/dist/cjs.js!./src/locale/messages.en.xlf",
	"./messages.ja.xlf": "./node_modules/raw-loader/dist/cjs.js!./src/locale/messages.ja.xlf"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/locale sync recursive ./node_modules/raw-loader/dist/cjs.js!./ ^\\.\\/messages\\..*\\.xlf$";

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
if (localStorage.getItem('locale') === null) {
    localStorage.setItem('locale', 'en');
}
const locale = localStorage.getItem('locale');
// we use the webpack raw-loader to return the content as a string
// tslint:disable-next-line:no-var-requires
const translations = __webpack_require__("./src/locale sync recursive ./node_modules/raw-loader/dist/cjs.js!./ ^\\.\\/messages\\..*\\.xlf$")(`./messages.${locale}.xlf`).default;
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"], {
    missingTranslation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["MissingTranslationStrategy"].Warning,
    providers: [
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TRANSLATIONS"], useValue: translations },
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TRANSLATIONS_FORMAT"], useValue: 'xlf' },
    ],
})
    .catch(err => {
    console.error(err);
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/luong.mai/MWD-WORK/TRAINING/ANGULAR_8_TRAINING/Source/mwd-swatang-fe/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map