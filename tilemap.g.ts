// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100003040904040904040904040904040901060d0d0d0d0d0d0d0d0d0d0d0d0d0d0a0c0d0d0d0d0d0d0d0d0d0d0d0d0d0d05060d0d0d0e0f0d0d0d0d0d0e0f0d0d05060d0d0d10110d0d0d0d0d10110d0d0a0c0d0d0d0d0d0d0d0d0d0d0d0d0d0d05060d0d0d0d0d0d0d0d0d0d0d0d0d0d05060d0d0d0d0d0d0d0d0d0d0d0d0d0d0a060d0d0d0d0d0d0d0d0d0d0d0d0d0d05060d0d0d0d0d0d0d0d0d0d0d0d0d0d05060d0d0d0d0d0d0d0d0d0d0d0d0d0d0a0c0d0d0d0e0f0d0d0d0d0d0e0f0d0d05060d0d0d10110d0d0d0d0d10110d0d05060d0d0d0d0d0d0d0d0d0d0d0d0d0d0a0c0d0d0d0d0d0d0d0d0d0d0d0d0d0d05020b07070b07070b07070b07070b0708`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . 2 2 . . . . . 2 2 . . 2 
2 . . . 2 2 . . . . . 2 2 . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . 2 2 . . . . . 2 2 . . 2 
2 . . . 2 2 . . . . . 2 2 . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterWest2,sprites.dungeon.floorLight0,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
