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

from flask import Flask, request, render_template, redirect, flash
import random
import json
import requests
import sqlite3

app = Flask(__name__)

@app.route("/")
def main():
	return render_template("index.html")

@app.route("/index.html")
def index():
	return render_template("index.html")

@app.route("/elementary_game_1.html")
def one_e():
    return render_template("elementary_game_1.html")

@app.route("/pick_elementary.html")
def pick_e():
    return render_template("pick_elementary.html")

@app.route("/pick_middle.html")
def pick_m():
    return render_template("pick_middle.html")

@app.route("/pick_high.html")
def pick_h():
    return render_template("pick_high.html")

@app.route("/elementary_game_2.html")
def two_e():
    return render_template("elementary_game_2.html")

@app.route("/elementary_game_3.html")
def three_e():
    return render_template("elementary_game_3.html")

@app.route("/middle_game_1.html")
def one_m():
    return render_template("middle_game_1.html")

@app.route("/middle_game_2.html")
def two_m():
    return render_template("middle_game_2.html")

@app.route("/middle_game_3.html")
def three_m():
    return render_template("middle_game_3.html")

@app.route("/high_game_1.html")
def one_h():
    return render_template("high_game_1.html")

@app.route("/high_game_2.html")
def two_h():
    return render_template("high_game_2.html")

@app.route("/high_game_3.html")
def three_h():
    return render_template("high_game_3.html")

@app.route("/random/<level>", methods=["GET"])
def random(level):
    connection = sqlite3.connect("dictionary.db")
    cursor = connection.cursor()
    #used https://web.archive.org/web/20200628215538/http://www.bernzilla.com/2008/05/13/selecting-a-random-row-from-an-sqlite-table/
    command = """SELECT word, definition FROM dictionary WHERE level = ? ORDER BY RANDOM() LIMIT 1;"""
    cursor.execute(command, level)
    #used https://www.youtube.com/watch?v=HX-ChCQfJEo&ab_channel=Pythonist
    wordef = [ 
        dict(word = row[0], definition = row[1])
        for row in cursor.fetchall()
    ] 
    return json.dumps(wordef)

@app.route("/specific/<word>", methods=["GET"])
def specific(word):
    connection = sqlite3.connect("dictionary.db")
    cursor = connection.cursor()
    cursor.execute("SELECT definition, level FROM dictionary WHERE word = ?;", (word,))
    info = [
        dict(definition = row[0], level = row[1])
        for row in cursor.fetchall()
    ]
    return json.dumps(info)

@app.route("/insert/<word>", methods=["POST"])
def insert(word):
    connection = sqlite3.connect("dictionary.db")
    cursor = connection.cursor()
    dif = -1
    if (len(word) < 5):
        dif = 0
    elif (len(word) >= 5 and len(word) < 7):
        dif = 1
    elif (len(word) >= 7):
        dif = 2
	
    response = requests.get("https://api.dictionaryapi.dev/api/v2/entries/en/" + word)
    if (response.status_code == 200):
        comm = "INSERT INTO dictionary VALUES ('" + word.strip().replace("'","") + "', '" + response.json()[0]["meanings"][0]["definitions"][0]["definition"].replace("'","") + "', " + str(dif) + ")"
        print(comm)
        cursor.execute(comm)
        connection.commit()
        message = ["Word added"]
        return json.dumps(message)
    else:
        message = ["Word not added"]
        return json.dumps(message)

@app.route("/delete/<word>", methods=["POST"])
def delete(word):
    connection = sqlite3.connect("dictionary.db")
    cursor = connection.cursor()
    #used: https://www.sqlitetutorial.net/sqlite-delete/
    cursor.execute("DELETE FROM dictionary WHERE word LIKE ?", (word,))
    cursor.execute(comm)
    connection.commit()
    message = ["Word deleted"]
    return json.dumps(message)

@app.route("/report/<word>", methods=["GET","POST"])
def report(word):
    connection = sqlite3.connect("dictionary.db")
    cursor = connection.cursor()
    cursor.execute("SELECT definition FROM dictionary WHERE word = ?;", (word,))
    info = [
            dict(definition = row[0])
            for row in cursor.fetchall()
            ]
    fid = open("report.txt","a")
    fid.write(word + "\n" + info[0]["definition"] + "\n")
    fid.close()
    message = word.capitalize() + " has been reported"
    return json.dumps(message)

if __name__=="__main__":
    app.run(host='0.0.0.0', port=5000)
