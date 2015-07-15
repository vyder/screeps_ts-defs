///<reference path="Controller.d.ts"/>
///<reference path="Memorizes.d.ts"/>
/// <reference path="Positionable.d.ts"/>
/// <reference path="RoomPosition.d.ts"/>
/// <reference path="SurvivalGameInfo.d.ts"/>

declare module Screeps {

    /**
     * An object representing the room in which your units and Structures
     * are in. Every object in the room contains its linked Room instance
     * in the room property.
     */
    interface Room extends Memorizes {

        /**
         * The controller of this Room, if present
         *
         * @type Controller
         */
        controller: Controller;

        /**
         * A string Game constant representing the Game mode
         *
         * @type string
         */
        mode: string;

        /**
         * The name of the Room.
         *
         * @type string
         */
        name: string;

        /**
         * An object with survival game info if available
         *
         * @type object
         */
        survivalInfo?: SurvivalGameInfo;


        /**
         * Create a new ConstructionSite at the specified location
         *
         * @param {number} x - The X position in the Room
         * @param {number} y - The Y position in the Room
         * @param {string} structureType - One of the Structure type Game constants
         */
        createConstructionSite(x:number, y:number, structureType:string):void;

        /**
         * Create a new ConstructionSite at the specified location
         *
         * @param {RoomPosition|Positionable} pos - A RoomPosition object or any Positionable object
         * @param {string} structureType - One of the Structure type Game constants
         */
        createConstructionSite(pos:RoomPosition, structureType:string):void;
        createConstructionSite(pos:Positionable, structureType:string):void;

        /**
         * Create a new Flag at the specified location
         *
         * @param {number} x - The X position in the Room
         * @param {number} y - The Y position in the Room
         * @param {string} [name] - The name of a new Flag. It should be unique, i.e. the Game.flags
         *                          object should not contain another Flag of the same name (hash key).
         *                          If not defined, a random name will be generated.
         * @param {string} [color] - The color of a new Flag. One of the string Game constants
         *                           representing Color.
         */
        createFlag(x:number, y:number, name?:string, color?:string);

        /**
         * Create a new Flag at the specified location
         *
         * @param {RoomPosition|Positionable} pos - A RoomPosition object or any Positionable object
         * @param {string} [name] - The name of a new Flag. It should be unique, i.e. the Game.flags
         *                          object should not contain another Flag of the same name (hash key).
         *                          If not defined, a random name will be generated.
         * @param {string} [color] - The color of a new Flag. One of the string Game constants
         *                           representing Color.
         */
        createFlag(pos:RoomPosition, name?:string, color?:string);
        createFlag(pos:Positionable, name?:string, color?:string);

        /**
         * Find all objects of the specified type in the Room
         *
         * @param {number} type - One of the Room.find Game constants
         * @param {object} [opts]
         *        {any} [opts.filter] - The result list will be filtered using the Lodash.filter method
         *
         * @return {Array<Objects} - An array with the objects found
         */
        find(type:string, opts?:{ filter:any }):Array<Object>;

        /**
         * Find the exit direction en route to another Room
         *
         * @param {string|Room} room - Another Room name or Room Object
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
        findExitTo(room:string):number;
        findExitTo(room:Room):number;

        /**
         * Find an optimal path inside the Room between two RoomPositions using A* search algorithm
         *
         * @param {RoomPosition} fromPos - The start position
         * @param {RoomPosition} toPos   - The end position
         * @param {object} [opts]
         *
         *        {boolean} [opts.ignoreCreeps]
         *              - Treat squares with Creeps as walkable. Can be useful with too many moving
         *                creeps around or in some other use cases.
         *              - The default value is false.
         *
         *        {boolean} [opts.ignoreDestructibleStructures]
         *              - Treat squares with destructible structures (constructed walls, ramparts,
         *                spawns, extensions) as walkable. Use this flag when you need to move through
         *                territory blocked by hostile structures. If a Creep with an ATTACK body part
         *                steps on such a square, it automatically attacks the Structure.
         *              - The default value is false.
         *
         *        {boolean} [opts.withinRampartsOnly]
         *              - The path will be found only within the area of your ramparts.
         *              - The default value is false
         *
         *        {array} [opts.ignore]
         *              - An array of the Room's objects or RoomPosition objects which should be treated
         *                as walkable tiles during the search.
         *
         *        {array} [opts.avoid]
         *              - An array of the Room's objects or RoomPosition objects which should be treated
         *                as obstacles during the search.
         *
         *        {number} [opts.maxOps]
         *              - The maximum limit of possible pathfinding operations. The greater the value, the
         *                more accurate path will be found, but more CPU time could be used.
         *              - The default value is 1
         *
         *        {number} [opts.heuristicWeight]
         *              - Weight to apply to the heuristic to allow for suboptimal paths (for example, not
         *                using the roads or going through swamps), in order to speed up the search. The less
         *                the value, the more accurate path will be found, but more CPU time could be used.
         *              - The default value is 1
         *
         * @return {Array<PathStep>} - The path represented by an array of PathSteps
         */
        findPath(fromPos:RoomPosition, toPos:RoomPosition, opts?:Object):Array<PathStep>;

