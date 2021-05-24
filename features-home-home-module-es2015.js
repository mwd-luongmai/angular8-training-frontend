(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/home/home-page/home-page.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/home/home-page/home-page.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"flex-comp-container\">\n  <div class=\"flex-comp-item\">\n    <div class=\"person-grid-container\">\n      <mat-card class=\"person-card-item\" *ngFor=\"let user of users\">\n        <mat-card-header>\n          <mat-card-title>{{ user.name }}</mat-card-title>\n          <mat-card-subtitle\n            >{{ user.username }} (<span *ngIf=\"user.active; else inActive\" i18n\n              >Active</span\n            >)<ng-template #inActive><span i18n>Inactive</span></ng-template>\n          </mat-card-subtitle>\n        </mat-card-header>\n        <img\n          class=\"person-avatar\"\n          mat-card-image\n          src=\"assets/image/default-avatar.png\"\n          alt=\"Avatar\"\n        />\n        <mat-card-content></mat-card-content>\n        <mat-card-actions>\n          <a\n            mat-button\n            color=\"warn\"\n            *ngIf=\"user.active\"\n            (click)=\"deactivateUser(user.id)\"\n            class=\"text-warning\"\n          >\n            <mat-icon><i class=\"material-icons md-dark\">block</i></mat-icon\n            ><ng-container i18n>Deactivate</ng-container>\n          </a>\n        </mat-card-actions>\n      </mat-card>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/features/home/home-page/home-page.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/features/home/home-page/home-page.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".flex-comp-container {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  align-items: stretch;\n}\n\n.person-grid-container {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-around;\n}\n\n.person-card-item {\n  flex-basis: 350px;\n  height: 120px;\n  margin-top: 20px;\n}\n\n.person-card-item mat-card-title {\n  text-align: left;\n}\n\n.person-avatar {\n  width: 100px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NpcmNsZWNpL2FuZ3VsYXI4LXRyYWluaW5nL3NyYy9hcHAvZmVhdHVyZXMvaG9tZS9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy9ob21lL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0FDQUY7O0FETUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQ0hGOztBRE1BO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNIRjs7QURJRTtFQUNFLGdCQUFBO0FDRko7O0FETUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2hvbWUvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEZsZXggUmVzcG9uc2l2ZVxuLmZsZXgtY29tcC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG5cbi5mbGV4LWNvbXAtaXRlbSB7XG59XG5cbi5wZXJzb24tZ3JpZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLnBlcnNvbi1jYXJkLWl0ZW0ge1xuICBmbGV4LWJhc2lzOiAzNTBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWF0LWNhcmQtdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbn1cblxuLnBlcnNvbi1hdmF0YXIge1xuICB3aWR0aDogMTAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuIiwiLmZsZXgtY29tcC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG5cbi5wZXJzb24tZ3JpZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLnBlcnNvbi1jYXJkLWl0ZW0ge1xuICBmbGV4LWJhc2lzOiAzNTBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5wZXJzb24tY2FyZC1pdGVtIG1hdC1jYXJkLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnBlcnNvbi1hdmF0YXIge1xuICB3aWR0aDogMTAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgbWFyZ2luOiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/features/home/home-page/home-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/features/home/home-page/home-page.component.ts ***!
  \****************************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services */ "./src/app/core/services/index.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
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





let HomePageComponent = class HomePageComponent {
    constructor(authenticationService, userService, router, media) {
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.router = router;
        this.users = [];
        this.columns = 4;
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe((user) => {
            this.currentUser = user;
        });
        this.watcher = media.media$.subscribe((change) => {
            if (change) {
                if (change.mqAlias === 'xs') {
                    this.columns = 1;
                }
                else if (change.mqAlias === 'sm') {
                    this.columns = 2;
                }
                else {
                    this.columns = 3;
                }
            }
        });
    }
    ngOnInit() {
        this.loadAllUsers();
    }
    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    }
    deleteUser(id) {
        this.userService.delete(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(() => {
            this.loadAllUsers();
        });
    }
    deactivateUser(id) {
        this.userService.deactivate(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(() => {
            if (this.currentUser.id === id) {
                this.authenticationService.invalidate();
                this.router.navigate(['/login']);
            }
            else {
                this.loadAllUsers();
            }
        });
    }
    loadAllUsers() {
        this.userService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe((users) => {
            this.users = users;
        });
    }
};
HomePageComponent.ctorParameters = () => [
    { type: _core_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _core_services__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["MediaObserver"] }
];
HomePageComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        template: __importDefault(__webpack_require__(/*! raw-loader!./home-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/home/home-page/home-page.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./home-page.component.scss */ "./src/app/features/home/home-page/home-page.component.scss")).default]
    }),
    __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
        _core_services__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["MediaObserver"]])
], HomePageComponent);



/***/ }),

/***/ "./src/app/features/home/home-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/features/home/home-routing.module.ts ***!
  \******************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/features/home/home-page/home-page.component.ts");
/* harmony import */ var _app_core_guards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/guards */ "./src/app/core/guards/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




const routes = [
    {
        path: '',
        component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"],
        canActivate: [_app_core_guards__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
    },
    {
        path: '',
        children: [
            {
                path: 'home-page',
                component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"],
                canActivate: [_app_core_guards__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
            },
        ],
    },
];
let HomeRoutingModule = class HomeRoutingModule {
};
HomeRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
    })
], HomeRoutingModule);



/***/ }),

/***/ "./src/app/features/home/home.module.ts":
/*!**********************************************!*\
  !*** ./src/app/features/home/home.module.ts ***!
  \**********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/features/home/home-routing.module.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/features/home/home-page/home-page.component.ts");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





let HomeModule = class HomeModule {
};
HomeModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"], _app_core__WEBPACK_IMPORTED_MODULE_4__["CustomMaterialModule"]],
    })
], HomeModule);



/***/ })

}]);
//# sourceMappingURL=features-home-home-module-es2015.js.map