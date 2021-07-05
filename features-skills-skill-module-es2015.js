(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-skills-skill-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/skills/skill-list/skill-list.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/skills/skill-list/skill-list.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"flex-comp-container\">\n  <div class=\"flex-comp-item\">\n    <div class=\"person-grid-container\">\n      \n      <mat-card  routerLink=\"/skills/skill-profile\" class=\"person-card-item\" >\n      \n        <mat-card-header>\n          <mat-card-title>Create new skill</mat-card-title>\n        \n        </mat-card-header>\n        <mat-card-content></mat-card-content>\n      \n      </mat-card>\n      <mat-card [routerLink]=\"['/skills/',skill.id]\" *ngFor=\"let skill of skills\"  class=\"person-card-item\" >\n        <mat-card-header>\n          <mat-card-title>{{ skill.skillName }}</mat-card-title>\n          <mat-card-subtitle\n            >{{ skill.skillName }} (<span *ngIf=\"skill.skillStatus; else inActive\" i18n\n              >Active</span\n            >)<ng-template #inActive><span i18n>Inactive</span></ng-template>\n          </mat-card-subtitle>\n        </mat-card-header>\n        <mat-card-content></mat-card-content>\n      \n      </mat-card>\n    \n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/skills/skill-profile/skill-profile.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/skills/skill-profile/skill-profile.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"flex-comp-container skill-profile\">\n  <div class=\"message\" *ngIf=\"errorMessages.server_message && skillId !='' \"><h2>{{errorsDef.server_message}}</h2></div>\n    <mat-card *ngIf=\"isComponentReady\">\n      <mat-card-title class=\"align-left\">{{ skillId?\"Update\":\"Create\" }} Skill Profile </mat-card-title>\n      <mat-card-content>\n        <form [formGroup]=\"skillProfile\" (ngSubmit)=\"onSubmit()\">\n          <div class=\"clear-float\">\n            <button (click)=\"onSubmit()\" mat-raised-button [disabled]=\"loading\" color=\"primary\" class=\"add-skill-level\">\n              <mat-icon><i class=\"material-icons md-dark\">save</i></mat-icon>\n              {{ skillId?\"Update\":\"Create\" }} skill\n            </button>\n          </div>\n          {{messages}}\n\n          <div id=\"form-error\">\n            <validation-messages\n              *ngIf=\"isError\"\n              [errors]=\"errorMessages\"\n              [errorsDef]=\"errorsDef\"\n            ></validation-messages>\n          </div>\n          \n          <form-input\n            formControlName=\"skillName\"\n            [errors]=\"skillProfileForm.skillName.errors\"\n            [errorVisible]=\"!skillProfileForm.skillName.pristine || submitted\"\n            [placeholder]=\"'Enter your skill profile name'\"\n            id=\"skill-name\"\n          ></form-input>\n\n          <form-input\n            formControlName=\"skillSchemaName\"\n            [errors]=\"skillProfileForm.skillSchemaName.errors\"\n            [errorVisible]=\"!skillProfileForm.skillSchemaName.pristine || submitted\"\n            [placeholder]=\"'Enter your skill schema name'\"\n            id=\"skill-schema-name\"\n          ></form-input>\n         \n\n          \n        \n\n          <mat-slide-toggle \n            formControlName=\"skillStatus\"\n            class=\"example-margin\"  \n            \n                 \n            >\n            {{skillProfileForm.skillStatus.value?\"Enabled\":\"Disabled\"}}\n          </mat-slide-toggle>\n\n          <br>\n          <br>\n          <div class=\"clear-float\">Skill Levels</div>\n          <div class=\"clear-float\">\n            <button type=\"button\" (click)=\"onAddSkillLevel()\" id=\"add-skill-button\" mat-raised-button [disabled]=\"loading\" color=\"primary\" class=\"add-skill-level\">\n              <mat-icon><i class=\"material-icons md-dark\">add</i></mat-icon>\n              Add skill level\n            </button>\n            <br>\n          </div>\n\n          <div formArrayName=\"skillLevels\" class=\"clear-float\">\n            \n            <div *ngFor=\"let skill of skillLevels.controls; let i=index\">\n              <div  [formGroupName]=\"i\" class=\"skill-level-detail\" id=\"skill-level-index-{{i}}\">\n                <mat-card>\n                  <mat-card-title class=\"align-left skill-level-title\"> {{skill.get('skillLevelName').value}} \n                    <button type=\"button\" (click)=\"removeSkillLevel(i)\" id=\"remove-skill-button-{{i}}\" [disabled]=\"loading\" mat-mini-fab color=\"warn\" class=\"remove-skill-level\">\n                      <mat-icon>delete</mat-icon>\n                    </button>\n                  </mat-card-title>\n                  <mat-card-content>\n                    \n                      <form-input\n                        formControlName=\"skillLevelName\"\n                        [errors]=\"skill.get('skillLevelName').errors\"\n                        [errorVisible]=\"!skill.get('skillLevelName').pristine || submitted\"\n                        [placeholder]=\"'Enter your skill level'\"\n                        id=\"skill-level-name-{{i}}\"\n                      ></form-input>\n\n                      <br>\n                      <br>\n                      <form-input\n                        formControlName=\"skillLevelDescription\"\n                        [type]=\"'editor'\"\n                        [config]=\"{ toolbar: [ 'heading', '|', 'bold', 'italic' ], initialData: skill.get('skillLevelDescription').value}\"\n                        [errors]=\"skill.get('skillLevelDescription').errors\"\n                        [errorVisible]=\"!skill.get('skillLevelDescription').pristine || submitted\"\n                        [placeholder]=\"'Skill level description'\"\n                        id=\"skill-level-description-{{i}}\"\n                      ></form-input>\n\n                  </mat-card-content>\n                </mat-card>  \n              </div>\n            </div>\n          </div>\n          \n          <div class=\"clear-float\" *ngIf=\"skillLevels.controls.length > 0\">\n            <button (click)=\"onSubmit()\" mat-raised-button [disabled]=\"loading\" color=\"primary\" class=\"add-skill-level\">\n              <mat-icon><i class=\"material-icons md-dark\">save</i></mat-icon>\n              {{ skillId?\"Update\":\"Create\" }} skill\n            </button>\n          </div>\n          <br>\n          <br>\n        </form>\n      </mat-card-content>\n    </mat-card>\n    <app-loading [visible]=\"loading\"></app-loading>\n</div>\n");

