const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

// init win
let win;

function createWindow(){
  // create browser window
  win = new BrowserWindow({width:800, height:600, icon:__dirname+'/img/sysinfo.png'});

  // load index.html
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  // open devtools
  // win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  });
}

// Run create window function
app.on('ready', createWindow);


app.on('window-all-closed', () => {
  // Quit when all windows are closed
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if(process.platform !== 'darwin') {
    app.quit();
  }
});

app.on("activate", function() {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});
