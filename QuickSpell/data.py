# Copyright 2022 Armel Houndoh, Marisa Raetano, Ethan Heindl, Dashawn Meredith, and Benjamin Osbourne

# This file is part of QuickSpell.

# QuickSpell is free software: you can redistribute it and/or modify it under the
# terms of the GNU General Public License as published by the Free Software
# Foundation, either version 3 of the License, or (at your option) any later
# version.

# QuickSpell is distributed in the hope that it will be useful, but WITHOUT ANY
# WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
# A PARTICULAR PURPOSE. See the GNU General Public License for more details.
# You should have received a copy of the GNU General Public License along with
# QuickSpell. If not, see <https://www.gnu.org/licenses/>.

#used https://www.youtube.com/watch?v=hpc5jyVpUpw&ab_channel=VideoLab
#used https://github.com/meetDeveloper/freeDictionaryAPI
import requests
import json
import sqlite3

connection = sqlite3.connect("dictionary.db")
cursor = connection.cursor()

command = """CREATE TABLE IF NOT EXISTS
dictionary(word TEXT PRIMARY KEY, definition TEXT, level INTEGER)"""

command2 = """DROP TABLE IF EXISTS dictionary"""

#cursor.execute(command2)
#cursor.execute(command)

wordSource = "1-1000.txt"

fid = open(wordSource,"r")
"""line = fid.readline()

while line:
	dif = -1
	if (len(line) < 5):
		dif = 0
	elif (len(line) >= 5 and len(line) < 7):
		dif = 1
	elif (len(line) >= 7):
		dif = 2
	response = requests.get("https://api.dictionaryapi.dev/api/v2/entries/en/" + line)
	if (response.status_code == 200):
		comm = "INSERT INTO dictionary VALUES ('" + line.strip().replace("'","") + "', '"  + response.json()[0]["meanings"][0]["definitions"][0]["definition"].replace("'","") + "', " + str(dif) + ")"
		print(comm)
		cursor.execute(comm)
		connection.commit()
	line = fid.readline()
"""

"""lines = fid.readlines()

for i in range(0,449):
	dif = -1
	if (len(lines[i]) < 5):
		dif = 0
	elif (len(lines[i]) >= 5 and len(lines[i]) < 7):
		dif = 1
	elif (len(lines[i]) >= 7):
		dif = 2

	response = requests.get("https://api.dictionaryapi.dev/api/v2/entries/en/" + lines[i])
	if (response.status_code == 200):
		comm = "INSERT INTO dictionary VALUES ('" + lines[i].strip().replace("'","") + "', '"  + response.json()[0]["meanings"][0]["definitions"][0]["definition"].replace("'","") + "', " + str(dif) + ")"
		print(comm)
		cursor.execute(comm)
		connection.commit()
"""
