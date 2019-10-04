const electron = require('electron');

const {app, BrowserWindow} = electron;

let mainWindow; // main window
// Listen for the app to ready
app.on('ready', function(){
	// Create new window
	mainWindow = new BrowserWindow({});
	// Load html into window
	mainWindow.loadFile('mainWindow.html')
});

