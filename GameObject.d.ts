declare module Screeps {

    /**
     * An interface to define physical objects that
     * exist in the Game
     */
    interface GameObject {

        /**
         * A unique Object identifier. You can use Game.getObjectById
         * method to retrieve an Object instance by its id
         *
         * @type string
         */
        id:string;
    }
}