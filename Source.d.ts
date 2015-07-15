/// <reference path="./GameObject.d.ts"/>
/// <reference path="./Room.d.ts"/>
/// <reference path="./RoomPosition.d.ts"/>

declare module Screeps {
    /**
     * An energy source object. Can be harvested by creeps with a WORK body part.
     *
     * @class
     * @constructor
     */
    interface Source extends GameObject, Positionable {
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