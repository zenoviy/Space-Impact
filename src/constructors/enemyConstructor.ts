class EnemyObject {
    shipPresent: boolean = true;
    x;
    y;
    constructor(
        x: number,
        y: number,
        shipTexture: string
        ){
            this.x = x;
            this.y = y;
    }
}


module.exports.objectConstructor = {
    EnemyObject: EnemyObject,
};