/***/ }),

/***/ "./src/app/features/skills/skill-list/skill-list.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/features/skills/skill-list/skill-list.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".flex-comp-container {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n  align-items: stretch;\n}\n\n.person-grid-container {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-around;\n}\n\n.person-card-item {\n  cursor: pointer;\n  flex-basis: 350px;\n  height: 120px;\n  margin-top: 20px;\n}\n\n.person-card-item mat-card-title {\n  text-align: left;\n}\n\n.person-avatar {\n  width: 100px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NpcmNsZWNpL2FuZ3VsYXI4LXRyYWluaW5nL3NyYy9hcHAvZmVhdHVyZXMvc2tpbGxzL3NraWxsLWxpc3Qvc2tpbGwtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmVhdHVyZXMvc2tpbGxzL3NraWxsLWxpc3Qvc2tpbGwtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7QUNBRjs7QURNQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FDSEY7O0FETUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNIRjs7QURJRTtFQUNFLGdCQUFBO0FDRko7O0FETUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3NraWxscy9za2lsbC1saXN0L3NraWxsLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBGbGV4IFJlc3BvbnNpdmVcbi5mbGV4LWNvbXAtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xufVxuXG4uZmxleC1jb21wLWl0ZW0ge1xufVxuXG4ucGVyc29uLWdyaWQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5wZXJzb24tY2FyZC1pdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmbGV4LWJhc2lzOiAzNTBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWF0LWNhcmQtdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbn1cblxuLnBlcnNvbi1hdmF0YXIge1xuICB3aWR0aDogMTAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuIiwiLmZsZXgtY29tcC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG5cbi5wZXJzb24tZ3JpZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLnBlcnNvbi1jYXJkLWl0ZW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsZXgtYmFzaXM6IDM1MHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLnBlcnNvbi1jYXJkLWl0ZW0gbWF0LWNhcmQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ucGVyc29uLWF2YXRhciB7XG4gIHdpZHRoOiAxMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBtYXJnaW46IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/features/skills/skill-list/skill-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/features/skills/skill-list/skill-list.component.ts ***!
  \********************************************************************/
/*! exports provided: SkillListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillListComponent", function() { return SkillListComponent; });
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





let SkillListComponent = class SkillListComponent {
    constructor(skillService, router, media) {
        this.skillService = skillService;
        this.router = router;
        this.skills = [];
        this.columns = 3;
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
        this.loadAllSkills();
    }
    deactivateSkill(id) {
    }
    loadAllSkills() {
        this.skillService.getSkills().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe((skills) => {
            this.skills = skills;
        });
    }
};
SkillListComponent.ctorParameters = () => [
    { type: _core_services__WEBPACK_IMPORTED_MODULE_3__["SkillService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["MediaObserver"] }
];
SkillListComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        template: __importDefault(__webpack_require__(/*! raw-loader!./skill-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/skills/skill-list/skill-list.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./skill-list.component.scss */ "./src/app/features/skills/skill-list/skill-list.component.scss")).default]
    }),
    __metadata("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_3__["SkillService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["MediaObserver"]])
], SkillListComponent);



