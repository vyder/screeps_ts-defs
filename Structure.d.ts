/// <reference path="./Game.d.ts"/>
/// <reference path="./Owner.d.ts"/>
/// <reference path="./Room.d.ts"/>
/// <reference path="./RoomPosition.d.ts"/>

declare module Screeps {
    interface Structure {

        /**
         * The current amount of hit points of the Structure
         *
         * @type number
         */
        hits:number;

        /**
         * The total amount of hit points of the Structure
         *
         * @type number
         */
        hitsMax:number;

        /**
         * A unique Object identifier. You can use Game.getObjectById
         * method to retrieve an Object instance by its id
         *
         * @type string
         */
        id:string;

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
         * An Object representing the position of this Structure
         * in the Room
         *
         * @type RoomPosition
         */
        pos: RoomPosition;

        /**
         * The link to the Room Object. May not be available in case a
         * placed in a Room which you do not have access to
         *
         * @type Room
         */
        room: Room;

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