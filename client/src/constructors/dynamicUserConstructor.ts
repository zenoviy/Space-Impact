import { placeEnemyes, takeDamage } from '../enemies/enemiesModules';
import { loadTexture } from '../engine/gameSideObjectsModule';
import { enemyAnimation } from '../enemies/enemiesModules';
import { changeAnimationParameters,
    changeVerticalAnimationPicture, groundPlayerCollectable } from '../engine/dynamicLevels/playerUnitModule';
import { bulletSpeed } from '../engine/bulletsModule';
import { getObjectPosition } from '../engine/engineModules';
import { stairsMove } from '../engine/dynamicLevels/dynamicLevelModule';
import { detectObjectsAsMap } from '../engine/dynamicLevels/minimap';


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
    mapFinder: any[];
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
    onStairs: boolean;
    onElevator: boolean;
    onElevatorSpeed: number;
    onLeader: boolean;
    xPos: number;
    data: any;
    isShot: boolean;
    defaultAngle: number;
    shotAngle: number;
    xAdj: number;
    shotState: boolean;
    objectOwner: string;
    objectPresent: boolean;
    healthPoint: number;
    defaultHealth: number;
    currentWallBlock: any;
    currentGroundBlock: any;
    type: string;

    placeEnemyes: any;
    loadTexture: any;
    enemyAnimation: any;
    changeAnimationParameters: any;
    changeVerticalAnimationPicture: any;
    bulletSpeed: any;
    takeDamage: any;
    getObjectPosition: any;
    stairsMove: any;
    detectObjectsAsMap: any;
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
        this.playerDirectionVertical = "down";
        this.isRun = false;
        this.onElevator = false;
        this.onStairs = false;
        this.animations = data.animations;
        this.animationSteps = data.animationSteps;
        this.numberOfVerticalItems = data.numberOfVerticalItems;
        this.numberOfItems = data.numberOfItems;
        this.detectFrame = 0;
        this.xPos = 0;
        this.data = data.data;
        this.isShot = true;
        this.shotAngle = 360;
        this.xAdj = 0;
        this.shotState = false;
        this.objectOwner = "groundPlayer";
        this.objectPresent = true;
        this.healthPoint = data.healthPoint;
        this.defaultHealth = data.healthPoint;
        this.currentWallBlock = null;
        this.currentGroundBlock = null;
        this.onLeader = false;
        this.type = "ground-object";
        this.mapFinder = [];
    }
}


DynamicUserConstructor.prototype.placeEnemyes = placeEnemyes;
DynamicUserConstructor.prototype.loadTexture = loadTexture;
DynamicUserConstructor.prototype.enemyAnimation = enemyAnimation;
DynamicUserConstructor.prototype.changeAnimationParameters = changeAnimationParameters;
DynamicUserConstructor.prototype.changeVerticalAnimationPicture = changeVerticalAnimationPicture;
DynamicUserConstructor.prototype.bulletSpeed = bulletSpeed;
DynamicUserConstructor.prototype.takeDamage = takeDamage;
DynamicUserConstructor.prototype.getObjectPosition = getObjectPosition;
DynamicUserConstructor.prototype.stairsMove = stairsMove;
DynamicUserConstructor.prototype.detectObjectsAsMap = detectObjectsAsMap;

export {
    DynamicUserConstructor
}