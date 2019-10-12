# Anansi
<img src="https://user-images.githubusercontent.com/22159116/66248733-ca74d900-e6e7-11e9-94f8-91df2becbe07.png" width="256">

### Science and Research Collection Tool

### Overview
Science and research collection tool made in Electron.js and Python

### Download
*Coming soon...*

### TODO
Run python exe instead of python script in csvBackup.js (bundled/frozen via pyinstaller)

### Instructions for Development

Dependencies installed via local_dev_installation_linux.sh

* npm
* Electron

Electron stored in *node_modules*, a folder created by `npm install --save electron`. This command is included
in local_dev_installation_linux.sh

**Create Electron App (Windows, Linux, MacOS)**

Run each command in their respectively OS to create an executable manually (after running pyinstaller)

generate_release_build_exe.sh will bundle Python scripts and generate Electron.js executable
```
# Build Windows Executable
./generate_release_build_exe.sh win

# Build Linux Executable
./generate_release_build_exe.sh linux

# Build MacOS Executable 
# Not currently tested/supported
```

### Steps

**Dev Production**
```
# Run once at the beginning to install local dependencies
./0_local_dev_installation_linux.sh
```

Generate and run for development (npm start vs. npm run)
```
npm start # To start Electron
# Note: Uncomment out 'process.env.NODE_ENV = 'production';' in main.js to show devTool options

```

Note: using git lfs to upload release-builds (too large for github)
```
git lfs track "release-builds/**"
# ** allows for recursive lfs for a folder
```
**Errors and Solutions**

*Failed at the anansi@1.0.0 package...*
```

npm rebuild

# Then re-run the command
```

### Git Large File Storage (lfs) Details
Currently, git-lfs storing links for the release-builds for Windows and Linux

```
$ git lfs track
Listing tracked patterns
    release-builds/** (.gitattributes)

```

### Notes
Not tested on MacOS (npm run package-mac)
Need to convert .ico to .icns for MacOS icon

### Credits
[Skeleton Framework](https://www.youtube.com/watch?v=kN1Czs0m1SU)  
[Electron Packager Scripts](https://www.christianengvall.se/electron-packager-tutorial/)
