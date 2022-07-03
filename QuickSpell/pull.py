import sqlite3
import random

con = sqlite3.connect("dictionary.db")
cur = con.cursor()

cur.execute("""SELECT word FROM dictionary WHERE LENGTH(word) >= 7;""")
word = cur.fetchall()

leng = len(word)

r = random.randrange(0, leng)

print(word[r])
