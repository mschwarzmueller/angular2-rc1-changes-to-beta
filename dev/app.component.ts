import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from "@angular/router";

import { Route1Component } from "./router/route1.component";
import { Route3Component } from "./router/route3.component";
import { Route2Component } from "./router/route2.component";
import { NgForComponent } from "./ngFor/ngfor.component";
import { RouterComponent } from "./router/router.component";

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Release Candidate 1 Changes</h1>
        <hr>
        <h2>NgFor</h2>
        <p>Use "let" instead of "#"</p>
        <my-ngfor></my-ngfor>
        <hr>
        <h2>Router</h2>
        <my-router></my-router>
    `,
    directives: [NgForComponent, RouterComponent, ROUTER_DIRECTIVES]
})
@Routes([
    {path: '/route1', component: Route1Component},
    {path: '/route2', component: Route2Component},
    {path: '/route3/:id', component: Route3Component}
])
export class AppComponent {
    
}