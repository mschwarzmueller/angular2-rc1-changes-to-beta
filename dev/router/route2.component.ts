import { Component } from "@angular/core";
import { Routes, ROUTER_DIRECTIVES } from "@angular/router";

import { Subroute1Component } from "./subroutes/subroute1.component";
import { Subroute2Component } from "./subroutes/subroute2.component";

@Component({
    selector: 'my-route2',
    template: `
        <p>This is route 2. Has subrouting, no parameters</p>
        <h3>Subroutes</h3>
        <a [routerLink]="['./']">Subroute 1</a> |
        <a [routerLink]="['subroute2']">Subroute 2</a>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})
@Routes([
    {path: '', component: Subroute1Component},
    {path: '/subroute2', component: Subroute2Component},
])
export class Route2Component {
    
}