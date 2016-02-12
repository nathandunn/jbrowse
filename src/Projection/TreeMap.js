///<reference path="collections.ts" />
///<reference path="collections.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "collections/sorted-map"], function (require, exports, SortedMap) {
    var TreeMap = (function (_super) {
        __extends(TreeMap, _super);
        function TreeMap() {
            _super.apply(this, arguments);
        }
        TreeMap.prototype.floorKey = function (input) {
            var iter = this.keyset();
            while ((next = iter.next()).done !== true) {
                console.log(next + " vs " + K);
                if (next > input) {
                    return next;
                }
            }
            return null;
        };
        TreeMap.prototype.ceilingKey = function (input) {
            var iter = this.keyset();
            next = null;
            while ((next = iter.next()).done !== true) {
                console.log(next + " vs " + K);
                if (next > input) {
                    return iter.next();
                }
            }
            return null;
        };
        TreeMap.prototype.floorEntry = function (input) {
            var k = this.floorKey(input);
            return k ? this.get(k) : null;
        };
        TreeMap.prototype.ceilingEntry = function (input) {
            var k = this.ceilingKey(input);
            return k ? this.get(k) : null;
        };
        return TreeMap;
    })(SortedMap);
});
//# sourceMappingURL=TreeMap.js.map