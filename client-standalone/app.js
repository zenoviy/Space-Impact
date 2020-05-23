const {app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

const a = "test"

function createWindow(){

    let win = new BrowserWindow({
        titleBarStyle: 'hidden',
        width: 1300,
        height: 800,
        minWidth: 800,
        minHeight: 600,
        backgroundColor: '#312450',
        show: false,
        //frame: false,
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
    win.setFullScreen(true)

    ipcMain.on('asynchronous-message', (event, arg) => {
        win.setFullScreen(arg.fullscreen)
        event.reply('asynchronous-reply', win)
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
