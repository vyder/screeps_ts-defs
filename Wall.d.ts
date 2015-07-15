///<reference path="Structure.d.ts"/>

declare module Screeps {
    interface Wall extends Structure {

        /**
         * The amount of game ticks when the wall will disappear (only
         * for automatically placed border walls at the start of the
         * game)
         *
         * @type number
         */
        ticksToLive?: number;
    }
}