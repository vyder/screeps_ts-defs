///<reference path="ConstructionSite.d.ts"/>
///<reference path="Destructible.d.ts"/>
///<reference path="Energy.d.ts"/>
///<reference path="EnergyStore.d.ts"/>
///<reference path="GameObject.d.ts"/>
///<reference path="Memorizes.d.ts"/>
///<reference path="Ownable.d.ts"/>
///<reference path="Source.d.ts"/>

declare module Screeps {
    interface Creep extends GameObject, EnergyStore, Destructible, Memorizes, Ownable {

        /**
         * An array describing the Creep's body.
         *
         * @type Array of body part elements.
         *
         * Each element contains the following
         * properties:
         * > {string} type - One of the following body part Game constants:
         *                   > MOVE
         *                   > WORK
         *                   > CARRY
         *                   > ATTACK
         *                   > RANGED_ATTACK
         *                   > HEAL
         *                   > TOUGH
         * > {number} hits - The remaining amount of hit points of this body part
         */
        body: Array<{
            type: string;
            hits: number;
        }>;

        /**
         * The movement fatigue indicator. If it is greater than zero, the Creep
         * cannot move.
         *
         * @type number
         */
        fatigue: number;

        /**
         * You can choose the name while creating a new Creep, and it cannot be
         * changed later. This name is a hash key to access the Creep via the
         * Game.creeps object.
         *
         * @type string
         */
        name: string;

        /**
         * Whether this Creep is still being spawned
         *
         * @type boolean
         */
        spawning: boolean;

        /**
         * The remaining amount of game ticks after which the Creep will die
         *
         * @type number
         */
        ticksToLive: number;

        /**
         * Attack another Creep or Structure in a short-ranged attack. Needs the
         * ATTACK body part. If the target is inside a Rampart, then the Rampart
         * is attacked instead. The target has to be at a square adjacent to the
         * Creep.
         *
         * @param {Destructible} target - The target object to be attacked
         *
         * @return {number} - One of the following codes:
         *                    > OK
         *                    > ERR_NOT_OWNER
         *                    > ERR_BUSY
         *                    > ERR_INVALID_TARGET
         *                    > ERR_NOT_IN_RANGE
         *                    > ERR_NO_BODYPART
         */
        attack(target:Destructible):number;

        /**
         * Build a Structure at the target ConstructionSite using carried energy.
         * Needs WORK and CARRY body parts. The target has to be at a square
         * adjacent to the Creep.
         *
         * @param {ConstructionSite} target - The target ConstructionSite to
         *                                    be built
         *
         * @return {number} - One of the following codes:
         *                    > OK
         *                    > ERR_NOT_OWNER
         *                    > ERR_BUSY
         *                    > ERR_NOT_ENOUGH_ENERGY
         *                    > ERR_INVALID_TARGET
         *                    > ERR_NOT_IN_RANGE
         *                    > ERR_NO_BODYPART
         *                    > ERR_RCL_NOT_ENOUGH
         */
        build(target:ConstructionSite):number;

        /**
         * Cancel the order given during the current game tick
         *
         * @param {string} methodName - The name of a Creep's method to be cancelled
         *
         * @return {number} - One of the following codes:
         *                    > OK
         *                    > ERR_NOT_FOUND
         */
        cancelOrder(methodName:string):number;

        /**
         * Claim a neutral Controller. The target has to be at an adjacent square
         * to the Creep
         *
         * @param {Controller} target - The target Controller object
         *
         * @return {number} - One of the following codes:
         *                    > OK
         *                    > ERR_NOT_OWNER
         *                    > ERR_BUSY
         *                    > ERR_INVALID_TARGET
         *                    > ERR_NOT_IN_RANGE
         *                    > ERR_GCL_NOT_ENOUGH
         */
        claimController(target:Controller):number;

        /**
         * Drop a piece of energy on the ground
         *
         * @param {number} [amount] - The amount of energy to be dropped. If omitted,
         *                            all the available carried energy is dropped.
         *
         * @return {number} - One of the following codes:
         *                    > OK
         *                    > ERR_NOT_OWNER
         *                    > ERR_BUSY
         *                    > ERR_NOT_ENOUGH_ENERGY
         */
        dropEnergy(amount:number):number;

        /**
         * Get the quantity of live body parts of the given type. Fully damaged parts
         * do not count
         *
         * @param {string} type - The type of body part, one of the following:
         *                        > MOVE
         *                        > WORK
         *                        > CARRY
         *                        > ATTACK
         *                        > RANGED_ATTACK
         *                        > HEAL
         *                        > TOUGH
         *
         * @return {number} - The number of this type of body part
         */
        getActiveBodyParts(type:string):number;

