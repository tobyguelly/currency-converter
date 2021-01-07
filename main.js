const { app, BrowserWindow } = require('electron');

function createWindow () {
    const win = new BrowserWindow({
        width: 700,
        height: 600,
        center: true,
        minWidth: 600,
        minHeight: 500,
        maxWidth: 700,
        maxHeight: 600,
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