import json
import sqlite3
from flask import Flask,g,request,jsonify

app = Flask(__name__)

DATABASE = '../moodslider.db'
def get_db():
    db = getattr(g,'_database',None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
        db.row_factory = sqlite3.Row
    
    return db

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database',None)
    if db is not None:
        db.close()
    
@app.route('/movies',methods=['POST'])
def movies_list():
    db = get_db()
    if request.method == 'GET':
        return 'HELLO'

    print(request.json)
    if request.method == 'POST':
        calm_score = request.json.get('calm_score')
        awake_score = request.json.get('awake_score')
        fearless_score = request.json.get('fearless_score')
      
        print(calm_score)
        max_score = max(calm_score,awake_score,fearless_score)
        if max_score == calm_score:
            data = db.execute(
                'SELECT movie_id,title,image_url,video_url FROM movie WHERE calm_score > ' + str(max_score)
            ).fetchall()

            results = [tuple(row) for row in data]
            print(f"{type(results)} of type {type(results[0])}")
            # <class 'list'> of type <class 'tuple'>

            json_string = json.dumps(results)
            return json_string

        if max_score == awake_score:
            data = db.execute(
                'SELECT movie_id,title,image_url,video_url FROM movie WHERE awake_score > ' + str(max_score)
            ).fetchall()
            results = [tuple(row) for row in data]
            print(f"{type(results)} of type {type(results[0])}")
            # <class 'list'> of type <class 'tuple'>

            json_string = json.dumps(results)
            return json_string
        
        if max_score == fearless_score:
            data = db.execute(
                'SELECT movie_id,title,image_url,video_url FROM movie WHERE fearless_score > ' + str(max_score)
            ).fetchall()
            results = [tuple(row) for row in data]
            print(f"{type(results)} of type {type(results[0])}")
            # <class 'list'> of type <class 'tuple'>

            json_string = json.dumps(results)
            return json_string

if __name__ == "__main__":
    app.run(debug=True, port=5000)

