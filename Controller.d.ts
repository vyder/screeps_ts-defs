///<reference path="Structure.d.ts"/>

declare module Screeps {
    interface Controller extends Structure {

        /**
         * Current Controller level, from 0 to 8
         *
         * @type number
         */
        level: number;

        /**
         * The current progress of upgrading the controller to the next level
         *
         * @type number
         */
        progress: number;

        /**
         * The progress needed to reach the next level
         *
         * @type number
         */
        progressTotal: number;

        /**
         * The amount of game ticks when this controller will lose one level
         * due to absence of Owner's Spawns in the Room
         *
         * @type number
         */
        ticksToDowngrade: number;
    }
}