/// <reference path="../raytrace.d.ts"/>
module rt {
    export class Vector implements rt.IVector {
        x:number;
        y:number;
        z:number;
        w:number;

        constructor(x: number, y: number, z: number){
            this.x = x;
            this.y = y;
            this.z = z;
        }

        normalize():void {
            var length = this.length();
            this.x /= length;
            this.y /= length;
            this.z /= length;
        }

        length():number {
            return Math.sqrt(this.x*this.x + this.y*this.y + this.z*this.z);
        }

        vectorialMultiply(vector:rt.IVector):rt.IVector {
            return undefined;
        }

        addVector(vector:rt.IVector):rt.IVector {
            return undefined;
        }

        substractVector(vector:rt.IVector):rt.IVector {
            return undefined;
        }

        divideVector(vector:rt.IVector):rt.IVector {
            return undefined;
        }

        multiplyVectorByNumber(f:number):rt.IVector {
            return undefined;
        }

        addVectorByNumber(f:number):rt.IVector {
            return undefined;
        }

        substractVectorByNumber(f:number):rt.IVector {
            return undefined;
        }

        divideVectorByNumber(f:number):rt.IVector {
            return undefined;
        }

    }
}