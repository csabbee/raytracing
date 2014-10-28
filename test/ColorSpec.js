/**
 * Created by csabi on 2014.10.28..
 */
'use strict';

describe('Class: Color', function () {

    var c1, c2;
    beforeEach(function () {
        c1 = new rt.Color(2,2,2);
        c2 = new rt.Color(3,4,5);
    });

    it('should multiply Color\'s fields with each other', function () {
        var toAssert = c1.multiplyColor(c2);
        expect(toAssert.red).toEqual(6);
        expect(toAssert.green).toEqual(8);
        expect(toAssert.blue).toEqual(10);
    });

    it('should substract Color\'s fields from each other', function () {
        var toAssert = c1.substractColor(c2);

        expect(toAssert.red).toEqual(1);
        expect(toAssert.green).toEqual(2);
        expect(toAssert.blue).toEqual(3);
    });

    it('should add Color\'s fields to each other', function () {
        var toAssert = c1.addColor(c2);

        expect(toAssert.red).toEqual(5);
        expect(toAssert.green).toEqual(6);
        expect(toAssert.blue).toEqual(7);
    });

    it('should divide Color\'s fields with each other', function () {
        var toAssert = c2.divideColor(c1);

        expect(toAssert.red).toEqual(1.5);
        expect(toAssert.green).toEqual(2);
        expect(toAssert.blue).toEqual(2.5);
    });

    it('should multiply Color\'s every field with the number', function () {
        var toAssert = c2.multiplyColorByNumber(5);

        expect(toAssert.red).toEqual(15);
        expect(toAssert.green).toEqual(20);
        expect(toAssert.blue).toEqual(25);
    });

    it('should substract the number from Color\'s every field', function () {
        var toAssert = c2.substractColorByNumber(2);

        expect(toAssert.red).toEqual(1);
        expect(toAssert.green).toEqual(2);
        expect(toAssert.blue).toEqual(3);
    });

    it('should add the number to Color\'s every field', function () {
        var toAssert = c2.addColorByNumber(2);

        expect(toAssert.red).toEqual(5);
        expect(toAssert.green).toEqual(6);
        expect(toAssert.blue).toEqual(7);
    });

    it('should divide Color\'s every field with the number', function () {
        var toAssert = c2.divideColorByNumber(2);

        expect(toAssert.red).toEqual(1.5);
        expect(toAssert.green).toEqual(2);
        expect(toAssert.blue).toEqual(2.5);
    });

    it('should set Color\'s every field to the number', function () {
        c2.setColorToNumber(10);

        expect(c2.red).toEqual(10);
        expect(c2.green).toEqual(10);
        expect(c2.blue).toEqual(10);
    });
});
