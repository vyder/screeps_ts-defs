///<reference path="EnergyStore.d.ts"/>
///<reference path="Structure.d.ts"/>

declare module Screeps {
    interface Extension extends Structure, EnergyStore {}
}