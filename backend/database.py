from pymongo import MongoClient

MONGO_URI = "mongodb://localhost:27017/"
client = MongoClient(MONGO_URI)

db = client["employee_db"]
employees_collection = db["employees"]