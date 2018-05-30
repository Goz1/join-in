(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_blog_edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/blog/edit-blog/edit-blog.component */ "./src/app/components/blog/edit-blog/edit-blog.component.ts");
/* harmony import */ var _components_blog_delete_blog_delete_blog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/blog/delete-blog/delete-blog.component */ "./src/app/components/blog/delete-blog/delete-blog.component.ts");
/* harmony import */ var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/blog/blog.component */ "./src/app/components/blog/blog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    {
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'dashboard',
        component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    },
    {
        path: 'register',
        component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
    },
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    },
    {
        path: 'profile',
        component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"]
    },
    {
        path: 'blog',
        component: _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_9__["BlogComponent"]
    },
    {
        path: 'edit-blog/:id',
        component: _components_blog_edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_7__["EditBlogComponent"]
    },
    {
        path: 'delete-blog/:id',
        component: _components_blog_delete_blog_delete_blog_component__WEBPACK_IMPORTED_MODULE_8__["DeleteBlogComponent"]
    },
    {
        path: '**',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes)],
            providers: [],
            bootstrap: [],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n\n\n<!--The content below is only a placeholder and can be replaced.-->\n<!-- <div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul>\n -->\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_blog_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/blog.service */ "./src/app/services/blog.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/blog/blog.component */ "./src/app/components/blog/blog.component.ts");
/* harmony import */ var _components_blog_edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/blog/edit-blog/edit-blog.component */ "./src/app/components/blog/edit-blog/edit-blog.component.ts");
/* harmony import */ var _components_blog_delete_blog_delete_blog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/blog/delete-blog/delete-blog.component */ "./src/app/components/blog/delete-blog/delete-blog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import {FormsModule, ReactiveFormsModule} from '@angular/forms';
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"],
                _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__["BlogComponent"],
                _components_blog_edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_16__["EditBlogComponent"],
                _components_blog_delete_blog_delete_blog_component__WEBPACK_IMPORTED_MODULE_17__["DeleteBlogComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_12__["FlashMessagesModule"].forRoot()
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"], _services_blog_service__WEBPACK_IMPORTED_MODULE_11__["BlogService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/blog/blog.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/blog/blog.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".head{\n  text-align: center;\n}\n"

/***/ }),

