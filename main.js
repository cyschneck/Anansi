const electron = require('electron');

const {app, BrowserWindow, Menu, ipcMain} = electron;

// SET ENV
//process.env.NODE_ENV = 'production'; // to remove 'DevTools' options
process.env.NODE_ENV = 'development'; // to add 'DevTools' options

console.log(process.env.NODE_ENV)
let mainWindow; // main window
let addWindow; // new window variable

// Use npm.cmd on windows executables
if (process.platform=="win32") {
  var cmd = 'npm.cmd'
} else {
  var cmd = 'npm'
}

// Listen for the app to ready
app.on('ready', function(){
	// Create new window
	mainWindow = new BrowserWindow({
		// solves: Uncaught ReferenceError: require is not defined when loading page with devTools
		webPreferences: {
			nodeIntegration: true
		}
		});
	// Load html into window
	mainWindow.loadFile('mainWindow.html')

	// QUIT: quit app when closed
	mainWindow.on('closed', function(){
		app.quit();
	});

	
	// Build the menu from the template
	const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
	// Insert menu
	Menu.setApplicationMenu(mainMenu);
});

// Functions for menu functions
function createAddWindow(){
	// Create new window
	addWindow = new BrowserWindow({
		width: 600,
		height: 600,
		
		// solves: Uncaught ReferenceError: require is not defined when loading page with devTools
		webPreferences: {
			nodeIntegration: true
		}
		});
	// Load html into window
	addWindow.loadFile('addWindow.html')
	
	// Build the menu from the template
	const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
	// Insert menu option
	Menu.setApplicationMenu(mainMenu);

	// Garbage collection handle (optmization)benclear
	addWindow.on('close', function(){
		addWindow = null;
	});
}

// Catch account_name:add from Add Window
ipcMain.on('account_name:add', function(e, account_name){
	if (process.env.NODE_ENV != 'production') {
		console.log(account_name, account_name);
		// if not in production, print console commands
	}
	mainWindow.webContents.send('account_name:add', account_name); // send items to main window

	//addWindow.close(); // close add window after each entry
});


// Create menu template to replace default
const mainMenuTemplate = [
	{
		label:'FileX',
		submenu:[
		{
			label: 'Add Account',
			// add hot key
			accelerator: process.platform=='darwin' ? 'Command+N' : 'Ctrl+N', // close window with either command+n for mac or ctrl+n for other OS'
			click(){
				createAddWindow();
			}
		},
		{
			label: 'Clear Account Lists',
			click(){
				mainWindow.webContents.send('account_name:clear');
			}
		},
		{type: 'separator'}, // add line between menu items and 'quit' option
		{
			label: 'Quit',
			// add hot key
			accelerator: process.platform=='darwin' ? 'Command+Q' : 'Ctrl+Q', // close window with either command+q for mac or ctrl+q for other OS'
			// mac (darwin), windows (win32), linux (linux)
			// exit via the 'Quit' option
			click() {
				app.quit();
			}
		}
		]
	},
	{
		label: 'Help',
		submenu:[
		{
			label: 'Report a Bug',
		},
		{
			label: 'About Anansi',
		},
		]
	}
];

// Check if on a mac (add empty object to run file menu)
if (process.platform == 'darwin'){
	mainMenuTemplate.unshift({}); // adds to the beginning of the array for menu
}

// Add developer tools if not in 'Production'
if (process.env.NODE_ENV != 'production'){
	mainMenuTemplate.push({
		label: 'Developer Tools',
		submenu: [
			{
				label: 'Toggle DevTools',
				// add hot key
				accelerator: process.platform=='darwin' ? 'Command+I' : 'Ctrl+I', // close window with either command+i for mac or ctrl+i for other OS'
				click(account_name, focusedWindow){
					// Will make devTools to show up on whatever window is running
					focusedWindow.toggleDevTools();
				}
			},
			{
				role: 'reload' // reloads/refreshes the page
			}
		]
		});
}
