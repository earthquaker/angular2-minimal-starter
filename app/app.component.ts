import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Page1Component}   from './page1.component';
import {Page2Component}     from './page2.component';

@Component({
    selector: 'my-app',
    template: `
    <h1>Component Router</h1>
    <nav>
      <a [routerLink]="['Page1']">Page 1</a>
      <a [routerLink]="['Page2']">Page 2</a>
    </nav>
    <router-outlet></router-outlet>
  `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path:'/page1',         name: 'Page1',       component: Page1Component},
    {path:'/page2',         name: 'Page2',       component: Page2Component}
])
export class AppComponent { }