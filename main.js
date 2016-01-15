'use strict';

const electron = require('electron');
const app = electron.app;  // Module to control application life.
const BrowserWindow = electron.BrowserWindow;  // Module to create native browser window.

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null;

// Only open if the screensaver should be shown (/s param)
// We don't implement /c (configure) and /p (preview) for now... 
var shouldStart = false;
for (var i = 0; i < process.argv.length; i++) {
    if (process.argv[i].trim() == "/s") {
        shouldStart = true;
        break;
    }
}

if (!shouldStart) {
    app.quit();
}

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600, fullscreen: true });

  // and load the index.html of the app.
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  
  // Hide the menu
  mainWindow.setMenu(null);
  
  // Dev tools
  //mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
});

// Quit the screensaver when the renderer process says so
// (based on user input)
var ipc = require('ipc');
ipc.on('sendQuit', function(event){
    app.quit(); 
});