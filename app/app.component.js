System.register(['angular2/core', 'angular2/router', './Page1/page1.component', './Page2/page2.component', './Page3/page3.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, page1_component_1, page2_component_1, page3_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (page1_component_1_1) {
                page1_component_1 = page1_component_1_1;
            },
            function (page2_component_1_1) {
                page2_component_1 = page2_component_1_1;
            },
            function (page3_component_1_1) {
                page3_component_1 = page3_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <h1>Component Router</h1>\n    <nav>\n      <a [routerLink]=\"['Page1']\">Page 1</a>\n      <a [routerLink]=\"['Page2']\">Page 2</a>\n      <a [routerLink]=\"['Page3']\">Page 3</a>\n    </nav>\n    <router-outlet></router-outlet>\n  ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/page1', name: 'Page1', component: page1_component_1.Page1Component },
                        { path: '/page2', name: 'Page2', component: page2_component_1.Page2Component },
                        { path: '/page3', name: 'Page3', component: page3_component_1.Page3Component }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map