import { Component } from "@angular/core";
import { OnActivate, RouteSegment } from "@angular/router";
import {OnInit} from "angular2/core";
import {RouteParams} from "angular2/router";
 
@Component({
    selector: 'my-route3',
    template: `
        <p>This is route 3. No subrouting, has parameters</p>
        <div>Passed parameters: {{param}}</div>
    `
})
export class Route3Component implements OnInit {
    param:string;

    constructor(private routeSegment: RouteSegment) {}
    
    ngOnInit() {
        this.param = this.routeSegment.getParam('id');
    }
}