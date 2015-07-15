/// <reference path="./GameObject.d.ts"/>
/// <reference path="./Positionable.d.ts"/>

declare module Screeps {

    /**
     * A dropped piece of Energy. It will decay after a while if not picked up
     */
    interface Energy extends GameObject, Positionable {

        /**
         * The amount of energy this piece contains
         *
         * @type number
         */
        energy: number;
    }
}