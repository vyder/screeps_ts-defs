# Screeps TypeScript Definitions

I created this library intending to port [@Garethp](https://github.com/Garethp)'s [ScreepsAutocomplete](https://github.com/Garethp/ScreepsAutocomplete)
library over to TypeScript. However, I ended up creating my own abstractions as
and when it made sense.

I haven't tested this library properly yet, or setup my Screeps scripts in
TypeScript. It's a TODO that I'll get to eventually.

## Documentation version: 9th July, 2015

## Usage:

1. Download this repo and add it to as an External Library to your project. (I use WebStorm as my IDE).
2. Include the following line at the top of your `main.ts`:

```
/// <reference path="Screeps/Game.d.ts"/>
```

## TODO:
1. Set up an example Grunt project that uses this library
2. Create some file structure
3. Figure out how to add tests