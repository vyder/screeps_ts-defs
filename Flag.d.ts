///<reference path="GameObject.d.ts"/>
///<reference path="Positionable.d.ts"/>

declare module Screeps {

    /**
     * A Flag can be used to mark particular spots in a Room.
     * Flags are visible to their Owners only.
     */
    interface Flag extends GameObject, Positionable {

        /**
         * Flag color. One of the Game Color constants:
         *    - COLOR_WHITE
         *    - COLOR_GREY
         *    - COLOR_RED
         *    - COLOR_PURPLE
         *    - COLOR_BLUE
         *    - COLOR_CYAN
         *    - COLOR_GREEN
         *    - COLOR_YELLOW
         *    - COLOR_ORANGE
         *    - COLOR_BROWN
         *
         * @type string
         */
        color: string;

        /**
         * A shorthand to Memory.flags[flag.name]. You can
         * use it for quick access to the flag's specific
         * memory data object.
         *
         * @type any
         */
        memory: any;

        /**
         * You can choose the Flag's name while creating a new Flag,
         * and it cannot be changed later. The name is a hash key to
         * access the Flag via the Game.flags object.
         *
         * @type string
         */
        name: string;

        /**
         * Remove the Flag
         */
        remove();

        /**
         * Set new Color of the Flag
         *
         * @param {string} color - The new Color to set the Flag to
         */
        setColor(color:string);

        /**
         * Set new position of the flag
         *
         * @param {number} x - The X position in the Room
         * @param {number} y - The Y position in the Room
         */
        setPosition(x:number, y:number);

        /**
         * Set new position of the flag
         *
         * @param {RoomPosition|Positionable} pos - A RoomPosition object or any Positionable object
         */
        setPosition(pos:RoomPosition);
        setPosition(pos:Positionable);
    }
}