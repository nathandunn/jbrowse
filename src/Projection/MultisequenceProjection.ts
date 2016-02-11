///<reference path="AbstractProjection.ts"/>
///<reference path="ProjectionSequence.ts"/>

module Projection {

    export class MultisequenceProjection extends AbstractProjection {

        //var sequenceDiscontinuousProjectionMap:

        constructor(){

        }

        projectValue(input:number):number {
            // abcd
            //var returnValue:number = input + 7;
            var returnValue:number = input ;
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
        }

        projectReverseValue(input:number):number {
            return null;
        }

        projectCoordinate(min:number, max:number):Coordinate {
            return null;
        }

        projectReverseCoordinate(min:number, max:number):Coordinate {
            return null;
        }

        projectSequences(inputSequence:string, min:number, max:number, offset:number):string {
            return null;
        }

        getLength():number {
            return null;
        }

        clear():number {
            return null;
        }
    }

}
