from flask import Flask, request, jsonify
import oracledb
from flask_cors import CORS

# Initialize Oracle Client (Make sure the path is correct)
oracledb.init_oracle_client(lib_dir=r"C:\Users\sures\Downloads\instantclient-basic-windows.x64-21.17.0.0.0dbru\instantclient_21_17")

# Flask app
app = Flask(__name__)
CORS(app)

# Oracle Database Credentials
DB_USER = 'SURESH'
DB_PASSWORD = 'HR'
DSN = "localhost/xe"

# Database Connection Function
def get_connection():
    try:
        conn = oracledb.connect(user=DB_USER, password=DB_PASSWORD, dsn=DSN)
        return conn
    except oracledb.DatabaseError as e:
        print("Database Connection Error:", e)
        return None

# Test Route
@app.route('/')
def home():
    return jsonify({'status': 'Flask Server is Running'})

# Route to Handle User Signup
@app.route('/submit', methods=['POST'])
def register_user():
    conn = get_connection()
    if not conn:
        return jsonify({'error': 'Database connection failed'}), 500

    try:
        data = request.json
        email = data.get("name")
        password = data.get("password")

        if not email or not password:
            return jsonify({'error': 'Missing email or password'}), 400

        cursor = conn.cursor()
        cursor.execute('INSERT INTO AMAZON_LOGIN_final (EMAIL, PASSWORD) VALUES (:1, :2)', (email, password))
        conn.commit()

        return jsonify({'success': 'Account created successfully!'}), 201

    except Exception as e:
        print("Error inserting data:", e)
        return jsonify({'error': 'Failed to insert data'}), 500
    finally:
        cursor.close()
        conn.close()

# Run Flask App
if __name__ == '__main__':
    app.run(debug=True)
