declare module Screeps {
    interface SurvivalGameInfo {

        /**
         * Current score
         *
         * @type number
         */
        score: number;

        /**
         * Time to the next wave of invaders
         *
         * @type number
         */
        timeToWave: number;

        /**
         * The number of the next wave
         *
         * @type number
         */
        wave: number;
    }
}