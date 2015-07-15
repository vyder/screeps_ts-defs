///<reference path="GameObject.d.ts"/>
///<reference path="Ownable.d.ts"/>
///<reference path="Positionable.d.ts"/>

declare module Screeps {
    interface ConstructionSite extends GameObject, Ownable, Positionable {

        /**
         * The current construction progress
         *
         * @type number
         */
        progress: number;

        /**
         * The total construction progress needed for the
         * structure to be built
         *
         * @type number
         */
        progressTotal: number;

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
         * Remove this ConstructionSite
         */
        remove();
    }
}