///<reference path="Destructible.d.ts"/>
/// <reference path="./Game.d.ts"/>
/// <reference path="./GameObject.d.ts"/>
/// <reference path="./Owner.d.ts"/>
/// <reference path="./Room.d.ts"/>
/// <reference path="./RoomPosition.d.ts"/>

declare module Screeps {
    interface Structure extends GameObject, Positionable, Destructible {

        /**
         * Whether this is your own structure
         *
         * @type boolean
         */
        my:boolean;

        /**
         * An Object with the Structure's owner info containing the
         * following properties
         *
         * @type Owner
         */
        owner:Owner;

        /**
         * A string Game constant representing the type of this Structure
         *
         * @type string
         */
        structureType: string;

        /**
         * Destroy this Structure immediately
         */
        destroy();

        /**
         * Toggle auto notification when the Structure is under attack. The
         * notification will be sent to your account email.
         *
         * Turned on by default.
         *
         * @arg {boolean} enabled - Whether to enable notifications or disable
         */
        notifyWhenAttacked(enabled:boolean);

    }
}