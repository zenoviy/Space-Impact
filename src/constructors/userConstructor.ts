class PlayerShip{
    data: any;
    points: number;
    lifePoints: number
    constructor(
        data: any,
        points: number,
        lifePoints: number,
    ){
        this.data = data;
        this.points = points;
        this.lifePoints = lifePoints;
    }
    showInformation(){
        console.log(this)
    }

}


module.exports.playerModules = {
    PlayerShip: PlayerShip
};