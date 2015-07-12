/// <reference path="./Room.d.ts"/>
/// <reference path="./RoomPosition.d.ts"/>

declare module Screeps {
    /**
     * Every Object that exists in a Room has a RoomPosition
     * as the 'pos' property. This quality of these Objects
     * is defined by the Positionable interface.
     */
    interface Positionable {
        pos: RoomPosition;
    }
}