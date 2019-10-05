const electron = require('electron');

const {app, BrowserWindow, Menu} = electron;

let mainWindow; // main window
let addWindow; // new window variable

// Listen for the app to ready
app.on('ready', function(){
	// Create new window
	mainWindow = new BrowserWindow({});
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
		width: 300,
		height: 300,
		});
	// Load html into window
	addWindow.loadFile('addWindow.html')
	
	// Build the menu from the template
	const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
	// Insert menu
	Menu.setApplicationMenu(mainMenu);
	
	
	// Garbage collection handle (optmization)
	addWindow.on('close', function(){
		addWindow = null;
	});
}

// Create menu template to replace default
const mainMenuTemplate = [
	{
		label:'FileX',
		submenu:[
		{
			label: 'Add Item',
			click(){
				createAddWindow();
			}
		},
		{
			label: 'Clear Items'
		},
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
				click(item, focusedWindow){
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