        /**
         * Harvest energy from the source. Needs the WORK body part. If the Creep has
         * an empty CARRY body part, the harvested energy is put into it; otherwise
         * it is dropped on the ground. The target has to be at a square adjacent to
         * the Creep.
         *
         * @param {Source} target - The Source to be harvested
         *
         * @return {number} - One of the following codes:
         *                    > OK
         *                    > ERR_NOT_OWNER
         *                    > ERR_BUSY
         *                    > ERR_NOT_ENOUGH_ENERGY
         *                    > ERR_INVALID_TARGET
         *                    > ERR_NOT_IN_RANGE
         *                    > ERR_NO_BODYPART
         */
        harvest(target:Source):number;

        /**
         * Heal self or another Creep. It will restore the target Creep’s damaged body
         * parts function and increase the hits counter. Needs the HEAL body part. The
         * target has to be at a square adjacent to the Creep.
         *
         * @param {Creep} - The target Creep to be healed
         *
         * @return {number} - One of the following codes:
         *                    > OK
         *                    > ERR_NOT_OWNER
         *                    > ERR_BUSY
         *                    > ERR_NOT_ENOUGH_ENERGY
         *                    > ERR_INVALID_TARGET
         *                    > ERR_NOT_IN_RANGE
         *                    > ERR_NO_BODYPART
         */
        heal(target:Creep):number;

        /**
         * Move the Creep one square in the specified direction. Needs the MOVE body part.
         *
         * @param {number} direction - One of the Game Direction constants:
         *                             > TOP
         *                             > TOP_RIGHT
         *                             > RIGHT
         *                             > BOTTOM_RIGHT
         *                             > BOTTOM
         *                             > BOTTOM_LEFT
         *                             > LEFT
         *                             > TOP_LEFT
         *
         * @return {number} - One of the following codes:
         *                    > OK
         *                    > ERR_NOT_OWNER
         *                    > ERR_BUSY
         *                    > ERR_TIRED
         *                    > ERR_NO_BODYPART
         */
        move(direction:number):number;

        /**
         * Move the Creep using the specified predefined path. Needs the MOVE body part.
         *
         * @param {Array<PathStep>} path - The path to be followed by the Creep
         *
         * @return {number} - One of the following codes:
         *                    > OK
         *                    > ERR_NOT_OWNER
         *                    > ERR_BUSY
         *                    > ERR_NOT_FOUND
         *                    > ERR_INVALID_ARGS
         *                    > ERR_TIRED
         *                    > ERR_NO_BODYPART
         */
        moveByPath(path:Array<PathStep>):number;

        /**
         * Find the optimal path to the target within the same room and move to it. A shorthand to
         * consequent calls of pos.findPathTo() and move() methods. If the target is in another room,
         * then the corresponding exit will be used as a target. Needs the MOVE body part.
         *
         * @param {number} x - The X position in the Room
         * @param {number} y - The Y position in the Room
         * @param {Object} [opts]
         *
         *        {number} [opts.reusePath] - This option enables reusing the path found along multiple
         *        game ticks. It allows to save CPU time, but can result in a slightly slower Creep
         *        reaction behavior. The path is stored into the Creep's memory to the _move property.
         *        The reusePath value defines the amount of ticks which the path should be reused for.
         *        The default value is 5. Increase the amount to save more CPU, decrease to make the
         *        movement more consistent. Set to 0 if you want to disable path reusing.
         *
         *        {boolean} [opts.noPathFinding] - If this option is set to true, moveTo method will
         *        return ERR_NOT_FOUND if there is no memorized path to reuse. This can significantly
         *        save CPU time in some cases. The default value is false.
         *
         * @return {number} - One of the following codes:
         *                    > OK
         *                    > ERR_NOT_OWNER
         *                    > ERR_BUSY
         *                    > ERR_TIRED
         *                    > ERR_INVALID_TARGET
         *                    > ERR_NO_PATH
         *                    > ERR_NO_BODYPART
         */
        moveTo(x:number, y:number, opts?:Object):number;

        /**
         * Find the optimal path to the target within the same room and move to it. A shorthand to
         * consequent calls of pos.findPathTo() and move() methods. If the target is in another room,
         * then the corresponding exit will be used as a target. Needs the MOVE body part.
         *
         * @param {RoomPosition|Positionable} pos - A RoomPosition object or any Positionable object
         * @param {Object} [opts]
         *
         *        {number} [opts.reusePath] - This option enables reusing the path found along multiple
         *        game ticks. It allows to save CPU time, but can result in a slightly slower Creep
         *        reaction behavior. The path is stored into the Creep's memory to the _move property.
         *        The reusePath value defines the amount of ticks which the path should be reused for.
         *        The default value is 5. Increase the amount to save more CPU, decrease to make the
         *        movement more consistent. Set to 0 if you want to disable path reusing.
         *
         *        {boolean} [opts.noPathFinding] - If this option is set to true, moveTo method will
         *        return ERR_NOT_FOUND if there is no memorized path to reuse. This can significantly
         *        save CPU time in some cases. The default value is false.
         *
         * @return {number} - One of the following codes:
         *                    > OK
         *                    > ERR_NOT_OWNER
         *                    > ERR_BUSY
         *                    > ERR_TIRED
         *                    > ERR_INVALID_TARGET
         *                    > ERR_NO_PATH
         *                    > ERR_NO_BODYPART
         */
        moveTo(target:RoomPosition, opts?:Object):number;
        moveTo(target:Positionable, opts?:Object):number;

