from flask_api import FlaskAPI
from flask import request
import supreme_v2

app = FlaskAPI(__name__)

@app.route('/script/', methods=['POST'])
def example():
    id = request.data['id']
    items = request.data['items']
    res = ''
    if (id == 1):
        res = supreme_v2.main(items)
    return res
    
if __name__ == "__main__":
    app.run(debug=True)