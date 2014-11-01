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
            this.w = 0;
        }

        set(v:rt.IVector):void {
            this.x = v.x;
            this.y = v.y;
            this.z = v.z;
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
            return new Vector(this.y * vector.z - this.z * vector.y, this.z * vector.x - this.x * vector.z, this.x * vector.y - this.y * vector.x);
        }

        multiplyVector(vector:rt.IVector):number {
            return  this.x * vector.x + this.y * vector.y + this.z * vector.z;
        }

        addVector(vector:rt.IVector):rt.IVector {
            var x = this.x + vector.x;
            var y = this.y + vector.y;
            var z = this.z + vector.z;
            return new Vector(x,y,z);
        }

        substractVector(vector:rt.IVector):rt.IVector {
            var x = this.x - vector.x;
            var y = this.y - vector.y;
            var z = this.z - vector.z;
            return new Vector(x,y,z);
        }


        multiplyVectorByNumber(f:number):rt.IVector {
            var x = this.x * f;
            var y = this.y * f;
            var z = this.z * f;
            return new Vector(x,y,z);
        }

        divideVectorByNumber(f:number):rt.IVector {
            var x = this.x/f;
            var y = this.y/f;
            var z = this.z/f;
            return new Vector(x,y,z);
        }

    }
}