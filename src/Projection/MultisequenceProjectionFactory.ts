///<reference path="MultisequenceProjection.ts"/>

module Projection {
    export class MultisequenceProjectionFactory {

        /**
         * This expects either a name or a JSON string and creates a projection
         * @param name
         */
        static getProjection(name:string):string {
            var projection:MultisequenceProjection = new MultisequenceProjection();
            return projection;
        }
    }
}
