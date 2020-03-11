const {app, BrowserWindow} = require('electron');
const path = require('path');


console.log(__dirname)
function createWindow(){
    let win = new BrowserWindow({
        titleBarStyle: 'hidden',
        width: 1300,
        height: 800,
        minWidth: 800,
        minHeight: 600,
        backgroundColor: '#312450',
        show: false,
        webPreferences: {
            nodeIntegration: true
        },
        icon: path.join(__dirname, 'public/icons/png/64x64.png')
    })
    win.loadURL(`file://${__dirname}/index.html`);
    win.webContents.openDevTools()

    win.on('closed', function () {
        win = null
    })

    win.once('ready-to-show', () => {
        win.show()
    })
}

app.on('ready', createWindow)


app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow()
    }
})