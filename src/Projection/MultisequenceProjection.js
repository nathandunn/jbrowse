///<reference path="AbstractProjection.ts"/>
///<reference path="ProjectionSequence.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Projection;
(function (Projection) {
    var MultisequenceProjection = (function (_super) {
        __extends(MultisequenceProjection, _super);
        function MultisequenceProjection() {
            _super.call(this);
        }
        MultisequenceProjection.prototype.projectValue = function (input) {
            // abcd
            //var returnValue:number = input + 7;
            var returnValue = input;
            return returnValue;
            //Projection.ProjectionSequence projectionSequence = getProjectionSequence(input);
            //if (!projectionSequence) {
            //    return UNMAPPED_VALUE
            //}
            //DiscontinuousProjection discontinuousProjection = sequenceDiscontinuousProjectionMap.get(projectionSequence)
            //// TODO: buffer for scaffolds is currently 1 . . the order
            //Integer returnValue = discontinuousProjection.projectValue(input - projectionSequence.originalOffset )
            //if (returnValue == UNMAPPED_VALUE) {
            //    return UNMAPPED_VALUE
            //} else {
            //    return returnValue + projectionSequence.offset
            //}
        };
        MultisequenceProjection.prototype.projectReverseValue = function (input) {
            return null;
        };
        MultisequenceProjection.prototype.projectCoordinate = function (min, max) {
            return null;
        };
        MultisequenceProjection.prototype.projectReverseCoordinate = function (min, max) {
            return null;
        };
        MultisequenceProjection.prototype.projectSequences = function (inputSequence, min, max, offset) {
            return null;
        };
        MultisequenceProjection.prototype.getLength = function () {
            return null;
        };
        MultisequenceProjection.prototype.clear = function () {
            return null;
        };
        return MultisequenceProjection;
    })(AbstractProjection);
    Projection.MultisequenceProjection = MultisequenceProjection;
})(Projection || (Projection = {}));
//# sourceMappingURL=MultisequenceProjection.js.map