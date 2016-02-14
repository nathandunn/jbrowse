///<reference path="AbstractProjection.ts"/>
///<reference path="collections.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "collections/sorted-map"], function (require, exports, SortedMap) {
    //var LruMap = require("collections/lru-map");
    var DiscontinuousProjection = (function (_super) {
        __extends(DiscontinuousProjection, _super);
        function DiscontinuousProjection() {
            //var t = new collections.BSTree();
            this.minMap = new SortedMap();
            this.maxMap = new SortedMap();
        }
        // TODO: does typesafe have these types of structures?
        //TreeMap<number, Coordinate> minMap = new TreeMap<>()
        //TreeMap<number, Coordinate> maxMap = new TreeMap<>()
        DiscontinuousProjection.prototype.projectValue = function (input) {
            if (!this.minMap && !this.maxMap) {
                return input;
            }
            if (input == null) {
                return AbstractProjection.UNMAPPED_VALUE;
            }
            var floorMinKey = this.minMap.floorKey(input);
            var ceilMinKey = this.minMap.ceilingKey(input);
            var floorMaxKey = this.maxMap.floorKey(input);
            var ceilMaxKey = this.maxMap.ceilingKey(input);
            //        log.debug "input ${input} minKey ${floorMinKey}-${ceilMinKey}"
            //        log.debug "input ${input} maxKey ${floorMaxKey}-${ceilMaxKey}"
            if (floorMinKey == null || ceilMaxKey == null) {
                return AbstractProjection.UNMAPPED_VALUE;
            }
            // if is a hit for min and no max hit, then it is the left-most
            if (floorMinKey == ceilMinKey) {
                if (floorMaxKey == null) {
                    return 0;
                }
                else {
                    //                return input - floorMaxKey
                    return this.projectValue(floorMaxKey) + 1;
                }
            }
            // this is the left-most still
            if (floorMinKey != ceilMinKey && floorMaxKey == null) {
                return input - floorMinKey;
            }
            // if we are at the max border
            if (floorMaxKey == ceilMaxKey) {
                return input - floorMinKey + this.projectValue(floorMinKey);
            }
            // if we are inbetween a ceiling max and floor min, then we are in a viable block
            if (input > floorMinKey && input < ceilMaxKey && ceilMinKey >= ceilMaxKey) {
                return input - floorMinKey + this.projectValue(floorMinKey);
            }
            // if we are inbetween for the last large one on the RHS
            if (floorMaxKey != ceilMaxKey && ceilMinKey == null) {
                return input - floorMinKey + this.projectValue(floorMinKey);
            }
            //        log.debug "${input} unable to find match, returning UNMAPPED"
            return AbstractProjection.UNMAPPED_VALUE;
        };
        DiscontinuousProjection.prototype.projectReverseValue = function (input) {
            return null;
        };
        DiscontinuousProjection.prototype.projectSequences = function (inputSequence, min, max, offset) {
            return null;
        };
        //getLength():number {
        //    return null;
        //}
        //clear():number {
        //    return null;
        //}
        DiscontinuousProjection.prototype.projectCoordinate = function (min, max) {
            //return new Coordinate(this.projectValue(min), this.projectValue(max), this.sequence);
            return new Coordinate(this.projectValue(min), this.projectValue(max));
        };
        DiscontinuousProjection.prototype.projectReverseCoordinate = function (min, max) {
            var newMin = this.projectReverseValue(min);
            var newMax = this.projectReverseValue(max);
            if (newMin < 0 && newMax < 0)
                return null;
        };
        DiscontinuousProjection.prototype.getOriginalLength = function () {
            return this.maxMap.values().last().max;
        };
        DiscontinuousProjection.prototype.getBufferedLength = function (buffer) {
            var number = number ? number : 1;
            return length + buffer * (this.size() - 1);
        };
        DiscontinuousProjection.prototype.getLength = function () {
            var returnValue = 0;
            var iter = this.minMap.values();
            //while(iter.hasNext()){
            //    Coordinate coordinate = iter.next().value();
            //    returnValue += coordinate.length;
            //}
            for (var _i = 0, _a = this.minMap.keys(); _i < _a.length; _i++) {
                var k = _a[_i];
                var coordinate = this.minMap.get(k);
                returnValue += coordinate.getLength();
            }
            //for (var k in iter) {
            //    var value = minMap[key];
            //    // Use `key` and `value`
            //}
            //foreach (Coordinate coordinate : minMap.values() ) {
            //    returnValue += coordinate.length;
            //}
            return returnValue;
        };
        //projectSequence(inputSequence:string, minCoordinate:number, maxCoordinate:number):string {
        //    this.projectSequence(inputSequence, minCoordinate, maxCoordinate, 0);
        //}
        DiscontinuousProjection.prototype.projectSequence = function (inputSequence, minCoordinate, maxCoordinate, offset) {
            var returnSequence = "";
            //Iterator<Coordinate> minKeyIterator = this.minMap.values().iterator();
            var minKeyIterator = this.minMap.values().iterator();
            //var minCoordinate:Coordinate = minCoordinate >= 0 ? minCoordinate : 0;
            minCoordinate = minCoordinate >= 0 ? minCoordinate : 0;
            //var maxCoordinate:Coordinate = maxCoordinate >= 0 ? maxCoordinate : inputSequence.length();
            maxCoordinate = maxCoordinate >= 0 ? maxCoordinate : inputSequence.length;
            //console.log "minCoordinate = ${minCoordinate}"
            //console.log "maxCoordinate = ${maxCoordinate}"
            //console.log "offset = ${offset}"
            //console.log "# of min maps ${minMap.size()}"
            while (minKeyIterator.hasNext()) {
                var coordinate = minKeyIterator.next();
                console.log("coodinate coord ${coordinate.min}::${coordinate.max} vs ${inputSequence.length()}");
                var offsetMinCoordinate = coordinate.min + offset;
                var offsetMaxCoordinate = coordinate.max + offset;
                //console.log
                //"offset coord ${offsetMinCoordinate}::${offsetMaxCoordinate} vs ${inputSequence.length()}"
                //console.log
                //"min/max ${minCoordinate}::${maxCoordinate} vs ${inputSequence.length()}"
                // 6 cases
                // case 1, max < minCoordinate . . .ignore
                // case 5, min > maxCoordinate  . . .ignore
                if (offsetMaxCoordinate < minCoordinate || offsetMinCoordinate > maxCoordinate) {
                }
                else if (offsetMinCoordinate <= minCoordinate && offsetMaxCoordinate >= maxCoordinate) {
                    returnSequence += inputSequence.substring(minCoordinate, maxCoordinate + 1);
                }
                else if (offsetMinCoordinate <= minCoordinate && offsetMaxCoordinate >= minCoordinate) {
                    returnSequence += inputSequence.substring(minCoordinate, offsetMaxCoordinate + 1);
                }
                else if (offsetMinCoordinate > minCoordinate && offsetMaxCoordinate <= maxCoordinate) {
                    returnSequence += inputSequence.substring(offsetMinCoordinate, offsetMaxCoordinate + 1);
                }
                else if (offsetMinCoordinate <= maxCoordinate && offsetMaxCoordinate > maxCoordinate) {
                    returnSequence += inputSequence.substring(offsetMinCoordinate, maxCoordinate + 1);
                }
                else {
                    console.log("what is this error case? ");
                }
            }
            return returnSequence;
        };
        DiscontinuousProjection.prototype.toString = function () {
            var returnString = "DiscontinuousProjection{";
            //this.minMap.values().each { it ->
            //    returnString += "[${it.min}::${it.max}]"
            //}
            returnString += '}';
            return returnString;
        };
        DiscontinuousProjection.prototype.size = function () {
            if (!this.minMap) {
                return 0;
            }
            //assert minMap.size() == maxMap.size()
            return this.minMap.size();
        };
        DiscontinuousProjection.prototype.clear = function () {
            var returnValue = this.minMap.size();
            //        assert returnValue == maxMap.size()
            this.minMap.clear();
            this.maxMap.clear();
            return returnValue;
        };
        return DiscontinuousProjection;
    })(AbstractProjection);
});
//# sourceMappingURL=DiscontinuousProjection.js.map