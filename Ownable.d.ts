///<reference path="Owner.d.ts"/>

declare module Screeps {

    /**
     * Describes Game objects that can be owned
     * by an Owner
     */
    interface Ownable {

        /**
         * Whether this is your own object
         *
         * @type boolean
         */
        my:boolean;

        /**
         * The Owner of this object
         *
         * @type Owner
         */
        owner:Owner;
    }
}