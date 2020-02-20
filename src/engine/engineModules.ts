const {objectConstructor} = require('../constructors/enemyConstructor');
const {createField} = require('../view/dsiplayModules');

const enemy = new objectConstructor.EnemyObject(34, 45, 'Ene_text')
console.log(enemy)

function doSmths(data: string){
    return data
}
module.exports.gameRuning = function engineRuning(el){
    console.log(el)
   // createField()
}
module.exports.stopEngine = function(engineName){
    clearInterval(engineName);
    console.log('interval has stopping');
}

module.exports.engineModule = {
    doSmths: doSmths
};