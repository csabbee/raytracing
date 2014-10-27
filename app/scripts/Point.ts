/// <reference path="../raytrace.d.ts"/>

module rt {
    'use strict';
    export class Point implements rt.IPoint{
        private x: number;
        private y: number;
        constructor(x: number, y: number){
            this.x = x;
            this.y = y;
        }
    }
}