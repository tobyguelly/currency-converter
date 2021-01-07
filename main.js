const { app, BrowserWindow } = require('electron');

function createWindow () {
    const win = new BrowserWindow({
        width: 900,
        height: 800,
        center: true,
        minWidth: 800,
        minHeight: 700,
        maxWidth: 900,
        maxHeight: 800,
        webPreferences: {
            nodeIntegration: true
        },
        icon: 'assets/icon.png'
    })
    win.setMenuBarVisibility(false);
    win.loadFile('web/index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
})