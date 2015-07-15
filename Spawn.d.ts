///<reference path="EnergyStore.d.ts"/>
///<reference path="Memorizes.d.ts"/>
///<reference path="Structure.d.ts"/>

declare module Screeps {

    /**
     * Spawns are your colony centers. You can transfer energy into it
     * and create new Creeps using the createCreep() method
     */
    interface Spawn extends Structure, EnergyStore, Destructible, Memorizes {

        /**
         * Spawn's name. You choose the name upon creating a new Spawn, and
         * it cannot be changed later. This name is a hash key to access the
         * Spawn via the Game.spawns object
         *
         * @type string
         */
        name: string;

        /**
         * If the Spawn is in the process of spawning a new Creep, this object will
         * contain the new Creep's information, otherwise it will be null
         *
         * @type Object
         *      {string} name - The name of the new Creep
         *      {number} needTime - Time needed in total to complete the spawning
         *      {number} remainingTime - Remaining time to go
         */
        spawning: {
            name: string;
            needTime: number;
            remainingTime: number;
        };

        /**
         * Check if a Creep can be created
         *
         * @param {Array<string>} body - An array describing the new Creep's body.
         *                               Should contain 1 to 30 elements with one
         *                               of these Game constants:
         *                               > WORK
         *                               > MOVE
         *                               > CARRY
         *                               > ATTACK
         *                               > RANGED_ATTACK
         *                               > HEAL
         *                               > TOUGH
         * @param {string} [name] - The name of the new Creep. It should be a unique
         *                          Creep name, i.e. the Game.creeps object should not
         *                          contain another Creep with the same name (hash key).
         *                          If not defined, a random name will be generated.
         *
         * @return {number} - One of the following codes:
         *                    > OK
         *                    > ERR_NOT_OWNER
         *                    > ERR_NAME_EXISTS
         *                    > ERR_BUSY
         *                    > ERR_NOT_ENOUGH_ENERGY
         *                    > ERR_INVALID_ARGS
         */
        canCreateCreep(body:Array<string>, name?:string):number;

        /**
         * Start the Creep spawning process
         *
         * @param {Array<string>} body - An array describing the new Creep's body.
         *                               Should contain 1 to 30 elements with one
         *                               of these Game constants:
         *                               > WORK
         *                               > MOVE
         *                               > CARRY
         *                               > ATTACK
         *                               > RANGED_ATTACK
         *                               > HEAL
         *                               > TOUGH
         * @param {string} [name] - The name of the new Creep. It should be a unique
         *                          Creep name, i.e. the Game.creeps object should not
         *                          contain another Creep with the same name (hash key).
         *                          If not defined, a random name will be generated.
         * @param {any} [memory] - The memory of the new Creep. If provided, it will
         *                         immediately be stored into Memory.creeps[name]
         *
         * @return {any} - The name of the Creep created as a string or one of the
         *                 following codes:
         *                 > OK
         *                 > ERR_NOT_OWNER
         *                 > ERR_NAME_EXISTS
         *                 > ERR_BUSY
         *                 > ERR_NOT_ENOUGH_ENERGY
         *                 > ERR_INVALID_ARGS
         */
        createCreep(body:Array<string>, name?:string, memory?:any):number;
    }
}