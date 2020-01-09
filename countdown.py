#! python3

import time

print("You have 15 seconds to authenticate...")
def countdown(t):
	while t:
		mins, secs = divmod(t, 60)
		timeformat = '{:02d}:{:02d}'.format(mins, secs)
		print(timeformat, end='\r')
		time.sleep(1)
		t -= 1
	print('Copying access code from current Url...\n')
#countdown(67)