/***/ "./src/app/components/blog/blog.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/blog/blog.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Explore</h2>\n\n<div id=\"container\">\n  <p>Feel free to add a conference or visit already created ones</p>\n\n  <button [disabled]=\"loadingBlogs\"type=\"button\" name=\"button\" class=\"btn btn-default\" *ngIf=\"!newPost\"(click)=\"reloadBlogs()\"><span class=\"glyphicon glyphicon-repeat\"></span>&nbsp;&nbsp;Reload Page</button>\n  <br/>\n  <br/>\n  <button type=\"button\" name=\"button\" class=\"btn btn-primary\" *ngIf=\"!newPost\"(click)=\"newBlogForm()\">Add a new Conference</button>\n\n\n\n\n  <form [formGroup] = \"form\" name=\"blogForm\" (submit)=\"onBlogSubmit()\" *ngIf=\"newPost\">\n\n    <!-- <Host> -->\n    <!-- <div class=\"form-group\">\n      <label for=\"title\">Host</label>\n        <div >\n          <input type=\"text\"class=\"form-control\" name=\"title\" placeholder=\"Name of Host\" autocomplete=\"off\" formControlName=\"title\">\n          <ul class=\"help-block\">\n            <li *ngIf=\"form.controls.title.dirty && form.controls.title.errors?.required\">This field is required.</li>\n            <li *ngIf=\"form.controls.title.dirty && form.controls.title.errors?.minlength||\n            form.controls.title.dirty && form.controls.title.errors?.maxlength\">Max length: 100, Min length5.</li>\n            <li *ngIf=\"form.controls.title.dirty && form.controls.title.errors?.alphaNumericValidation\">Must be a letter or number.</li>\n          </ul>\n        </div>\n    </div> -->\n    <!-- <Title> -->\n    <div class=\"form-group\">\n      <label for=\"title\">Topic of Discussion</label>\n        <div >\n          <input type=\"text\"class=\"form-control\" name=\"title\" placeholder=\"Name of Conference\" autocomplete=\"off\" formControlName=\"title\">\n          <ul class=\"help-block\">\n            <li *ngIf=\"form.controls.title.dirty && form.controls.title.errors?.required\">This field is required.</li>\n            <li *ngIf=\"form.controls.title.dirty && form.controls.title.errors?.minlength||\n            form.controls.title.dirty && form.controls.title.errors?.maxlength\">Max length: 100, Min length5.</li>\n            <li *ngIf=\"form.controls.title.dirty && form.controls.title.errors?.alphaNumericValidation\">Must be a letter or number.</li>\n          </ul>\n        </div>\n    </div>\n    <!-- <Body> -->\n    <div class=\"form-group\">\n      <label for=\"title\">Body</label>\n        <div>\n          <textarea name=\"body\" row=\"8\" cols=\"80\" placeholder=\"Description of conference\" class=\"form-control\" formControlName=\"body\"></textarea>\n          <ul class=\"help-block\">\n            <li *ngIf=\"form.controls.title.dirty && form.controls.title.errors?.required\">This field is required.</li>\n            <li *ngIf=\"form.controls.title.dirty && form.controls.title.errors?.minlength||\n            form.controls.title.dirty && form.controls.title.errors?.maxlength\">Max length: 5000, Min length: 5.</li>\n            <li *ngIf=\"form.controls.title.dirty && form.controls.title.errors?.alphaNumericValidation\">Must be a letter or number.</li>\n          </ul>\n        </div>\n    </div>\n<!-- <date of conference> -->\n    <!-- <div class=\"container form-group row\">\n      <div  class=\"input-group\" data-date-format=\"dd. MM .yyyy\">\n        <label for=\"ex1\" >Date of Conference</label>\n        <input type=\"date\" name=\"\"  id=\"datepicker\" class=\"form-control\">\n      </div>\n    </div> -->\n    <!-- <Venue> -->\n    <!-- <div class=\"form-group\">\n      <label for=\"title\">Venue:</label>\n        <div >\n          <input type=\"text\"class=\"form-control\" name=\"title\" placeholder=\"Name of Conference\" autocomplete=\"off\" formControlName=\"title\">\n          <ul class=\"help-block\">\n            <li *ngIf=\"form.controls.title.dirty && form.controls.title.errors?.required\">This field is required.</li>\n            <li *ngIf=\"form.controls.title.dirty && form.controls.title.errors?.minlength||\n            form.controls.title.dirty && form.controls.title.errors?.maxlength\">Max length: 500, Min length5.</li>\n            <li *ngIf=\"form.controls.title.dirty && form.controls.title.errors?.alphaNumericValidation\">Must be a letter or number.</li>\n          </ul>\n        </div>\n    </div> -->\n\n\n      <button [disabled]=\"processing\"type=\"button\" name=\"button\" class=\"btn btn-warning\" (click)=\"goBack()\">Go Back</button>\n      <button [disabled]=\"processing \" type=\"submit\" name=\"button\" class=\"btn btn-success\" >submit</button>\n\n    </form>\n  </div>\n\n    <br/>\n    <br/>\n\n\n  <div *ngIf = \"!newPost\" class=\"col-xs-8 thumb\">\n    <div class =\"panel panel-primary\" *ngFor=\"let blog of blogPosts\">\n      <div class=\"panel-heading\">\n        <!-- <h3 class=\"panel-title\"> Host : {{ blog.host }}</h3> -->\n        <h3 class=\"panel-title\"> Title : {{ blog.title }}</h3>\n      </div>\n\n        <div class=\"panel-body\">\n          <h3 class=\"head\">DESCRIPTION OF CONFERENCE</h3>\n          <p>{{blog.body}}</p>\n          <!-- <strong>Venue:</strong>{{blog.venue}} -->\n        </div>\n\n      <div class=\"panel-footer\">\n            <strong> Posted By :</strong> {{blog.createdBy}}\n            <br/>\n            <strong>Date Created: </strong> {{blog.createdAt | date:'dd. MM .yyyy'}}\n            <br/>\n          <div *ngIf=\"username === blog.createdBy\">\n            <strong>Interested : </strong> {{blog.likes}}\n          </div>\n              <a [routerLink] = \"['/edit-blog/', blog._id]\" *ngIf=\"username === blog.createdBy\"><button type=\"button\" name=\"button\" class=\"btn btn-sm btn-info\">Edit Post</button></a>\n              <a [routerLink] = \"['/delete-blog/', blog._id]\" *ngIf=\"username === blog.createdBy\"><button type=\"button\" name=\"button\" class=\"btn btn-sm btn-danger\">Delete Post</button></a>\n          <div class=\"dropdown\">\n              <p><button [disabled]=\"blog.likedBy.indexOf(username) > -1\" type=\"button\" name=\"button\"  class=\"btn btn-sm btn-success\" *ngIf=\"username !== blog.createdBy\" (click)=\"likeBlog(blog._id)\">\n              <span class =\"glyphicon glyphicon-thumbs-up\">&nbsp;</span>I'm Interested  : {{blog.likes}}</button></p>\n              <p><button [disabled]=\"blog.dislikedBy.indexOf(username) > -1\" type=\"button\" name=\"button\"  class=\"btn btn-sm btn-danger\" *ngIf=\"username !== blog.createdBy\" (click)=\"dislikeBlog(blog._id)\">\n              <span class =\"glyphicon glyphicon-thumbs-down\">&nbsp;</span></button></p>\n            <!-- <div class = \"dropdown-content\">\n              <a [routerLink]=\"['/user/',liker]\" *ngFor = \"let liker of blog.likedBy\">{{liker}}  {{blog.dislikes}}</a>\n            </div> -->\n        </div>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/components/blog/blog.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/blog/blog.component.ts ***!
  \***************************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_blog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/blog.service */ "./src/app/services/blog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BlogComponent = /** @class */ (function () {
    function BlogComponent(formBuilder, authService, blogService, flashMessage) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.blogService = blogService;
        this.flashMessage = flashMessage;
        this.newPost = false;
        this.loadingBlogs = false;
        this.processing = false;
        this.createNewBlogForm();
    }
    BlogComponent.prototype.createNewBlogForm = function () {
        this.form = this.formBuilder.group({
            host: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)
                ])],
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5),
                    this.alphaNumericValidation
                ])],
            body: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(5000),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)
                ])],
            venue: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(500),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5),
                    this.alphaNumericValidation
                ])]
        });
    };
    BlogComponent.prototype.enableFormNewBlogForm = function () {
        this.form.get('host').enable();
        this.form.get('body').enable();
        this.form.get('title').enable();
        this.form.get('venue').enable();
    };
    BlogComponent.prototype.disableFormNewBlogForm = function () {
        this.form.get('host').disable();
        this.form.get('body').disable();
        this.form.get('title').disable();
        this.form.get('venue').disable();
    };
    BlogComponent.prototype.alphaNumericValidation = function (controls) {
        var regExp = new RegExp(/^[a-zA-Z0-9 ]+$/);
        if (regExp.test(controls.value)) {
            return null;
        }
        else {
            return { 'alphaNumericValidation': true };
        }
    };
    BlogComponent.prototype.newBlogForm = function () {
        this.newPost = true;
    };
    BlogComponent.prototype.reloadBlogs = function () {
        var _this = this;
        this.loadingBlogs = true;
        this.getAllBlogs(); //Get all Blogs
        setTimeout(function () {
            _this.loadingBlogs = false;
        }, 4000);
    };
    BlogComponent.prototype.onBlogSubmit = function () {
        var _this = this;
        this.processing = true;
        this.disableFormNewBlogForm();
        var blog = {
            host: this.form.get('host').value,
            title: this.form.get('title').value,
            body: this.form.get('body').value,
            venue: this.form.get('venue').value,
            createdBy: this.username
        };
        this.blogService.newBlog(blog).subscribe(function (data) {
            if (!data.success) {
                _this.flashMessage.show(data.message, {
                    cssClass: 'alert-danger',
                    timeout: 5000,
                });
                _this.processing = false;
                _this.enableFormNewBlogForm();
            }
            else {
                _this.flashMessage.show(data.message, {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
                _this.getAllBlogs();
                setTimeout(function () {
                    _this.newPost = false;
                    _this.processing = false;
                    // this.message = false;
                    _this.form.reset();
                    _this.enableFormNewBlogForm();
                }, 2000);
            }
        });
    };
    BlogComponent.prototype.goBack = function () {
        window.location.reload();
    };
    BlogComponent.prototype.getAllBlogs = function () {
        var _this = this;
        this.blogService.getAllBlogs().subscribe(function (data) {
            _this.blogPosts = data.blogs;
        });
    };
    BlogComponent.prototype.likeBlog = function (id) {
        var _this = this;
        this.blogService.likeBlog(id).subscribe(function (data) {
            _this.getAllBlogs();
        });
    };
    BlogComponent.prototype.dislikeBlog = function (id) {
        var _this = this;
        this.blogService.dislikeBlog(id).subscribe(function (data) {
            _this.getAllBlogs();
        });
    };
    BlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.username = profile.user.username;
        });
        this.getAllBlogs();
    };
    BlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/components/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/components/blog/blog.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services_blog_service__WEBPACK_IMPORTED_MODULE_4__["BlogService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"]])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/components/blog/delete-blog/delete-blog.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/blog/delete-blog/delete-blog.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/blog/delete-blog/delete-blog.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/blog/delete-blog/delete-blog.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Delete Blog</h1>\n\n  <div class=\"row show-hide-message\" *ngIf=\"message\">\n    <div [ngClass] = \"messageClass\">\n\n      <!-- {{message}} -->\n\n    </div>\n\n      <div class=\"col-md-6\" *ngIf=\"foundBlog\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <button type=\"button\" name=\"button\" class=\"close\"  data-dismiss=\"modal\">&times;</button>\n            <h4 class=\"modal-title\">Confirm</h4>\n          </div>\n            <div class=\"modal-body\">\n              <p>Are you sure you would like to delete this post ? </p>\n            </div>\n              <div class=\"modal-footer\">\n                <button [disabled]=\"processing\" type=\"button\" name=\"button\" class=\"btn btn-success\" (click)=\"deleteBlog()\"> Yes </button>\n                <a routerLink='/blog'><button [disabled]=\"processing\" type=\"button\" name=\"button\" class=\"btn btn-danger\"> No </button></a>\n              </div>\n        </div>\n          <br/>\n        <div class=\"panel panel-primary\">\n          <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">{{ blog.title }}</h3>\n          </div>\n          <div class=\"panel-body\">\n            {{ blog.body }}\n          </div>\n          <div class=\"panel-footer\">\n            <strong>Posted by:</strong> {{blog.createdBy}}\n            <br/>\n            <strong>Date:</strong> {{blog.createdAt | date:'dd. MMM . yyyy'}}\n          </div>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/components/blog/delete-blog/delete-blog.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/blog/delete-blog/delete-blog.component.ts ***!
  \**********************************************************************/