/***/ }),

/***/ "./src/app/features/skills/skill-profile/skill-profile.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/features/skills/skill-profile/skill-profile.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".skill-profile .clear-float {\n  clear: both;\n}\n.skill-profile .add-skill-level {\n  float: right;\n}\n.skill-profile .align-left {\n  float: left;\n}\n.skill-profile .skill-level-detail {\n  margin: 30px 0px;\n}\n.skill-profile .skill-level-title {\n  font-size: 18px;\n}\n.skill-profile .remove-skill-level {\n  position: absolute;\n  right: 0px;\n  top: 0px;\n  z-index: 10;\n}\n.skill-profile .remove-skill-level .mat-icon {\n  margin-right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NpcmNsZWNpL2FuZ3VsYXI4LXRyYWluaW5nL3NyYy9hcHAvZmVhdHVyZXMvc2tpbGxzL3NraWxsLXByb2ZpbGUvc2tpbGwtcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmVhdHVyZXMvc2tpbGxzL3NraWxsLXByb2ZpbGUvc2tpbGwtcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFdBQUE7QUNBUjtBREVJO0VBQ0ksWUFBQTtBQ0FSO0FESUk7RUFDSSxXQUFBO0FDRlI7QURLSTtFQUNJLGdCQUFBO0FDSFI7QURNSTtFQUNJLGVBQUE7QUNKUjtBRE9JO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUNMUjtBRE9RO0VBQ0ksaUJBQUE7QUNMWiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3NraWxscy9za2lsbC1wcm9maWxlL3NraWxsLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2tpbGwtcHJvZmlsZSB7XG4gICAgLmNsZWFyLWZsb2F0IHtcbiAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgfVxuICAgIC5hZGQtc2tpbGwtbGV2ZWwge1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG5cbiAgICB9XG5cbiAgICAuYWxpZ24tbGVmdCB7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgIH1cblxuICAgIC5za2lsbC1sZXZlbC1kZXRhaWwge1xuICAgICAgICBtYXJnaW46IDMwcHggMHB4O1xuICAgIH1cblxuICAgIC5za2lsbC1sZXZlbC10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG5cbiAgICAucmVtb3ZlLXNraWxsLWxldmVsIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMHB4O1xuICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgIFxuICAgICAgICAubWF0LWljb24ge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIuc2tpbGwtcHJvZmlsZSAuY2xlYXItZmxvYXQge1xuICBjbGVhcjogYm90aDtcbn1cbi5za2lsbC1wcm9maWxlIC5hZGQtc2tpbGwtbGV2ZWwge1xuICBmbG9hdDogcmlnaHQ7XG59XG4uc2tpbGwtcHJvZmlsZSAuYWxpZ24tbGVmdCB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLnNraWxsLXByb2ZpbGUgLnNraWxsLWxldmVsLWRldGFpbCB7XG4gIG1hcmdpbjogMzBweCAwcHg7XG59XG4uc2tpbGwtcHJvZmlsZSAuc2tpbGwtbGV2ZWwtdGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uc2tpbGwtcHJvZmlsZSAucmVtb3ZlLXNraWxsLWxldmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xuICB0b3A6IDBweDtcbiAgei1pbmRleDogMTA7XG59XG4uc2tpbGwtcHJvZmlsZSAucmVtb3ZlLXNraWxsLWxldmVsIC5tYXQtaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/features/skills/skill-profile/skill-profile.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/features/skills/skill-profile/skill-profile.component.ts ***!
  \**************************************************************************/
/*! exports provided: SkillProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillProfileComponent", function() { return SkillProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var json2typescript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! json2typescript */ "./node_modules/json2typescript/index.js");
/* harmony import */ var json2typescript__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(json2typescript__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_shared_validation_field_spec__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/validation/field-spec */ "./src/app/shared/validation/field-spec.ts");
/* harmony import */ var _core_models_skill__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/models/skill */ "./src/app/core/models/skill.ts");
/* harmony import */ var _core_services_skill_skill_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/skill/skill.service */ "./src/app/core/services/skill/skill.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
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









