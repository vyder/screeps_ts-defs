declare module Screeps {
    /**
     * A step in a path
     */
    interface PathStep {
        /**
         * X position in the room.
         *
         * @type number
         */
        x: number;

        /**
         * Y position in the room.
         *
         * @type number
         */
        y: number;

        /**
         * The relative X position.
         *
         * @type number
         */
        dx: number;

        /**
         * The relative Y position.
         *
         * @type number
         */
        dy: number;

        /**
         * The relative direction constant
         *
         * @type number
         */
        direction: number;
    }
}