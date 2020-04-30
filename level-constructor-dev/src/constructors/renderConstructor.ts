import { initView, clearView, renderItemsToSideList } from '../ui/view';

class MainGameConstructor {
    mapMoveSpeed: number;
    mapWidth: number;
    mapHeight: number;
    allRedactorBlock: any[];
    allRedactorDecorationBlock: any[];
    blockDatabase: any[];
    charactersDatabase: any[];
    enemyDatabase: any[];
    selectedBlockPanelItem: any;


    initView: any;
    clearView: any;
    renderItemsToSideList: any;
    constructor({...data}){
        this.mapMoveSpeed = data.mapMoveSpeed;
        this.mapWidth = data.mapWidth;
        this.mapHeight = data.mapHeight;
        this.allRedactorBlock = data.allRedactorBlock;
        this.blockDatabase = (data.blockDatabase)? data.blockDatabase : null;
        this.charactersDatabase = (data.charactersDatabase)? data.charactersDatabase : null;
    }
}

MainGameConstructor.prototype.initView = initView;
MainGameConstructor.prototype.clearView = clearView;
MainGameConstructor.prototype.renderItemsToSideList = renderItemsToSideList;
export {
    MainGameConstructor
}