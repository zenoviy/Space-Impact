const { shell, remote } = require( "electron" );

function testClick(link){
    shell.openExternal(link)
}