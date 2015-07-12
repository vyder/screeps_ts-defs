/// <reference path="./PathStep.d.ts"/>
/// <reference path="./Positionable.d.ts"/>

declare module Screeps {

    /**
     * An object representing the specified position in the
     * room. Every object in the room contains RoomPosition
     * as the pos property. The position object of a custom
     * location can be obtained using the Room.getPositionAt()
     * method.
     */
    interface RoomPosition {
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
         * The name of the room.
         *
         * @type string
         */
        roomName: string;

        /**
         * Check whether this position is in the given range of another position.
         *
         * @param {RoomPosition} toPos The target position.
         * @param {number} range The range distance.
         * @return {boolean}
         */
        inRangeTo(toPos:RoomPosition, range:number):boolean;

        /**
         * Check whether this position is on the adjacent square to the specified position. The same as inRangeTo(target, 1)
         *
         * @param x {number} X position in the Room
         * @param y {number} Y position in the Room
         * @return {boolean}
         */
        isNearTo(x:number, y:number):boolean;

        /**
         * Check whether this position is on the adjacent square to the specified position. The same as inRangeTo(target, 1)
         *
         * @param {RoomPosition} target RoomPosition to check
         * @return {boolean}
         */
        isNearTo(target:RoomPosition):boolean;

        /**
         * Check whether this position is on the adjacent square to the specified position. The same as inRangeTo(target, 1)
         *
         * @param {Positionable} target Positionable to check
         * @return {boolean}
         */
        isNearTo(target:Positionable):boolean;

        /**
         * Get linear direction to the specified position.
         *
         * @param x {number} X value of the position to get direction for
         * @param y {number} Y value of the position to get direction for
         * @return A number representing one of the direction constants.
         */
        getDirectionTo(x:number, y:number):number;

        /**
         * Get linear direction to the specified position.
         *
         * @param {RoomPosition} target position to get direction for
         * @return A number representing one of the direction constants.
         */
        getDirectionTo(target:RoomPosition):number;

        /**
         * Get linear direction to the specified position.
         *
         * @param {Positionable} target Positionable to get direction for
         * @return A number representing one of the direction constants.
         */
        getDirectionTo(target:Positionable):number;

        /**
         * Find an optimal path to the specified position using A* search algorithm. This method is a shorthand for Room.findPath.
         *
         * @param x {number} X value of the position to find a path to
         * @param y {number} Y value of the position to find a path to
         * @return {Array<PathStep>} A list of PathSteps
         */
        findPathTo(x:number, y:number):Array<PathStep>;

        /**
         * Find an optimal path to the specified position using A* search algorithm. This method is a shorthand for Room.findPath.
         *
         * @param {RoomPosition} target position to find a path to
         * @param {Object} [opts] An object containing pathfinding options flags (see Room.findPath for more details).
         * @return {Array<PathStep>} A list of PathSteps
         */
        findPathTo(target:RoomPosition, opts?:Object):Array<PathStep>;

        /**
         * Find an optimal path to the specified position using A* search algorithm. This method is a shorthand for Room.findPath.
         *
         * @param {Positionable} target position to find a path to
         * @param {Object} [opts] An object containing pathfinding options flags (see Room.findPath for more details).
         * @return {Array<PathStep>} A list of PathSteps
         */
        findPathTo(target:Positionable, opts?:Object):Array<PathStep>;

        /**
         * Find all objects in the specified linear range of the given type.
         *
         * @param {number} type See Room.find.
         * @param {number} range The range distance.
         * @param {Object} [opts] See Room.find.
         * @return {Object[]} An array with the objects found.
         */
        findInRange(type:number, range:number, opts?:Object):Array<Object>;

        /**
         * Find all objects in the specified linear range of the given type.
         *
         * @param {Array<Object>} A list of Objects to search through
         * @param {number} range The range distance.
         * @param {Object} [opts] See Room.find.
         * @return {Object[]} An array with the objects found.
         */
        findInRange(objects:Array<Object>, range:number, opts?:Object):Array<Object>;

        /**
         * Find an object with the shortest path. Uses A* search algorithm and Dijkstra's algorithm.
         *
         * @param {number} type See Room.find.
         * @param {Object} [opts] An object containing pathfinding options (see Room.findPath), or filter
         * @param {Object|Function|String} [opts.filter] Only the objects which pass the filter using the Lodash.filter
         *  method will be used.
         * @param {String} [opts.algorithm] One of the following constants:
         *  - astar is faster when there are relatively few possible targets;
         *  - dijkstra is faster when there are a lot of possible targets or when the closest target is nearby.
         *  The default value is determined automatically using heuristics.
         * @return {Object} Closest Object found
         */
        findClosest(type:number, opts?:Object):Object;

        /**
         * Find an object with the shortest path. Uses A* search algorithm and Dijkstra's algorithm.
         *
         * @param {Array<Object>} List of Objects to look through
         * @param {Object} [opts] An object containing pathfinding options (see Room.findPath), or filter
         * @param {Object|Function|String} [opts.filter] Only the objects which pass the filter using the Lodash.filter
         *  method will be used.
         * @param {String} [opts.algorithm] One of the following constants:
         *  - astar is faster when there are relatively few possible targets;
         *  - dijkstra is faster when there are a lot of possible targets or when the closest target is nearby.
         *  The default value is determined automatically using heuristics.
         * @return {Object} Closest Object found
         */
        findClosest(objects:Array<Object>, opts?:Object):Object;

        /**
         * Check whether this position is the same as the specified position.
         *
         * @param x {number} X value of the position to check equality with
         * @param y {number} Y value of the position to check equality with
         * @return {boolean}
         */
        isEqualTo(x:number, y:number):boolean;

        /**
         * Check whether this position is the same as the specified position.
         *
         * @param {RoomPosition} target position to check equality with
         * @return {boolean}
         */
        isEqualTo(target:RoomPosition):boolean;

        /**
         * Check whether this position is the same as the specified position.
         *
         * @param {Positionable} target position to check equality with
         * @return {boolean}
         */
        isEqualTo(target:Positionable):boolean;
    }
}