/*! exports provided: DeleteBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteBlogComponent", function() { return DeleteBlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/blog.service */ "./src/app/services/blog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DeleteBlogComponent = /** @class */ (function () {
    function DeleteBlogComponent(blogService, activatedRoute, flashMessage, router) {
        this.blogService = blogService;
        this.activatedRoute = activatedRoute;
        this.flashMessage = flashMessage;
        this.router = router;
        this.processing = false;
        this.foundBlog = false;
    }
    DeleteBlogComponent.prototype.deleteBlog = function () {
        var _this = this;
        this.processing = true;
        this.blogService.deleteBlog(this.currentUrl.id).subscribe(function (data) {
            if (!data.success) {
                _this.flashMessage.show(data.message, {
                    cssClass: 'alert-danger',
                    timeout: 5000,
                });
            }
            else {
                _this.flashMessage.show(data.message, {
                    cssClass: 'alert-success',
                    timeout: 5000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/blog']);
                }, 2000);
            }
        });
    };
    DeleteBlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUrl = this.activatedRoute.snapshot.params;
        this.blogService.getSingleBlog(this.currentUrl.id).subscribe(function (data) {
            if (!data.success) {
                _this.flashMessage.show(data.message, {
                    cssClass: 'alert-danger',
                    timeout: 5000,
                });
            }
            else {
                _this.blog = {
                    title: data.blog.title,
                    body: data.blog.body,
                    createdBy: data.blog.createdBy,
                    createdAt: data.blog.createdAt
                };
                _this.foundBlog = true;
                _this.message = true;
            }
        });
    };
    DeleteBlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-delete-blog',
            template: __webpack_require__(/*! ./delete-blog.component.html */ "./src/app/components/blog/delete-blog/delete-blog.component.html"),
            styles: [__webpack_require__(/*! ./delete-blog.component.css */ "./src/app/components/blog/delete-blog/delete-blog.component.css")]
        }),
        __metadata("design:paramtypes", [_services_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DeleteBlogComponent);
    return DeleteBlogComponent;
}());



