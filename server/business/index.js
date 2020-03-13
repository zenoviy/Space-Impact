const { levelData } = require('./level Data/level-data');
const { getUserShip } = require('./ship Data/user-ship');
const { getEnemyShip } = require('./ship Data/enemy-ship')
const { getGameData } = require('./game Data/game-data');
const { getLevelObjects } = require('./level Data/level-objects');


module.exports = {
    getLevelData : levelData,
    getUserShip : getUserShip,
    getEnemyShip : getEnemyShip,
    getGameData : getGameData,
    getLevelObjects : getLevelObjects
}