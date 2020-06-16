import { initView, clearView, renderItemsToSideList } from '../ui/view';

class MainGameConstructor {
    mapMoveSpeed: number;
    mapWidth: number;
    mapHeight: number;
    mapDefaultWidth: number;
    mapDefaultHeight: number;
    allRedactorBlock: any[];
    backgroundDatabase: any[];
    allRedactorDecorationBlock: any[];
    blockDatabase: any[];
    charactersDatabase: any[];
    enemyDatabase: any[];
    selectedBlockPanelItem: any;
    blockSize: number;
    maxHorizontalBlocks: number;
    maxVerticalBlocks: number;
    activeDescriptionFields: boolean;
    miniMapActive: boolean;

    initView: any;
    clearView: any;
    renderItemsToSideList: any;
    constructor({...data}){
        this.mapMoveSpeed = data.mapMoveSpeed;
        this.mapWidth = data.mapWidth;
        this.mapHeight = data.mapHeight;
        this.mapDefaultWidth = data.mapWidth;
        this.mapDefaultHeight = data.mapHeight;
        this.allRedactorBlock = data.allRedactorBlock;
        this.backgroundDatabase = data.backgroundDatabase;
        this.blockDatabase = (data.blockDatabase)? data.blockDatabase : null;
        this.charactersDatabase = (data.charactersDatabase)? data.charactersDatabase : null;
        this.enemyDatabase = (data.enemyDatabase)? data.enemyDatabase : null;
        this.blockSize = data.blockSize;
        this.maxHorizontalBlocks = data.maxHorizontalBlocks;
        this.maxVerticalBlocks = data.maxVerticalBlocks;
        this.activeDescriptionFields = false;
        this.miniMapActive = false;
    }
}

MainGameConstructor.prototype.initView = initView;
MainGameConstructor.prototype.clearView = clearView;
MainGameConstructor.prototype.renderItemsToSideList = renderItemsToSideList;
export {
    MainGameConstructor
}