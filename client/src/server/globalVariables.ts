function initAppGlobalVariable(){
    process.env.MAX_NUMBER_OF_EXPLOSION = '20';
    process.env.MAX_NUMBER_OF_BULLETS = '150';

    process.env.SAVE_DATA_FILE = 'game-saves';

    process.env.LEVEL_DATA_URL = 'api/level-data';
    process.env.LEVEL_OBJECT_URL = 'api/level-objects';
    process.env.LEVEL_GRAPPLE_OBJECTS_URL = 'api/grapple-objects';
    process.env.GAME_SETTINGS_URL = 'api/game-settings';
    process.env.USER_SHIP_URL = 'api/user-ship';
    process.env.ENEMY_SHIP_URL = 'api/enemy-ship';

    process.env.DYNAMIC_LEVEL_BLOCKS = 'level-creator/complete-maps';
    process.env.GROUND_CHARACTERS_URL = 'api/get-ground-characters';
    process.env.DYNAMIC_LEVEL_ENEMY_COLLECTION_URL = 'api/get-constructor-ground-enemy';
    process.env.GROUND_CHARACTERS_INVENTORY = 'false';
    process.env.GROUND_ACTIVE_BLOCK_IN_RANGE = 'false';
    process.env.GROUND_NPC_DIALOG_ACTIVE = 'false';


    process.env.SHOP_GUNS_URL = 'api/shop/guns';
    process.env.SHOP_SHIPYARD_URL = 'api/shop/shipyard';
    process.env.SHOP_STORE_ITEMS = "api/shop/store-items";

    process.env.APP_SAVE_DIRECTORY = '/appData/saves';
    process.env.APP_SCREENSHOTS_DIRECTORY = '/appData/saves/screenshots';


    process.env.MAIN_GAME_SOUND = '';
    process.env.MAIN_GAME_SOUND_EFFECTS = '';
    process.env.MAIN_GAME_SOUND_ON = '';

    process.env.SHOP_ACTIVE_WINDOW = 'false';
    process.env.SHOP_SHIPYARD_ACTIVE_WINDOW = 'false';
    process.env.SHOP_SALE_WINDOW = 'false';
    process.env.SHOP_STORE_WINDOW = 'false';

    process.env.BOSS_LOAD_AT_LEVEL = 'false';
    process.env.SUB_LOAD_AT_LEVEL = 'false';

    process.env.OVERWRITE_SAVE = 'false';

    if(process.env.NODE_ENV === 'development') process.env.HOST = 'http://localhost:3300/';
    else if(process.env.NODE_ENV === 'production'){ process.env.HOST = 'http://localhost:3300/'; console.log("production mode check HOST")};
}


export {
    initAppGlobalVariable
}