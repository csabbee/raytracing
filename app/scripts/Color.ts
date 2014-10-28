/// <reference path="../raytrace.d.ts"/>
module rt {

    export class Color implements rt.IColor  {
        red: number;
        green: number;
        blue: number;

        constructor(r: number, g: number, b: number){
            this.red = r;
            this.green = g;
            this.blue = b;
        }

        multiplyColor(c:rt.IColor):rt.IColor {
            return new Color(this.red*c.red, this.green*c.green, this.blue*c.blue);
        }

        substractColor(c:rt.IColor):rt.IColor {
            return new Color(c.red - this.red, c.green - this.green, c.blue - this.blue);
        }

        addColor(c:rt.IColor):rt.IColor {
            return new Color(c.red + this.red, c.green + this.green, c.blue + this.blue);
        }

        divideColor(c:rt.IColor):rt.IColor {
            return new Color(this.red/c.red, this.green/c.green, this.blue/c.blue);
        }

        multiplyColorByNumber(f:number):rt.IColor {
            return new Color(this.red*f, this.green*f, this.blue*f);
        }

        substractColorByNumber(f:number):rt.IColor {
            return new Color(this.red-f, this.green-f, this.blue-f);
        }

        addColorByNumber(f:number):rt.IColor {
            return new Color(this.red+f, this.green+f, this.blue+f);
        }

        divideColorByNumber(f:number):rt.IColor {
            return new Color(this.red/f, this.green/f, this.blue/f);
        }

        setColorToNumber(f:number):void {
            this.red = this.green = this.blue = f;
        }

    }
}