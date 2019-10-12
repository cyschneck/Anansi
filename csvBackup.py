########################################################################################################################################
# Testing Python script for python-shell functionality
# TODO: convert for ML functionality
# Date: October 2019
########################################################################################################################################
import sys
import csv

def get_custom_folder_name(given_name):
	return given_name
	
def saveFolderNameToCSV(given_name):
	csv_filename = 'backup.csv'
	with open("{0}/{1}".format("csvBackup", csv_filename), mode='w') as csv_file:
		header_csv = ['Custom Folder Name']
		writer = csv.DictWriter(csv_file, fieldnames=header_csv)
		writer.writeheader()
		
		writer.writerow({'Custom Folder Name': given_name})

	#print("\nSAVED: {0}".format(csv_filename))

if __name__ == '__main__':
	import argparse
	# file run: python3 csvBackup.py Benny
	parser = argparse.ArgumentParser(description="flag format given as: -F <custom_folder>")
	parser.add_argument('-F', '-custom-folder', help="custom folder name")
	args = parser.parse_args()
	account_name = args.F

	print("python script running, saving folder name: '{0}'".format(get_custom_folder_name(account_name)))
	saveFolderNameToCSV(account_name)
	sys.stdout.flush()
