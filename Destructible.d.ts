declare module Screeps {

    /**
     * Any Object in the Game that can be destroyed
     */
    interface Destructible {
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
    }
}