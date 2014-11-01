declare module rt{

    export interface IVector {
        x: number;
        y: number;
        z: number;
        w: number;

        normalize(): void;
        length(): number;
        set(v: IVector): void;

        vectorialMultiply(vector: IVector): IVector;
        addVector(vector: IVector): IVector;
        substractVector(vector: IVector): IVector;
        multiplyVector(vector: IVector): number;

        multiplyVectorByNumber(f: number): IVector;
        divideVectorByNumber(f: number): IVector;
    }

    export interface ITriangle {
        v1: IVector;
        v2: IVector;
        v3: IVector;
        N: IVector;
    }

    export interface ISmoothMat {
        F0: IColor;
        F: IColor;
        N0: IColor;
        k: IColor;
        isReflective: boolean;
        isRefractive: boolean;
        n: number;              //ignoring the wavelength dependency

        reflectionDir(R: IVector, N: IVector, V: IVector): void;
        makeF0(): void;
    }

    export interface IRoughMat {
        kd: IColor;
        ks: IColor;
        shininess: number;

        side(x: number, t: number, d: number): number;
        kD(x: IVector): IColor;
    }

    export interface IColor {
        red: number;
        green: number;
        blue: number;

        multiplyColor(c: IColor): IColor;
        substractColor(c: IColor): IColor;
        addColor(c: IColor): IColor;
        divideColor(c: IColor): IColor;

        multiplyColorByNumber(f: number): IColor;
        substractColorByNumber(f: number): IColor;
        addColorByNumber(f: number): IColor;
        divideColorByNumber(f: number): IColor;

        setColorToNumber(f: number): void;
    }

    export interface IRay {
        v: IVector;         //direction
        eye: IVector;       //eye position
        inormal: IVector;   //intersected object's normal Vector
        iobject: IObject;   //intersected object
    }

    export interface ILight {
        position: IVector;
        intensity: IColor;
        n: number
        generatePhoton(): IRay;
    }

    export interface IObject {
        rm: IRoughMat;
        sm: ISmoothMat;
        intersect(): void;
        norm(tt: number, e: IVector, v: IVector): IVector;
    }

    export interface ICamera {
        eye: IVector;
        lookat: IVector;
        up: IVector;
        right: IVector;
        XM: number;
        YM: number;

        getRay(x: number, y: number): IRay;
    }

    export interface IScene {
        objects: IObject[];
        lights: ILight[];
        camera: ICamera;
        La: IColor;             //ambient illumination

        render(): void;
        trace(r: IRay, d: number): IColor;
        firstIntersect(r: IRay): IObject;
        shoot(power: IColor, r: IRay, d: number, l: number): void;
        directLightSource(x: IVector, N: IVector, v: IVector, o: IObject): IColor;
    }


    export interface IMesh extends IObject {
        triangles: ITriangle[];
    }

    export interface ICylinder extends IObject {
        height: number;
        radius: number;
    }
}