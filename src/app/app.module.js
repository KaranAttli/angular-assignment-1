"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var navigator_component_1 = require("./Navigator/navigator.component");
var downborder_component_1 = require("./DownBorder/downborder.component");
var form_component_1 = require("./Form/form.component");
var DownNavBar_component_1 = require("./DownNavbar/DownNavBar.component");
var border_component_1 = require("./Border/border.component");
var HeaderImage_component_1 = require("./HeaderImage/HeaderImage.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [app_component_1.AppComponent, navigator_component_1.NavigatorComponent, downborder_component_1.DownborderComponent, form_component_1.FormComponent, DownNavBar_component_1.DownNavBarComponent, border_component_1.BorderComponent, HeaderImage_component_1.HeaderImageComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map