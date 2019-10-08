echo "generatign a linux executable"
echo ""

echo "run pyinstaller to bundle csvBackup.py"
./run_pyinstaller_exe.sh

echo ""
echo "generate release-build/linux executable"
npm run package-linux

echo ""
echo "removed old and moved dist/build pyinstaller folders to 'pyinstaller_spec'"
rm -rf pyinstaller_spec/dist
mv dist pyinstaller_spec/
rm -rf pyinstaller_spec/build
mv build pyinstaller_spec/
