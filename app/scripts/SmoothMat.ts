module rt {
    'use strict';

    export class SmoothMat implements rt.ISmoothMat {
        F0:rt.IColor;
        F:rt.IColor;
        N0:rt.IColor;
        k:rt.IColor;
        isReflective:boolean;
        isRefractive:boolean;
        n:number;

        constructor(k: rt.IColor, n0: rt.IColor, refl: boolean, refr: boolean, nn: number) {
            this.isReflective = refl;
            this.isRefractive = refr;
            this.n = nn;
            this.N0 = n0;
            this.k = k;
        }

        reflectionDir(R:rt.IVector, N:rt.IVector, V:rt.IVector):void {
        }

        makeF0():void {
        }

    }
}