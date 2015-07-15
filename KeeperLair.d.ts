///<reference path="Structure.d.ts"/>

declare module Screeps {
    interface KeeperLair extends Structure {

        /**
         * Time to spawning of the next Source Keeper
         *
         * @type number
         */
        ticksToSpawn: number;
    }
}