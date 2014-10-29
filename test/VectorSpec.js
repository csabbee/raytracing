/**
 * Created by csabi on 2014.10.29..
 */
'use strict';

describe('Class: Vector', function () {

    var v1, v2;

    beforeEach(function () {
        v1 = new rt.Vector(2,2,2);
        v2 = new rt.Vector(3,4,5);
    });

    it('should calculate the length of the vector', function () {
        var length = v1.length();

        expect(length).toEqual(Math.sqrt(12));
    });

    it('should divide the Vector\'s fields by the length of the Vector', function () {
        v2.normalize();

        expect(v2.x).toEqual(3/Math.sqrt(50));
        expect(v2.y).toEqual(4/Math.sqrt(50));
        expect(v2.z).toEqual(5/Math.sqrt(50));
    });

    it('should do a vectorial multiply', function () {
        var toAssert = v1.vectorialMultiply(v2);

        expect(toAssert.x).toEqual(2);
        expect(toAssert.y).toEqual(-4);
        expect(toAssert.z).toEqual(2);
    });

    it('should add the two Vector', function () {
        var toAssert = v1.addVector(v2);

        expect(toAssert.x).toEqual(5);
        expect(toAssert.y).toEqual(6);
        expect(toAssert.z).toEqual(7);
    });

    describe('substractVector method', function () {
        it('should substract v2 from v1', function () {
            var toAssert = v1.substractVector(v2);

            expect(toAssert.x).toEqual(-1);
            expect(toAssert.y).toEqual(-2);
            expect(toAssert.z).toEqual(-3);
        });

        it('should substract v1 from v2', function () {
            var toAssert = v2.substractVector(v1);

            expect(toAssert.x).toEqual(1);
            expect(toAssert.y).toEqual(2);
            expect(toAssert.z).toEqual(3);
        });
    });

    it('should multiply the Vector\'s field with the number', function () {
        var toAssert = v2.multiplyVectorByNumber(3);

        expect(toAssert.x).toEqual(9);
        expect(toAssert.y).toEqual(12);
        expect(toAssert.z).toEqual(15);
    });

    it('should divide the Vector\'s field with the number', function () {
        var toAssert = v2.divideVectorByNumber(3);

        expect(toAssert.x).toEqual(1);
        expect(toAssert.y).toEqual(4/3);
        expect(toAssert.z).toEqual(5/3);
    });
});
