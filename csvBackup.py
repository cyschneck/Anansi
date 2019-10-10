########################################################################################################################################
# Testing Python script for python-shell functionality
# TODO: convert for ML functionality
# Date: October 2019
########################################################################################################################################
import sys
import csv

def get_account_name(given_name):
	return given_name
	
def saveAccountNameCSV(given_name):
	csv_filename = 'backup.csv'
	with open("{0}/{1}".format("csvBackup", csv_filename), mode='w') as csv_file:
		header_csv = ['Account Name']
		writer = csv.DictWriter(csv_file, fieldnames=header_csv)
		writer.writeheader()
		
		writer.writerow({'Account Name': given_name})

	#print("\nSAVED: {0}".format(csv_filename))

if __name__ == '__main__':
	import argparse
	# file run: python3 csvBackup.py Benny
	parser = argparse.ArgumentParser(description="flag format given as: -A <account_name>")
	parser.add_argument('-A', '-account-name', help="account name")
	args = parser.parse_args()
	account_name = args.A

	print("python script running: {0}".format(get_account_name(account_name)))
	saveAccountNameCSV(account_name)
	sys.stdout.flush()
