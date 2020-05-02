function elevatorMove(){
    if(!this.details) return false
    if(this.details.type === 'elevator'){
        let currentValue = this.details.constructorValueOfMove;
        let defaultValue = this.details.valueOfMove;

        //console.log(currentValue)
        if(this.details.constructorDirection){
            this.yMove += this.details.speed;
            this.details.constructorValueOfMove -= this.details.speed;

            if(currentValue <= 0) this.details.constructorDirection = false
        }else if(!this.details.constructorDirection){

            this.yMove -= this.details.speed;
            this.details.constructorValueOfMove += this.details.speed;

            if(currentValue >= defaultValue){
                this.details.constructorDirection = true;
            }
        }
    }
}
/*

"currentValueOfMove": 100,
        "constructorValueOfMove": 100,
        "currentDirection": true,
        "constructorDirection": true,
 "id": "elevator_1",
        "texture": "/level-creator/assets/charactersObjects/elevator.png",
        "description": "Elevator",
        "speed": 5,
        "moveDirection": "vertical",
        "valueOfMove": 100,
        "currentValueOfMove": 100,
        "currentDirection": true,
        "type": "elevator",
        "collision": true
*/
export {
    elevatorMove
}