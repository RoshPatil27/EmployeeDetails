from flask import Flask
from flask_cors import CORS
from RoutesEmployee import employee_routes

app = Flask(__name__)

# Allow React app (Vite default port 5173)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

app.register_blueprint(employee_routes)

if __name__ == "__main__":
    app.run(debug=True)
