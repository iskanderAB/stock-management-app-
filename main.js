const { app, BrowserWindow } = require('electron');
const path = require('path');
const reloader = require('electron-reload');
const isDev = !app.isPackaged;

function createWindow() {
    const win = new BrowserWindow({
        width : 800,
        height : 600,
        backgroundColor : 'white',
        webPreferences :{
            nodeIntegration : false,
            worldSafeExecuteJavaScript : true ,
            contextIsolation : true,
            preload : path.join(__dirname,'preload.js')
        }
    });

    win.loadFile('index.html');
    win.webContents.openDevTools();
}
console.log("hello")


app.whenReady().then(createWindow);

app.on('window-all-closed',()=> {
    if (process.platform === 'win32'){
        app.quit();
    }
})


console.log('iskander AB ');
if (isDev) {
    require('electron-reload')(__dirname,{
        electron: path.join(__dirname,'node_modules','.bin','electron')
    })
}