/***/ }),

/***/ "./src/app/components/blog/edit-blog/edit-blog.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/blog/edit-blog/edit-blog.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/blog/edit-blog/edit-blog.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/blog/edit-blog/edit-blog.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Edit Blog</h1>\n\n\n  <div class=\"row show-hide-message\" *ngIf=\"message\">\n\n    <div [ngClass] = \"messageClass\">\n      {{message}}\n    </div>\n  </div>\n\n  <form (submit)=\"updateBlogSubmit()\" *ngIf = \"!loading\">\n    <div class=\"form-group\">\n      <label for=\"Title\">Title</label>\n      <input [disabled]=\"processing\" type=\"text\" name=\"title\" placeholder=\"*Blog Title\" class=\"form-control\"\n      [(ngModel)] = \"blog.title\"/>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"body\">Body</label>\n      <textarea [disabled]=\"processing\" name=\"title\" row=\"8\" cols=\"80\" class=\"form-control\"\n      placeholder=\"*Blog Body\" [(ngModel)] = \"blog.body\"></textarea>\n\n\n      <a [routerLink] = \"['/delete-blog/', blog._id]\"><button  [disabled]=\"processing\"\n        type=\"button\" name=\"button\" class=\"btn btn-danger\">Delete</button></a>\n\n        <button  [disabled]=\"processing\"type=\"button\" name=\"button\" class=\"btn btn-success\" (click)=\"goBack()\">Go Back</button>\n\n        <button  [disabled]=\"processing\" type=\"submit\" name=\"save\" class=\"btn btn-info\">Save Changes</button>\n    </div>\n\n\n  </form>\n"

