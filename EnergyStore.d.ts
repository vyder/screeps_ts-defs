declare module Screeps {

    /**
     * An interface to define objects that can
     * contain energy in them
     */
    interface EnergyStore {

        /**
         * The amount of energy contained in this object
         *
         * @type number
         */
        energy: number;

        /**
         * The total amount of energy this object can contain
         *
         * @type number
         */
        energyCapacity: number;

        /**
         * Transfer the energy from this EnergyStore to another EnergyStore
         *
         * @param {EnergyStore} target - The EnergyStore to whom the energy will be
         *                               transferred
         * @param {number} [amount] - The amount of energy to be transferred. If
         *                            omitted, all the remaining amount of energy
         *                            will be used.
         *
         * @return {number} - One of the following codes:
         *                    > OK
         *                      => The operation has been scheduled successfully
         *
         *                    > ERR_NOT_OWNER
         *                      => You are not the owner of this EnergyStore
         *
         *                    > ERR_NOT_ENOUGH_ENERGY
         *                      => The EnergyStore contains less energy than the
         *                         given amount to transfer
         *
         *                    > ERR_INVALID_TARGET
         *                      => The specified target object cannot store energy
         *
         *                    > ERR_FULL
         *                      => The target can not carry the given amount
         *                         of energy
         *
         *                    > ERR_NOT_IN_RANGE
         *                      => The target is too far away
         *
         *                    > ERR_INVALID_ARGS
         *                      => The energy amount is incorrect
         *
         *                    > ERR_TIRED (only for Link Structures)
         *                      => The Link is still cooling down
         */
        transferEnergy(target:EnergyStore, amount?:number):number;
    }
}