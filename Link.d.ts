///<reference path="EnergyStore.d.ts"/>
///<reference path="Structure.d.ts"/>

declare module Screeps {
    interface Link extends Structure, EnergyStore {

        /**
         * The amount of game ticks the link has to wait until the next transfer is possible
         *
         * @type number
         */
        cooldown: number;
    }
}