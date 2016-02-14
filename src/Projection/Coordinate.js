///<reference path="ProjectionSequence.ts"/>
var Coordinate = (function () {
    function Coordinate(min, max) {
        this.min = min;
        this.max = max;
    }
    //constructor(min:number, max:number, sequence:Projection.ProjectionSequence) {
    //    this.min = min;
    //    this.max = max;
    //    this.sequence = sequence;
    //}
    Coordinate.spitOutSomething = function () {
        console.log("asdfasdfasdfa sdfasdlfkj ");
        //var returnString = 'whele that is workingish' ;
        //return returnString ;
    };
    Coordinate.prototype.getLength = function () {
        return Math.abs(this.max - this.min);
    };
    return Coordinate;
})();
//# sourceMappingURL=Coordinate.js.map