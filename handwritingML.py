import sys

account_name = sys.argv[1]

def get_account_name(given_name):
	return given_name
	

print("python script running: {0}".format(get_account_name(account_name)))
sys.stdout.flush()
