#!/bin/bash
operating_system=$1
# script: ./generate_release_build_exe.sh linux

if [ -z "$1" ] # checks to see that operating system is included
then
	echo "Requires operating system: [linux, win]"
	# current supports 'linux' and 'windows'
else
	echo "Operating System: " $operating_system
	echo "generating a $operating_system executable"
	echo ""

	echo "run pyinstaller to bundle csvBackup.py"
	./run_pyinstaller_exe.sh

	echo ""
	echo "generate release-build/$operating_system executable"
	echo "npm run package-$operating_system"
	npm run package-$operating_system

	echo ""
	echo "removed old and moved dist/build pyinstaller folders to 'pyinstaller_spec' for '$operating_system'"
	rm -rf pyinstaller_spec/$operating_system/dist
	mv dist pyinstaller_spec/$operating_system
	rm -rf pyinstaller_spec/$operating_system/build
	mv build pyinstaller_spec/$operating_system
fi