let SkillProfileComponent = class SkillProfileComponent {
    constructor(formBuilder, skillService, router, alertService, route) {
        this.formBuilder = formBuilder;
        this.skillService = skillService;
        this.router = router;
        this.alertService = alertService;
        this.route = route;
        this.loading = false;
        this.submitted = false;
        this.errorMessages = {};
        this.isComponentReady = false;
        this.skillId = '';
        this.errorsDef = {
            'network_error': 'There is error with your network, please check it and try it again',
            'api_error': 'There is error with api, please try it again',
            'server_message': 'Your skill not found',
            'skill_level_require': 'Skill level is required'
        };
        this.initForm = (skill) => {
            this.skillProfile = this.formBuilder.group({
                skillName: [skill ? skill.skillName : '', [_app_shared_validation_field_spec__WEBPACK_IMPORTED_MODULE_3__["FieldSpecs"].fieldRequiredValidator('skillNameRequired', true), _app_shared_validation_field_spec__WEBPACK_IMPORTED_MODULE_3__["FieldSpecs"].fieldMaxLengthValidator('skillNameMaxLength', true, 100)]],
                skillSchemaName: [skill ? skill.skillSchemaName : '', [_app_shared_validation_field_spec__WEBPACK_IMPORTED_MODULE_3__["FieldSpecs"].fieldRequiredValidator('skillSchemaNameRequired', true), _app_shared_validation_field_spec__WEBPACK_IMPORTED_MODULE_3__["FieldSpecs"].fieldMaxLengthValidator('skillSchemaNameLength', true, 100)]],
                skillStatus: [skill ? skill.skillStatus : true],
                skillLevels: this.formBuilder.array([])
            });
            if (skill) {
                skill.skillLevels.forEach(item => this.onAddSkillLevel(item));
            }
        };
        this.initFormErrorMessage = () => {
            this.errorMessages = {
                'skill_level_require': this.skillProfile ? this.skillLevels.length < 1 : false
            };
        };
        this.createSkillProfile = () => {
            this.loading = true;
            this.skillService.createSkillProfile(this.skillProfile.value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(this.handleError))
                .subscribe(result => {
                this.loading = false;
                this.alertService.success('Your skill has been added successfully !');
                this.router.navigate(['/skills']);
            });
        };
        this.updateProfile = () => {
            this.loading = true;
            this.skillService.updateSkillProfile(this.skillId, this.skillProfile.value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(this.handleError))
                .subscribe(result => {
                this.loading = false;
                this.alertService.success('Your skill has been updated successfully!');
                this.router.navigate(['/skills']);
            });
        };
        this.handleError = (error) => {
            this.initFormErrorMessage();
            this.loading = false;
            this.errorMessages['server_message'] = true;
            this.errorsDef.server_message = error.toString();
            this.alertService.error(error.toString());
            return [];
        };
    }
    get skillProfileForm() {
        return this.skillProfile.controls;
    }
    get skillLevels() {
        return this.skillProfile.get('skillLevels');
    }
    get isError() {
        return (this.submitted === true && Object.keys(this.errorMessages).length > 0);
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            if (params['id']) {
                this.skillId = params['id'];
                this.skillService.getSkillProfile(params['id'])
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(this.handleError))
                    .subscribe(skill => {
                    this.skillObject = this.convertFormDataToSkill(skill);
                    this.initForm(this.skillObject);
                    this.isComponentReady = true;
                    this.initFormErrorMessage();
                });
            }
            else {
                this.initForm();
                this.isComponentReady = true;
                this.initFormErrorMessage();
            }
        });
    }
    onAddSkillLevel(skillLevel) {
        const skillLevelGroup = this.formBuilder.group({
            skillLevelName: [skillLevel ? skillLevel.skillLevelName : '', [_app_shared_validation_field_spec__WEBPACK_IMPORTED_MODULE_3__["FieldSpecs"].fieldRequiredValidator('skillLevelName', true), _app_shared_validation_field_spec__WEBPACK_IMPORTED_MODULE_3__["FieldSpecs"].fieldMaxLengthValidator('skillLevelName', true, 50)]],
            skillLevelDescription: [skillLevel ? skillLevel.skillLevelDescription : '', [_app_shared_validation_field_spec__WEBPACK_IMPORTED_MODULE_3__["FieldSpecs"].fieldRequiredValidator('skillLevelDescription', true), _app_shared_validation_field_spec__WEBPACK_IMPORTED_MODULE_3__["FieldSpecs"].fieldMaxLengthValidator('skillLevelDescription', true, 2000)]],
        });
        const levels = this.skillProfile.get('skillLevels');
        levels.push(skillLevelGroup);
        this.errorMessages['skill_level_require'] = false;
        this.submitted = false;
    }
    removeSkillLevel(skillLevelIndex) {
        this.skillLevels.removeAt(skillLevelIndex);
        if (this.skillLevels.length < 1) {
            this.initFormErrorMessage();
        }
    }
    onSubmit() {
        this.submitted = true;
        if (this.skillProfile.valid && this.skillLevels.length > 0) {
            if (this.skillObject) {
                this.updateProfile();
            }
            else {
                this.createSkillProfile();
            }
        }
    }
    convertFormDataToSkill(formData) {
        const jsonConvert = new json2typescript__WEBPACK_IMPORTED_MODULE_2__["JsonConvert"]();
        const skill = jsonConvert.deserializeObject(formData, _core_models_skill__WEBPACK_IMPORTED_MODULE_4__["Skill"]);
        return skill;
    }
};
SkillProfileComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: _core_services_skill_skill_service__WEBPACK_IMPORTED_MODULE_5__["SkillService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _app_core__WEBPACK_IMPORTED_MODULE_8__["AlertService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
];
SkillProfileComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        template: __importDefault(__webpack_require__(/*! raw-loader!./skill-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/skills/skill-profile/skill-profile.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./skill-profile.component.scss */ "./src/app/features/skills/skill-profile/skill-profile.component.scss")).default]
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
        _core_services_skill_skill_service__WEBPACK_IMPORTED_MODULE_5__["SkillService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        _app_core__WEBPACK_IMPORTED_MODULE_8__["AlertService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
], SkillProfileComponent);



