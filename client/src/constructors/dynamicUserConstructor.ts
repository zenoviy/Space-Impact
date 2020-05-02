import { placeEnemyes } from '../enemies/enemiesModules';
import { loadTexture } from '../engine/gameSideObjectsModule';
import { enemyAnimation } from '../enemies/enemiesModules';
import { changeAnimationParameters,
    changeVerticalAnimationPicture } from '../engine/dynamicLevels/playerUnitModule';

class DynamicUserConstructor {
    x: number; y: number;
    width: number; height: number;
    imageWidth: number;
    imageHeight: number;
    img: any;
    sx: number; sy: number;
    sWidth: number; sHeight: number;
    speed: number;
    groundTouch: boolean;
    leftWallTouch: boolean;
    rightWallTouch: boolean;
    ceilingTouch: boolean;
    texture: string;
    numberOfJump: number;
    inventory: any[];
    guns: any[];
    playerDirectionHorizontal: string;
    playerDirectionVertical: string;
    picturesWidth: number;
    animationSteps: number;
    animations: any;
    numberOfVerticalItems: number;
    numberOfItems: number;
    detectFrame: number;
    isRun: boolean;

    placeEnemyes: any;
    loadTexture: any;
    enemyAnimation: any;
    changeAnimationParameters: any;
    changeVerticalAnimationPicture: any;
    ///  enemyAnimation
    constructor({...data}){
        this.x = (data.x)? data.x: window.innerWidth/2 - data.width/2;
        this.y = (data.y)? data.y: window.innerHeight/2 - data.height/2;
        this.width = data.width;
        this.height = data.height;
        this.imageWidth = data.imageWidth;
        this.imageHeight = data.imageHeight
        this.texture = __dirname + data.texture;
        this.img = new Image();
        this.img.src = __dirname + data.texture;
        this.sx = 0; this.sy = 0;
        this.picturesWidth = data.imageWidth;
        this.sWidth = data.imageWidth/data.numberOfItems;
        this.sHeight = data.imageHeight/data.numberOfVerticalItems;
        this.speed = data.speed;
        this.groundTouch = false;
        this.leftWallTouch = false;
        this.rightWallTouch = false;
        this.ceilingTouch = false;
        this.numberOfJump = 2;
        this.inventory = [];
        this.playerDirectionHorizontal = "right";
        this.playerDirectionVertical = null;
        this.isRun = false;
        this.animations = data.animations;
        this.animationSteps = data.animationSteps;
        this.numberOfVerticalItems = data.numberOfVerticalItems;
        this.numberOfItems = data.numberOfItems;
        this.detectFrame = 0;
    }
}

/*"animationSteps": 10,
        "numberOfItems": 2,
        "numberOfVerticalItems": 2,*/

DynamicUserConstructor.prototype.placeEnemyes = placeEnemyes;
DynamicUserConstructor.prototype.loadTexture = loadTexture;
DynamicUserConstructor.prototype.enemyAnimation = enemyAnimation;
DynamicUserConstructor.prototype.changeAnimationParameters = changeAnimationParameters;
DynamicUserConstructor.prototype.changeVerticalAnimationPicture = changeVerticalAnimationPicture;
export {
    DynamicUserConstructor
}