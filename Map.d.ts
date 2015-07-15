///<reference path="Room.d.ts"/>

declare module Screeps {

    /**
     * A global object representing the world map. Use it to
     * navigate between Rooms. The object is accessible via
     * the Game.map property
     */
    interface Map {

        /**
         * Find the exit direction from the given Room en route to another Room
         *
         * @param {string|Room} fromRoom - Room or Room name to start from
         * @param {string|Room} toRoom   - Room or Room name to end at
         *
         * @return {number} - One of the Room direction constants:
         *                    > FIND_EXIT_TOP
         *                    > FIND_EXIT_RIGHT
         *                    > FIND_EXIT_BOTTOM
         *                    > FIND_EXIT_LEFT
         *
         *                    Or one of these error codes:
         *                    > ERR_NO_PATH      - Path cannot be found
         *                    > ERR_INVALID_ARGS - The location is incorrect
         */
        findExit(fromRoom:string, toRoom:string):number;
        findExit(fromRoom:Room, toRoom:Room):number;

        /**
         * Find a route from the given Room to another Room
         *
         * @param {string|Room} fromRoom - Room or Room name to start from
         * @param {string|Room} toRoom   - Room or Room name to end at
         *
         * @return {any} - The route array in the following format:
         *                 [
         *                   { exit: FIND_EXIT_RIGHT, room: 'arena21' },
         *                   { exit: FIND_EXIT_BOTTOM, room: 'arena22' }
         *                 ]
         *
         *                 Or one of these error codes:
         *                 > ERR_NO_PATH   - Path cannot be found
         */
        findRoute(fromRoom:string, toRoom:string):any;
        findRoute(fromRoom:Room, toRoom:Room):any;
    }
}