/// <reference path="./Room.d.ts"/>
/// <reference path="./RoomPosition.d.ts"/>

declare module Screeps {
    /**
     * An energy source object. Can be harvested by creeps with a WORK body part.
     *
     * @class
     * @constructor
     */
    interface Source {
        /**
         * A unique object identificator.
         *
         * @type string
         */
        id: string;

        /**
         * The link to the Room object of this structure.
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
         * The remaining amount of energy.
         *
         * @type number
         */
        energy: number;

        /**
         * The total amount of energy in the source. Equals to 3000 in most cases.
         *
         * @type number
         */
        energyCapacity: number;

        /**
         * The remaining time after which the source will be refilled.
         *
         * @type number
         */
        ticksToRegeneration: number;
    }
}