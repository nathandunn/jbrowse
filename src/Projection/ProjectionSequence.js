var Projection;
(function (Projection) {
    var ProjectionSequence = (function () {
        //List<String> features// a list of Features  // default is a single entry ALL . . if empty then all
        //Integer unprojectedLength = 0  // the length of the sequence before projection . . the projected length comes from the associated discontinuous projection
        function ProjectionSequence() {
            this.originalOffset = 0; // original incoming coordinates . .  0 implies order = 0, >0 implies that order > 0
            this.unprojectedLength = 0;
        }
        ProjectionSequence.prototype.test = function () {
            return "test string";
        };
        ProjectionSequence.blink = function () {
            console.log("blink");
        };
        return ProjectionSequence;
    })();
    Projection.ProjectionSequence = ProjectionSequence;
})(Projection || (Projection = {}));
//# sourceMappingURL=ProjectionSequence.js.map