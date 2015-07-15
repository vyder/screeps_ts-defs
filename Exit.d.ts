/// <reference path="./Room.d.ts"/>
/// <reference path="./RoomPosition.d.ts"/>

declare module Screeps {
    /**
     * An exit to another room.
     *
     * @class
     * @constructor
     */
    interface Exit extends GameObject, Positionable {

        /**
         * The direction of the exit. One of the following constants:
         *  - Game.TOP
         *  - Game.RIGHT
         *  - Game.BOTTOM
         *  - Game.LEFT
         *
         * @type number
         */
        exit: number;
    }
}