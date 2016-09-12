from flask_api import FlaskAPI
from flask import request
import supreme_v2

app = FlaskAPI(__name__)

@app.route('/example/', methods=['POST'])
def example():
    return request.data
    return supreme_v2.main('test')
    
if __name__ == "__main__":
    app.run(debug=True)