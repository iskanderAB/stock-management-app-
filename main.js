const { app, BrowserWindow ,ipcMain ,Notification } = require('electron');
const path = require('path');
const reloader = require('electron-reload');
const isDev = !app.isPackaged;
const controller = require('./controllers/mainController');

function createSplashScreen() {
    const win = new BrowserWindow({
        width: 200, // 400
        height: 200, // 60
        x: 'center',
        y: 'center',
        transparent: true,
        frame: false,
    });

    win.loadFile('splash.html');
    return win;
}

function createWindow() {
    const win = new BrowserWindow({
        width : 800,
        height : 600,
        backgroundColor : 'white',
        show: false,
        webPreferences :{
            nodeIntegration : true,
            worldSafeExecuteJavaScript : true ,
            contextIsolation : false,
            preload : path.join(__dirname,'preload.js')
        }
    });

    win.loadFile('index.html');
    return win;
    //win.webContents.openDevTools();
}


// desktop application
app.whenReady().then(() => {
    const mainApp = createWindow();
    const splash = createSplashScreen();

    mainApp.once('ready-to-show',() => {
        splash.destroy();
        mainApp.show();
        setTimeout(()=> {
            splash.destroy();
            mainApp.show();
        },1000);
    })
})

app.on('window-all-closed',()=> {
    if (process.platform === 'win32'){
        app.quit();
    }
})

ipcMain.on('notify',(_,message)=> {
    new Notification({
        title: 'stockApp',
        body: message
    }).show();
})

if (isDev) {
    require('electron-reload')(__dirname, {
        // Note that the path to electron may vary according to the main file
        electron: require(`${__dirname}/node_modules/electron`)
    });
    console.log('reloading ... ');
}




// data base configuration
controller.init();


