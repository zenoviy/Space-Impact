class EnemyObject {
    shipPresent: boolean = true;
    constructor(
        private pos_X: number,
        private pos_Y: number,
        private shipTexture: string
        ){
    }
    move(shiftX: number, shiftY: number){
        this.pos_X += shiftX;
        this.pos_X += shiftY;
    }
    shoot(){

    }
}


module.exports.objectConstructor = {
    EnemyObject: EnemyObject,
};