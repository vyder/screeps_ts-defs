/// <reference path="./Room.d.ts"/>
/// <reference path="./RoomPosition.d.ts"/>

declare module Screeps {
    /**
     * An exit to another room.
     *
     * @class
     * @constructor
     */
    interface Exit {
        /**
         * A unique object identificator.
         *
         * @type string
         */
        id: string;

        /**
         * The link to the Room object. May not be available in case a flag is placed in a room which you do not have access to.
         *
         * @type Room
         */
        room: Room;

        /**
         * An object representing the position of this structure in the room.
         *
         * @type RoomPosition
         */
        pos: RoomPosition;

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