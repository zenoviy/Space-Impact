import '../sass/main.sass';

const {engineModule} = require('./engine/enguneModules');
const {serverModule} = require('./server/serverRequestModules');
const {display} = require('./enemies/enemiesModules');

let resulet = serverModule() + engineModule(' Hello');
display(resulet)
console.log(resulet)