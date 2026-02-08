from ModelsEmployee import Employee
from database import employees_collection


# Convert MongoDB document → JSON safe dict
def serialize_employee(emp):
    emp["_id"] = str(emp["_id"])  # convert ObjectId to string
    return emp


# ✅ ADD EMPLOYEE
def add_employee(data):
    emp = Employee(**data)
    employees_collection.insert_one(emp.to_dict())
    return {"message": "Employee added successfully"}


# ✅ GET ALL EMPLOYEES
def get_all_employees():
    employees = employees_collection.find()
    return [serialize_employee(emp) for emp in employees]


# ✅ GET BY ID
def get_employee_by_id(employee_id):
    emp = employees_collection.find_one({"employee_id": employee_id})
    if emp:
        return serialize_employee(emp)
    return {"message": "Employee not found"}


# ✅ UPDATE
def update_employee(employee_id, data):
    # REMOVE _id so MongoDB doesn't crash
    data.pop("_id", None)

    result = employees_collection.update_one(
        {"employee_id": employee_id},
        {"$set": data}
    )

    if result.matched_count == 0:
        return {"message": "Employee not found"}

    if result.modified_count == 0:
        return {"message": "No changes made"}

    return {"message": "Employee updated successfully"}


# ✅ DELETE
def delete_employee(employee_id):
    result = employees_collection.delete_one({"employee_id": employee_id})

    if result.deleted_count > 0:
        return {"message": "Employee deleted successfully"}
    return {"message": "Employee not found"}


# ✅ SEARCH BY NAME
def search_employee_by_name(name):
    employees = employees_collection.find(
        {"name": {"$regex": name, "$options": "i"}}
    )
    results = [serialize_employee(emp) for emp in employees]

    if results:
        return results
    return {"message": "No employees found with that name"}


# ✅ SEARCH BY ID
def search_employee_by_id(employee_id):
    emp = employees_collection.find_one({"employee_id": employee_id})
    if emp:
        return serialize_employee(emp)
    return {"message": "Employee not found"}
