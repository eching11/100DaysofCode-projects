# pomodoro.py - Pomodoro style timer to get tasks done in 25 min chunks with 5 min breaks.
# For more info on Pomodoro Technique: https://en.wikipedia.org/wiki/Pomodoro_Technique
# 
# User inputs task name and starts the 25 min timer. Once 25 min have passed, program will "ding", indicating their pomodoro is complete. 
# User starts 5 min break timer and will be alerted when the short break is over. Repeats this 4 times to complete a pomodoro cycle.
# Once a cycle is complete, program asks user if they'd like to start another cycle. 
# 
## Add feature: When user finished using program, program will write to an excel file "Pomodoro.xlsx."
## Pomodoro.xlsx will have date, pomodoro task, number of pomodoro's for that day, and number of recorded pomodoro's total for week/month/year.

#! python3
import datetime
import time
import os
import subprocess


def countdown(t):
	while t:
		mins, secs = divmod(t, 60)
		timeformat = '{:02d}:{:02d}'.format(mins, secs)
		print(timeformat, end='\r')
		time.sleep(1)
		t -= 1

def getName(nameTask):
	print('Name of pomodoro task:')
	nameTask = input()
	return nameTask
	
def banner(nameTask):
	print('\n\nYou\'re working on: ' + nameTask)
	print('Press ENTER to begin. Press ENTER to see how many minutes have passed.')
	print('To stop the program, input "CONTROL + c"')
	input()
	print('Starting... ')

def timer(nameTask, time):
	#subprocess.call(["sleep", time], stdin=None, stderr=None, shell=False)
	countdown(time)
	print("\n" + nameTask + " DONE!!")
	print('\a')

def exit():
	print('\nExiting program...')

def restart():
	while True:
		print("Would you like to start another Pomodoro cycle? (y/n)")
		response = input()
		if response == "y":
			return True
		elif response == "n":
			return False
		else:
			continue
			
try:
	while True:
		pomodoro = 1500	# 25 min
		shortBreak = 300	# 5 min
		longBreak = 1800	# 30 min
		nameTask = ""
		
		for x in range(4):	
			nameTask = getName(nameTask)
			banner(nameTask)
			timer(nameTask, pomodoro)
			banner("short break")
			timer("short break", shortBreak)
	
		print("Congrats! You finished a pomodoro cycle!")
		goAgain = restart()
		if goAgain == True:
			print("Starting long break of 30 min...")
			timer("long break", longBreak)
		elif goAgain == False:
			exit()
			break
except KeyboardInterrupt:
	exit()
