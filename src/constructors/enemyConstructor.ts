class EnemyObject {
    shipPresent: boolean = true;
    x: number; y: number;
    sx: number; sy: number;
    sWidth: number; sHeight: number;
    singleFrame: number;
    shipwidth: number; shipHeight: number;
    shipTexture: string;
   shipDirectory: string;
    constructor(
        x: number, y: number,
        sx: number, sy: number,
        sWidth: number, sHeight: number,
        singleFrame: number,
        shipwidth: number, shipHeight: number,
        shipTexture: string
        ){
            this.x = x; this.y = y;
            this.sx = sx; this.sy = sy;
            this.sWidth = sWidth; this.sHeight = sHeight;
            this.singleFrame = singleFrame;
            this.shipwidth = shipwidth; this.shipHeight = shipHeight;
            this.shipTexture = shipTexture;
            this.shipDirectory = ''
    }
}

module.exports.objectConstructor = {
    EnemyObject: EnemyObject,
};