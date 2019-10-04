#!/bin/bash
echo "first time install (requires sudo access):"
echo "install list: npm"
echo ""

echo "sudo apt install npm"
echo 'y' | sudo apt install npm
echo "Assign a Name: anansi"
echo "Assign a Version 1.0.0"
echo "Assign a Description: Science and Research Collection Tool"
echo "Assign an Entry Point: main.js"
echo "Skip 'test command'"
echo "Assign to Git Repository: https://github.com/cyschneck/Anansi"
echo "Skip 'keywords'"
echo "author: cyschneck"
echo "Skip 'license'"
npm init
echo "final 'About' saved to 'package.json'"

echo "Install Electron"
echo 'y' | sudo apt-get install nodejs-legacy
npm install --save electron
