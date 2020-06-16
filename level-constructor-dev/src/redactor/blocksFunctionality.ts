async function elevatorMove(){
    if(!this.details) return false

    if(this.details.type === 'elevator'){
        let currentValue = this.details.constructorValueOfMove;
        let defaultValue = this.details.valueOfMove;

        //console.log(currentValue)
        if(this.details.constructorDirection){
            if(this.details.moveDirection === "vertical") this.yMove += this.details.speed;
            if(this.details.moveDirection === "horizontal") this.xMove += this.details.speed;
            this.details.constructorValueOfMove -= this.details.speed;

            if(currentValue <= 0) this.details.constructorDirection = false
        }else if(!this.details.constructorDirection){

            //this.yMove -= this.details.speed;
            if(this.details.moveDirection === "vertical") this.yMove -= this.details.speed;
            if(this.details.moveDirection === "horizontal") this.xMove -= this.details.speed;
            this.details.constructorValueOfMove += this.details.speed;


            if(currentValue >= defaultValue){
                this.details.constructorDirection = true;
               // console.log(this, currentValue, defaultValue, "<<<<")
                
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

function blockAnimations(state = true){
    this.detectFrame += 1;
    if(this.detectFrame % this.animationSteps == 0 && state){
        // console.log(this)
        this.detectFrame = 0;
        this.sx += this.sWidth;
        if(Math.round(this.sx) >= this.picturesWidth){
            this.sx = 0;
        }
    }else if(this.backgroundTexture){
        if(this.detectFrame % this.backgroundTexture.animationSteps == 0 && state){
           // console.log(this)
           this.detectFrame = 0;
           this.backgroundTexture.sx += this.backgroundTexture.sWidth ;
           if(Math.round(this.backgroundTexture.sx) >= this.backgroundTexture.picturesWidth){
               this.backgroundTexture.sx = 0;
           }
        } 
    }else if(this.details){
        if(this.detectFrame % this.details.animationSteps == 0 && state){
         //  console.log(this)
           this.detectFrame = 0;
           this.details.sx += this.details.sWidth ;
           if(Math.round(this.details.sx) >= this.details.picturesWidth){
               this.details.sx = 0;
           }
        }
   }
}



function stairsMove(){

}
export {
    elevatorMove,
    stairsMove,
    blockAnimations
}