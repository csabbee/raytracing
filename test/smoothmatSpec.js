/**
 * Created by Csabi on 2014.11.01..
 */

describe('SmootMat class', function() {

    var SmootMat;
    var R, N, V;
    var k, n0;

    beforeEach(function() {
        R = new rt.Vector(1,2,3);
        N = new rt.Vector(2,3,4);
        V = new rt.Vector(3,4,5);
        k = new rt.Color(10,10,10);
        n0 = new rt.Color(255,255,255);

        SmootMat = new rt.SmoothMat(k, n0, true, true, 1);
    });

    it('Should calculate the reflection direction', function() {
        SmootMat.reflectionDir(R, N, V);

        expect(R.x).toEqual(25);
        expect(R.y).toEqual(8);
        expect(R.z).toEqual(-9);
    });
});
