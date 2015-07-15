/// <reference path="./Room.d.ts"/>
/// <reference path="./RoomPosition.d.ts"/>

declare module Screeps {
    /**
     * Every Object that exists in a Room has a RoomPosition
     * as the 'pos' property. This quality of these Objects
     * is defined by the Positionable interface.
     */
    interface Positionable {
        /**
         * Represents the position of this object in the Room
         *
         * @type RoomPosition
         */
        pos: RoomPosition;

        /**
         * The link to the Room Object. May not be available in case a
         * placed in a Room which you do not have access to
         *
         * @type Room
         */
        room: Room;
    }
}