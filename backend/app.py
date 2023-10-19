from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/greet', methods=['GET'])
def greet_user():
    return jsonify({"greeting": "hello from Flask!"})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0') 