/***/ }),

/***/ "./src/app/components/blog/edit-blog/edit-blog.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/blog/edit-blog/edit-blog.component.ts ***!
  \******************************************************************/
/*! exports provided: EditBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBlogComponent", function() { return EditBlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_blog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/blog.service */ "./src/app/services/blog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditBlogComponent = /** @class */ (function () {
    function EditBlogComponent(location, activatedRoute, blogService, flashMessage, router) {
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.blogService = blogService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.processing = false;
        this.loading = true;
    }
    EditBlogComponent.prototype.updateBlogSubmit = function () {
        var _this = this;
        this.processing = true;
        this.blogService.editBlog(this.blog).subscribe(function (data) {
            if (!data.success) {
                _this.flashMessage.show(data.message, {
                    cssClass: 'alert-danger',
                    timeout: 5000,
                });
                _this.processing = false;
            }
            else {
                _this.flashMessage.show(data.message, {
                    cssClass: 'alert-success',
                    timeout: 5000,
                });
                setTimeout(function () {
                    _this.router.navigate(['/blog']);
                }, 2000);
            }
        }); //fuction to update blog
    }; //submit update to blog
    EditBlogComponent.prototype.goBack = function () {
        this.location.back();
    };
    EditBlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUrl = this.activatedRoute.snapshot.params;
        this.blogService.getSingleBlog(this.currentUrl.id).subscribe(function (data) {
            if (!data.success) {
                _this.flashMessage.show(data.message, {
                    cssClass: 'alert-danger',
                    timeout: 5000,
                });
            }
            else {
                _this.blog = data.blog;
                _this.loading = false;
            }
        });
    };
    EditBlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-blog',
            template: __webpack_require__(/*! ./edit-blog.component.html */ "./src/app/components/blog/edit-blog/edit-blog.component.html"),
            styles: [__webpack_require__(/*! ./edit-blog.component.css */ "./src/app/components/blog/edit-blog/edit-blog.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_blog_service__WEBPACK_IMPORTED_MODULE_4__["BlogService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditBlogComponent);
    return EditBlogComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h2>CONFERENCE WEB APPLICATION</h2>\n  <p class=\"lead\">Welcome to Join-in</p>\n  <p class=\"lead\">Feel free to visit already created conferences or create yours</p>\n  <div>\n    <a routerLink='/blog' class=\"btn btn-primary\" >Explore Confrences</a>\n  </div>\n</div>\n\n\n\n\n<!--\n  <div class=\"col-sm-6 col-md-4\">\n    <div class=thumbnail> <img src=\"https://image.flaticon.com/icons/svg/417/417768.svg\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n      <div class=caption>\n        <h3>Lorem Ipsum</h3>\n        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n      </div>\n    </div>\n  </div> -->\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h2>CONFERENCE WEB APPLICATION</h2>\n  <p class=\"lead\">Welcome to Join-in</p>\n  <p class=\"lead\">Feel free to visit already created conferences or create yours</p>\n  <div>\n    <a routerLink='/blog' class=\"btn btn-primary\" >Explore Confrences</a>\n  </div>\n</div>\n\n\n\n\n<!-- \n  <div class=\"col-sm-6 col-md-4\">\n    <div class=thumbnail> <img src=\"https://image.flaticon.com/icons/svg/417/417768.svg\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\n      <div class=caption>\n        <h3>Lorem Ipsum</h3>\n        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n      </div>\n    </div>\n  </div> -->\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Login</h1>\n\n<div>\n  <div class=\"col-sm-6 col-md-4 col-md-offset-4\" id=\"lform\">\n    <form [formGroup] = \"form\"  (submit)=\"onLoginSubmit()\">\n\n      <div class =\"form-group\">\n        <input type=\"text\" name=\"username\" class=\"form-control\" [(ngModel)]=\"username\" placeholder=\"Username\" formControlName='username'>\n      </div>\n\n      <div class =\"form-group\">\n        <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName='password'>\n      </div>\n\n      <input [disabled]=\"!form.valid || processing\" type=\"submit\" class=\"btn btn-primary\" value =\"Login\">\n\n    </form>\n    <p [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">Dont have an account ? <a  routerLink = '/register'>signup</a></p>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, authService, flashMessage, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.processing = false;
        this.createForm();
    }
    LoginComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            username: '',
            password: '',
        });
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        this.processing = true;
        var user = {
            username: this.form.get('username').value,
            password: this.form.get('password').value
        };
        this.authService.login(user).subscribe(function (data) {
            if (!data.success) {
                _this.flashMessage.show(data.message, { cssClass: 'alert-danger', timeout: 3000 });
            }
            else {
                _this.flashMessage.show(data.message, { cssClass: 'alert-success', timeout: 3000 });
                _this.authService.storeUserData(data.token, data.user);
                setTimeout(function () {
                    _this.router.navigate(['/dashboard']);
                }, 2000);
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hcontainer{\r\n  background: radial-gradient(circle , #35486d 1%, #27385f);\r\n  width: 100%;\r\n  height: 65px;\r\n  top: 0;\r\n  left:0;\r\n  /* position: fixed; */\r\n  /* z-index: 10; */\r\n\r\n}\r\n/*the background color of the header*/\r\n#headi{\r\n  width: 40%;\r\n  float: right;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar\n  ================================================== -->\n  <div class=\"bs-docs-section clearfix \">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n\n\n        <div class=\"bs-component\">\n          <nav class=\"navbar navbar-default hcontainer\">\n            <div class=\"container-fluid\">\n              <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n                  <span class=\"sr-only\">Toggle navigation</span>\n                  <span class=\"icon-bar\"></span>\n                  <span class=\"icon-bar\"></span>\n                  <span class=\"icon-bar\"></span>\n                </button>\n                <a class=\"navbar-brand\"  routerLink='/'>Join-in</a>\n              </div>\n\n              <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                <ul class=\" nav navbar-nav navbar-right\">\n                  <li class=\"active\" [routerLinkActive]=\"['active']\"[routerLinkActiveOptions] = \"{exact:true}\"><a routerLink='/home'routerLink='/profile'>Profile <span class=\"sr-only\">(current)</span></a></li>\n                  <li  [routerLinkActive]=\"['active']\"[routerLinkActiveOptions] = \"{exact:true}\"><a routerLink='/blog'>Explore</a></li>\n\n                  <li class=\"dropdown\" [routerLinkActive]=\"['active']\"[routerLinkActiveOptions] = \"{exact:true}\">\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">Options<span class=\"caret\"></span></a>\n                    <ul  class=\"dropdown-menu\" role=\"menu\"  nav-pills>\n                      <li [routerLinkActive]=\"['active']\"[routerLinkActiveOptions] = \"{exact:true}\" ><a routerLink='/register'>Login / Sign up</a></li>\n                      <li class=\"divider\"></li>\n                      <li class=\"side\" ><a (click)=\"onLogoutClick()\" href=\"#\" >Logout</a></li>\n                    </ul>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </nav>\n        </div>\n\n\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Profile page</h2>\n\n<ul class= \"list-group\">\n  <li class=\"list-group-item\">Username: {{ username }} </li>\n  <li class=\"list-group-item\">Email: {{ email }} </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService) {
        this.authService = authService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.username = profile.user.username;
            _this.email = profile.user.email;
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Register</h1>\n\n<div>\n  <div class=\"col-sm-6 col-md-4 col-md-offset-4\" id=\"lform\">\n    <form [formGroup] = \"form\"  (submit)=\"onRegisterSubmit()\">\n\n      <div class =\"form-group\">\n        <input type=\"text\" name=\"username\" class=\"form-control\" [(ngModel)]=\"username\" placeholder=\"Username\" formControlName='username'>\n      </div>\n\n      <div class =\"form-group\">\n        <input type=\"text\" name=\"email\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"email@example.com\" formControlName='email'>\n      </div>\n\n      <div class =\"form-group\">\n        <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName='password'>\n      </div>\n\n      <input [disabled]=\"!form.valid || processing\" type=\"submit\" class=\"btn btn-primary\" value =\"Register\">\n\n    </form>\n    <p [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">Already have an account ? <a routerLink='/login'>Log In</a></p>\n\n  </div>\n</div>\n\n\n\n<!-- <p>Username: {{form.controls.username.value}}</p>\n\n<p>Email: {{form.controls.email.value}}</p>\n\n\n<p>password:</p> -->\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, authService, flashMessage, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.processing = false;
        this.createForm();
    }
    RegisterComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            email: [''],
            username: '',
            password: '',
        });
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        this.processing = true;
        var user = {
            email: this.form.get('email').value,
            username: this.form.get('username').value,
            password: this.form.get('password').value
        };
        this.authService.registerUser(user).subscribe(function (data) {
            if (!data.success) {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
                _this.processing = false;
            }
            else {
                _this.flashMessage.show('You are now registered and can login', { cssClass: 'alert-sucess', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { JwtHelperService } from '@auth0/angular-jwt';
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        // CHANGE TO custom url for auth service
        this.domain = "http://localhost:8080/";
    }
    AuthService.prototype.createAuthenticationHeaders = function () {
        this.loadToken();
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            headers: new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
                'Content-Type': 'application/json',
                'authorization': this.authToken
            })
        });
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('token');
        this.authToken = token;
    };
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(this.domain + 'authentication/register', user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.login = function (user) {
        return this.http.post(this.domain + 'authentication/login', user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.getProfile = function () {
        this.createAuthenticationHeaders();
        return this.http.get(this.domain + 'authentication/profile', this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/blog.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/blog.service.ts ***!
  \******************************************/
/*! exports provided: BlogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BlogService = /** @class */ (function () {
    function BlogService(authService, http) {
        this.authService = authService;
        this.http = http;
        this.domain = this.authService.domain;
    }
    BlogService.prototype.createAuthenticationHeaders = function () {
        this.authService.loadToken();
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            headers: new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
                'Content-Type': 'application/json',
                'authorization': this.authService.authToken
            })
        });
    };
    BlogService.prototype.newBlog = function (blog) {
        this.createAuthenticationHeaders();
        return this.http.post(this.domain + 'blogs/newBlog', blog, this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    BlogService.prototype.getAllBlogs = function () {
        this.createAuthenticationHeaders();
        return this.http.get(this.domain + 'blogs/allBlogs', this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    BlogService.prototype.getSingleBlog = function (id) {
        this.createAuthenticationHeaders();
        return this.http.get(this.domain + 'blogs/singleBlog/' + id, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    BlogService.prototype.editBlog = function (blog) {
        this.createAuthenticationHeaders();
        return this.http.put(this.domain + 'blogs/updateBlog/', blog, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    BlogService.prototype.deleteBlog = function (id) {
        this.createAuthenticationHeaders();
        return this.http.delete(this.domain + 'blogs/deleteBlog/' + id, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    BlogService.prototype.likeBlog = function (id) {
        var blogData = { id: id };
        return this.http.put(this.domain + 'blogs/likeBlog/', blogData, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    BlogService.prototype.dislikeBlog = function (id) {
        var blogData = { id: id };
        return this.http.put(this.domain + 'blogs/dislikeBlog/', blogData, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    BlogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], BlogService);
    return BlogService;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Chigozie\Desktop\Join-in\my-project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map