declare module Screeps {
    interface Game {

        // Game Constants

        // Game Modes
        MODE_SIMULATION:string;
        MODE_WORLD:string;

        // Directions
        TOP:number;
        TOP_RIGHT:number;
        RIGHT:number;
        BOTTOM_RIGHT:number;
        BOTTOM:number;
        BOTTOM_LEFT:number;
        LEFT:number;
        TOP_LEFT:number;

        // Structure Types
        STRUCTURE_EXTENSION:string;
        STRUCTURE_RAMPART:string;
        STRUCTURE_ROAD:string;
        STRUCTURE_WALL:string;
        STRUCTURE_KEEPER_LAIR:string;
        STRUCTURE_PORTAL:string;
        STRUCTURE_CONTROLLER:string;
        STRUCTURE_LINK:string;

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
    }
}