        /**
         * Creates a RoomPosition object at the specified location
         *
         * @param {number} x - The X position in the Room
         * @param {number} y - The Y position in the Room
         *
         * @return {RoomPosition} - A RoomPosition object or null if it cannot be obtained
         */
        getPositionAt(x:number, y:number):RoomPosition;

        /**
         * Get the list of objects at the specified location
         *
         * @param {number} x - The X position in the Room
         * @param {number} y - The Y position in the Room
         *
         * @return {Array<Object>} - An array with objects in the following format:
         *                          [
         *                              { type: 'creep', creep: {...} },
         *                              { type: 'structure', structure: {...} },
         *                              ...
         *                              { type: 'terrain', terrain: 'swamp' }
         *                          ]
         */
        lookAt(x:number, y:number):Array<Object>;

        /**
         * Get the list of objects at the specified location
         *
         * @param {RoomPosition|Positionable} target - A RoomPosition object or any Positionable object
         *
         * @return {Array<Object>} - An array with objects in the following format:
         *                          [
         *                              { type: 'creep', creep: {...} },
         *                              { type: 'structure', structure: {...} },
         *                              ...
         *                              { type: 'terrain', terrain: 'swamp' }
         *                          ]
         */
        lookAt(target:RoomPosition):Array<Object>;
        lookAt(target:Positionable):Array<Object>;

        /**
         * Get the list of objects at the specified Room area. This method is more CPU efficient in
         * comparison to multiple lookAt calls.
         *
         * @param {number} top - The top Y boundary of the area
         * @param {number} left - The left X boundary of the area
         * @param {number} bottom - The bottom Y boundary of the area
         * @param {number} right - The right X boundary of the area
         *
         * @return {Object} - An object with all the objects in the specified area in the following format:
         *
         *                          // room.lookAtArea(10, 5, 11, 7)
         *
         *                          {
         *                              10: {
         *                                  5: [{ type: 'creep', creep: {...} },
         *                                      { type: 'terrain', terrain: 'swamp' }],
         *                                  6: [{ type: 'terrain', terrain: 'swamp' }],
         *                                  7: [{ type: 'terrain', terrain: 'swamp' }]
         *                              },
         *                              11: {
         *                                  5: [{ type: 'terrain', terrain: 'normal' }],
         *                                  6: [{ type: 'structure', structure: {...} },
         *                                      { type: 'terrain', terrain: 'swamp' }],
         *                                  7: [{ type: 'terrain', terrain: 'wall' }]
         *                              }
         *                          }
         *
         */
        lookAtArea(top:number, left:number, bottom:number, right:number):Object;

        /**
         * Get an object with the given type at the specified location
         *
         * @param {string} type - One of the Structure Game constants
         * @param {number} x - The X position in the Room
         * @param {number} y - The Y position in the Room
         *
         * @return {any} - An object or an array of objects of the given type at the
         *                 specified position if found, otherwise undefined.
         */
        lookForAt(type:string, x:number, y:number):Array<Object>;

        /**
         * Get an object with the given type at the specified location
         *
         * @param {string} type - One of the Structure Game constants
         * @param {RoomPosition|Positionable} target - A RoomPosition object or any Positionable object
         *
         * @return {any} - An object or an array of objects of the given type at the
         *                 specified position if found, otherwise undefined.
         */
        lookForAt(type:string, target:RoomPosition):Array<Object>;
        lookForAt(type:string, target:Positionable):Array<Object>;

        /**
         * Get the list of objects with the given type at the specified room area. This method is more
         * CPU efficient in comparison to multiple lookForAt calls.
         *
         * @param {string} type - One of the Structure Game constants
         * @param {number} top - The top Y boundary of the area
         * @param {number} left - The left X boundary of the area
         * @param {number} bottom - The bottom Y boundary of the area
         * @param {number} right - The right X boundary of the area
         *
         * @return {Object} - An object with all the objects in the specified area in the following format:
         *
         *                          // room.lookAtArea(10, 5, 11, 7)
         *
         *                          {
         *                              10: {
         *                                  5: {...},
         *                                  6: undefined,
         *                                  7: undefined
         *                              },
         *                              11: {
         *                                  5: undefined,
         *                                  6: [{ type: 'structure', structure: {...} },
         *                                      { type: 'terrain', terrain: 'swamp' }],
         *                                  7: undefined
         *                              }
         *                          }
         *
         */
        lookForAtArea(type:string, top:number, left:number, bottom:number, right:number):Object;


        /**
         * Create a room snapshot with all objects currently present in the room. Room snapshots are saved
         * in your account so that you can later check out if something happened in the game when you were
         * offline. Not available in the Simulation Room.
         *
         * @param {string} [description] - The description message which will be attached to the snapshot.
         */
        makeSnapshot(description:string);
    }
}