/***/ }),

/***/ "./src/app/features/skills/skill-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/features/skills/skill-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SkillRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillRoutingModule", function() { return SkillRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _skill_list_skill_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skill-list/skill-list.component */ "./src/app/features/skills/skill-list/skill-list.component.ts");
/* harmony import */ var _skill_profile_skill_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skill-profile/skill-profile.component */ "./src/app/features/skills/skill-profile/skill-profile.component.ts");
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
    { path: '', component: _skill_list_skill_list_component__WEBPACK_IMPORTED_MODULE_2__["SkillListComponent"] },
    {
        path: 'skill-profile', component: _skill_profile_skill_profile_component__WEBPACK_IMPORTED_MODULE_3__["SkillProfileComponent"]
    },
    {
        path: ':id', component: _skill_profile_skill_profile_component__WEBPACK_IMPORTED_MODULE_3__["SkillProfileComponent"]
    }
];
let SkillRoutingModule = class SkillRoutingModule {
};
SkillRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
    })
], SkillRoutingModule);



/***/ }),

/***/ "./src/app/features/skills/skill.module.ts":
/*!*************************************************!*\
  !*** ./src/app/features/skills/skill.module.ts ***!
  \*************************************************/
/*! exports provided: SkillModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillModule", function() { return SkillModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _skill_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skill-routing.module */ "./src/app/features/skills/skill-routing.module.ts");
/* harmony import */ var _skill_profile_skill_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./skill-profile/skill-profile.component */ "./src/app/features/skills/skill-profile/skill-profile.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/fesm2015/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _skill_list_skill_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./skill-list/skill-list.component */ "./src/app/features/skills/skill-list/skill-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};









let SkillModule = class SkillModule {
};
SkillModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_skill_profile_skill_profile_component__WEBPACK_IMPORTED_MODULE_5__["SkillProfileComponent"], _skill_list_skill_list_component__WEBPACK_IMPORTED_MODULE_8__["SkillListComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _skill_routing_module__WEBPACK_IMPORTED_MODULE_4__["SkillRoutingModule"],
            _app_core__WEBPACK_IMPORTED_MODULE_2__["CustomMaterialModule"],
            _app_shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_7__["CKEditorModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
        ],
    })
], SkillModule);



/***/ })

}]);
//# sourceMappingURL=features-skills-skill-module-es2015.js.map