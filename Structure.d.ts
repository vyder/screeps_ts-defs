///<reference path="Destructible.d.ts"/>
/// <reference path="./Game.d.ts"/>
/// <reference path="./GameObject.d.ts"/>
///<reference path="Ownable.d.ts"/>
/// <reference path="./Owner.d.ts"/>
/// <reference path="./Room.d.ts"/>
/// <reference path="./RoomPosition.d.ts"/>

declare module Screeps {
    interface Structure extends GameObject, Positionable, Destructible, Ownable {

        /**
         * A string Game constant representing the type of this Structure:
         *      - STRUCTURE_EXTENSION
         *      - STRUCTURE_RAMPART
         *      - STRUCTURE_ROAD
         *      - STRUCTURE_WALL
         *      - STRUCTURE_KEEPER_LAIR
         *      - STRUCTURE_PORTAL
         *      - STRUCTURE_CONTROLLER
         *      - STRUCTURE_LINK
         *
         * @type string
         */
        structureType: string;

        /**
         * Destroy this Structure immediately
         */
        destroy();
    }
}