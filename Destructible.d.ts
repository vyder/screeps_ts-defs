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

        /**
         * Toggle auto notification when this object is under attack. The
         * notification will be sent to your account email.
         *
         * Turned on by default.
         *
         * @arg {boolean} enabled - Whether to enable notifications or disable
         */
        notifyWhenAttacked(enabled:boolean);
    }
}