        /**
         * Pick up an item (a dropped piece of energy). Needs the CARRY body part. The target has
         * to be at a square adjacent to dropped item.
         *
         * @param {Energy} target - The target piece of Energy to be picked up
         *
         * @return {number} - One of the following codes:
         *                    > OK
         *                    > ERR_NOT_OWNER
         *                    > ERR_BUSY
         *                    > ERR_INVALID_TARGET
         *                    > ERR_FULL
         *                    > ERR_NOT_IN_RANGE
         */
        pickup(target:Energy):number;

        /**
         * A ranged attack against another Creep or Structure. Needs the RANGED_ATTACK body part.
         * If the target is inside a Rampart, the Rampart is attacked instead. The target has to
         * be within 3 squares range of the Creep.
         *
         * @param {Destructible} target - The target Destructible object to be attacked
         *
         * @return {number} - One of the following codes:
         *                    > OK
         *                    > ERR_NOT_OWNER
         *                    > ERR_BUSY
         *                    > ERR_INVALID_TARGET
         *                    > ERR_NOT_IN_RANGE
         *                    > ERR_NO_BODYPART
         */
        rangedAttack(target:Destructible):number;

        /**
         * Heal another Creep at a distance. It will restore the target Creep’s damaged body parts
         * function and increase the hits counter. Needs the HEAL body part. The target has to be
         * within 3 squares range of the Creep.
         *
         * @param {Creep} target - The target Creep to be healed
         *
         * @return {number} - One of the following codes:
         *                    > OK
         *                    > ERR_NOT_OWNER
         *                    > ERR_BUSY
         *                    > ERR_INVALID_TARGET
         *                    > ERR_NOT_IN_RANGE
         *                    > ERR_NO_BODYPART
         */
        rangedHeal(target:Creep):number;

        /**
         * A ranged attack against all hostile Creeps or Structures within 3 squares range. Needs
         * the RANGED_ATTACK body part. The attack power depends on the range to each target.
         * Friendly units are not affected.
         *
         * @return {number} - One of the following codes:
         *                    > OK
         *                    > ERR_NOT_OWNER
         *                    > ERR_BUSY
         *                    > ERR_NO_BODYPART
         */
        rangedMassAttack():number;

        /**
         * Repair a damaged Structure using carried energy. Needs the WORK and CARRY body parts.
         * The target has to be at a square adjacent to the Creep or at the same square.
         *
         * @param {Structure} target - The target Structure to be repaired
         *
         * @return {number} - One of the following codes:
         *                    > OK
         *                    > ERR_NOT_OWNER
         *                    > ERR_BUSY
         *                    > ERR_NOT_ENOUGH_ENERGY
         *                    > ERR_INVALID_TARGET
         *                    > ERR_NOT_IN_RANGE
         *                    > ERR_NO_BODYPART
         */
        repair(target:Structure):number;

        /**
         * Display a visual speech balloon above the Creep with the specified message. The
         * message will disappear after a few seconds. Useful for debugging purposes. Only
         * the Creep's Owner can see the speech message.
         *
         * @param {string} message - The message to be displayed. Maximum length is 10 characters
         *
         * @return {number} - One of the following codes:
         *                    > OK
         *                    > ERR_NOT_OWNER
         *                    > ERR_BUSY
         */
        say(message:string):number;

        /**
         * Kill the creep immediately.
         *
         * @return {number} - One of the following codes:
         *                    > OK
         *                    > ERR_NOT_OWNER
         *                    > ERR_BUSY
         */
        suicide():number;

        /**
         * Make your claimed Controller neutral again. The target has to be at a square adjacent
         * to the Creep.
         *
         * @param {Controller} target - The target Controller to be upgraded
         *
         * @return {number} - One of the following codes:
         *                    > OK
         *                    > ERR_NOT_OWNER
         *                    > ERR_BUSY
         *                    > ERR_INVALID_TARGET
         *                    > ERR_NOT_IN_RANGE
         */
        unclaimController(target:Controller):number;

        /**
         * Upgrade your Controller to the next level using carried energy. Upgrading Controllers
         * raises your Global Control Level in parallel. Needs WORK and CARRY body parts. The
         * target has to be at a square adjacent to the Creep.
         *
         * @param {Controller} target - The target Controller to be upgraded
         *
         * @return {number} - One of the following codes:
         *                    > OK
         *                    > ERR_NOT_OWNER
         *                    > ERR_BUSY
         *                    > ERR_NOT_ENOUGH_ENERGY
         *                    > ERR_INVALID_TARGET
         *                    > ERR_NOT_IN_RANGE
         *                    > ERR_NO_BODYPART
         */
        upgradeController(target:Controller):number;
    }
}