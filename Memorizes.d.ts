declare module Screeps {

    /**
     * Defines objects that have shortcuts to their
     * respective Memory objects
     */
    interface Memorizes {

        /**
         * A shorthand to this objects data object deep within Memory
         * for quick access.
         * Example:
         *  - Memory.spawns[spawn.name]
         *  - Memory.creeps[creep.name]
         *  etc
         *
         * @type any
         */
        memory: any;
    }
}