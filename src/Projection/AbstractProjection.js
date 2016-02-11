///<reference path="Coordinate.ts"/>
var AbstractProjection = (function () {
    function AbstractProjection() {
    }
    AbstractProjection.prototype.projectCoordinate = function (min, max) {
        return new Coordinate(this.projectValue(min), this.projectValue(max));
    };
    AbstractProjection.prototype.projectReverseCoordinate = function (min, max) {
        return new Coordinate(this.projectReverseValue(min), this.projectReverseValue(max));
    };
    AbstractProjection.prototype.clear = function () {
        return 0;
    };
    AbstractProjection.UNMAPPED_VALUE = -1;
    return AbstractProjection;
})();
//# sourceMappingURL=AbstractProjection.js.map