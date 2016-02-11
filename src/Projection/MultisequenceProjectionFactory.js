///<reference path="MultisequenceProjection.ts"/>
var Projection;
(function (Projection) {
    var MultisequenceProjectionFactory = (function () {
        function MultisequenceProjectionFactory() {
        }
        /**
         * This expects either a name or a JSON string and creates a projection
         * @param name
         */
        MultisequenceProjectionFactory.getProjection = function (name) {
            var projection = new Projection.MultisequenceProjection();
            projection.name = name ;

            return projection;
        };
        return MultisequenceProjectionFactory;
    })();
    Projection.MultisequenceProjectionFactory = MultisequenceProjectionFactory;
})(Projection || (Projection = {}));
//# sourceMappingURL=MultisequenceProjectionFactory.js.map