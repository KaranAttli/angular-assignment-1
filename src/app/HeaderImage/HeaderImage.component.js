"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var HeaderImageComponent = (function () {
    function HeaderImageComponent() {
        this.image = './assets/nag2.jpg';
    }
    HeaderImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.count = 1;
        setInterval(function () { _this.changeImage(); }, 2000);
    };
    HeaderImageComponent.prototype.changeImage = function () {
        console.log('in fun');
        this.image = './assets/nag' + this.count + '.jpg';
        this.count++;
        if (this.count == 5) {
            this.count = 1;
        }
        console.log(this.count);
    };
    return HeaderImageComponent;
}());
HeaderImageComponent = __decorate([
    core_1.Component({
        selector: 'header2',
        templateUrl: './headerImage.html',
        styleUrls: ['./HeaderImage.style.css']
    })
], HeaderImageComponent);
exports.HeaderImageComponent = HeaderImageComponent;
//# sourceMappingURL=HeaderImage.component.js.map