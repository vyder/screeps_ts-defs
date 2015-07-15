///<reference path="Creep.d.ts"/>
///<reference path="Flag.d.ts"/>
///<reference path="Map.d.ts"/>
///<reference path="Room.d.ts"/>
///<reference path="Spawn.d.ts"/>
///<reference path="Structure.d.ts"/>

declare module Screeps {
    interface Game {

        /* Game Constants */

        // Result Codes
        OK:number;
        ERR_NOT_OWNER:number;
        ERR_NO_PATH:number;
        ERR_NAME_EXISTS:number;
        ERR_BUSY:number;
        ERR_NOT_FOUND:number;
        ERR_NOT_ENOUGH_ENERGY:number;
        ERR_INVALID_TARGET:number;
        ERR_FULL:number;
        ERR_NOT_IN_RANGE:number;
        ERR_INVALID_ARGS:number;
        ERR_TIRED:number;
        ERR_NO_BODYPART:number;
        ERR_NOT_ENOUGH_EXTENSIONS:number;
        ERR_RCL_NOT_ENOUGH:number;
        ERR_GCL_NOT_ENOUGH:number;

        // Room.find constants
        FIND_CREEPS:number;
        FIND_MY_CREEPS:number;
        FIND_HOSTILE_CREEPS:number;
        FIND_MY_SPAWNS:number;
        FIND_HOSTILE_SPAWNS:number;
        FIND_SOURCES:number;
        FIND_SOURCES_ACTIVE:number;
        FIND_DROPPED_ENERGY:number;
        FIND_STRUCTURES:number;
        FIND_MY_STRUCTURES:number;
        FIND_HOSTILE_STRUCTURES:number;
        FIND_FLAGS:number;
        FIND_CONSTRUCTION_SITES:number;
        FIND_EXIT_TOP:number;
        FIND_EXIT_RIGHT:number;
        FIND_EXIT_BOTTOM:number;
        FIND_EXIT_LEFT:number;
        FIND_EXIT:number;

        // Directions
        TOP:number;
        TOP_RIGHT:number;
        RIGHT:number;
        BOTTOM_RIGHT:number;
        BOTTOM:number;
        BOTTOM_LEFT:number;
        LEFT:number;
        TOP_LEFT:number;

        // Body Parts
        MOVE:string;
        WORK:string;
        CARRY:string;
        ATTACK:string;
        RANGED_ATTACK:string;
        TOUGH:string;
        HEAL:string;

        // Structure Types
        STRUCTURE_EXTENSION:string;
        STRUCTURE_RAMPART:string;
        STRUCTURE_ROAD:string;
        STRUCTURE_WALL:string;
        STRUCTURE_KEEPER_LAIR:string;
        STRUCTURE_PORTAL:string;
        STRUCTURE_CONTROLLER:string;
        STRUCTURE_LINK:string;

        // Colors
        COLOR_RED:string;
        COLOR_PURPLE:string;
        COLOR_BLUE:string;
        COLOR_CYAN:string;
        COLOR_GREEN:string;
        COLOR_YELLOW:string;
        COLOR_ORANGE:string;
        COLOR_BROWN:string;
        COLOR_GREY:string;
        COLOR_WHITE:string;

        // Game Modes
        MODE_SIMULATION:string;
        MODE_WORLD:string;


        /* Gameplay Information */

        /**
         * An amount of available CPU time at the current game tick
         *
         * @type number
         */
        cpuLimit: number;

        /**
         * A hash containing all your Creeps with Creep names as
         * hash keys
         */
        creeps: {
            [creepName: string]: Creep;
        };

        /**
         * A hash containing all your Flags with Flag names as
         * hash keys
         */
        flags: {
            [flagName: string]: Flag;
        };

        /**
         * A global object representing the world map
         */
        map: Map;

        /**
         * A hash containing all your Rooms with Room names as
         * hash keys
         */
        rooms: {
            [roomName: string]: Room;
        };

        /**
         * A hash containing all your Spawns with Spawn names as
         * hash keys
         */
        spawns: {
            [spawnName: string]: Spawn;
        };

        /**
         * A hash containing all your Structures with Structure names as
         * hash keys
         */
        structures: {
            [structureName: string]: Structure;
        };

        /**
         * System game tick counter. It is automatically incremented
         * on every tick
         *
         * @type number
         */
        time: number;

        /**
         * Get an object with the specified unique ID. It may be a game object
         * of any type. Only objects from the rooms which are visible to you
         * can be accessed.
         *
         * @param {string} id - Unique object identifier
         *
         * @return {GameObject} - The GameObject that this id identifies or null if
         *                        no object was found
         */
        getObjectById(id:string):GameObject;

        /**
         * Get amount of CPU time used from the beginning of the current game tick
         *
         * @return {number} - Currently used CPU time as a float number
         */
        getUsedCpu():number;

        /**
         * Send a custom message to your account email. This way, you can set up
         * notifications to yourself on any occasion within the game. You can
         * schedule up to 20 notifications during one game tick.
         * Not available in the Simulation Room.
         *
         * @param {string} message - Custom text which will be sent in the message.
         *                           Maximum length is 1000 characters.
         * @param {number} [groupInterval] - If set to 0 (default), the notification
         *                           will be scheduled immediately. Otherwise, it will
         *                           be grouped with other notifications and mailed
         *                           out later using the specified time in minutes.
         */
        notify(message:string, groupInterval?:number);
    }
}