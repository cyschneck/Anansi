# Anansi
<img src="https://user-images.githubusercontent.com/22159116/66248733-ca74d900-e6e7-11e9-94f8-91df2becbe07.png" width="256">

### Science and Research Collection Tool

### Overview

### Download
*Coming soon...*

### Instructions to Run

Dependencies installed via local_dev_installation_linux.sh

* npm
* Electron

Electron stored in *node_modules*, a folder created by `npm install --save electron`. This command is included
in local_dev_installation_linux.sh

### Steps

_Dev Production_
```
./local_installation.sh

npm start # To start Electron
# Note: Uncomment out 'process.env.NODE_ENV = 'production';' in main.js to show devTool options

```

_Create Electron App (Windows, Linux, MacOS)_
Run each command in their respectively OS to create an executable
```
# Build Windows Executable
npm run package-win

# Build Linux Executable
npm run package-linux

# Build MacOS Executable 
npm run package-mac
```

Note: using git lfs to upload release-builds (too large for github)
```
git lfs track release-builds/*
```

_Errors and Solutions_
*Failed at the anansi@1.0.0 package...
```
npm rebuild

# Then re-run the command
```

### Notes
Need to convert .ico to .icns for MacOS icon

### Credits
[Skeleton Framework](https://www.youtube.com/watch?v=kN1Czs0m1SU)  
[Electron Packager Scripts](https://www.christianengvall.se/electron-packager-tutorial/)
