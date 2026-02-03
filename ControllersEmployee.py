from ModelsEmployee import Employee
from database import employees_collection



# def add_employee(data):
#     emp = Employee(
#         employee_id=data['employee_id'],
#         name=data['name'],
#         department=data['department'],
#         role=data['role'],
#         salary=data['salary'],
#         email=data['email'],
#         phone_number=data['phone_number'],
#         address=data['address'],
#         joining_date=data['joining_date'],
#         experience=data['experience'],
#         gender=data['gender'],
#         marital_status=data['marital_status'],
#         blood_group=data['blood_group'],
#         emergency_contact=data['emergency_contact'],
#         emergency_contact_number=data['emergency_contact_number'],
#         emergency_contact_name=data['emergency_contact_name'],
#         emergency_contact_relationship=data['emergency_contact_relationship']
#     )
#     employees_collection[emp.employee_id] = emp
#     return {"message": "Employee added successfully"}

# def get_all_employees():
#     return [emp.to_dict() for emp in employees_collection.values()]

# def get_employee_by_id(employee_id):
#     emp = employees_collection.get(employee_id)
#     if emp:
#         return emp.to_dict()
#     return {"message": "Employee not found"}

# def update_employee(employee_id, data):
#     emp = employees_collection.get(employee_id)
#     if emp:
#         emp.name = data.get('name', emp.name)
#         emp.department = data.get('department', emp.department)
#         emp.role = data.get('role', emp.role)
#         emp.salary = data.get('salary', emp.salary)
#         emp.email = data.get('email', emp.email)
#         emp.phone_number = data.get('phone_number', emp.phone_number)
#         emp.address = data.get('address', emp.address)
#         emp.joining_date = data.get('joining_date', emp.joining_date)
#         emp.experience = data.get('experience', emp.experience)
#         emp.gender = data.get('gender', emp.gender)
#         emp.marital_status = data.get('marital_status', emp.marital_status)
#         emp.blood_group = data.get('blood_group', emp.blood_group)
#         emp.emergency_contact = data.get('emergency_contact', emp.emergency_contact)
#         emp.emergency_contact_number = data.get('emergency_contact_number', emp.emergency_contact_number)
#         emp.emergency_contact_name = data.get('emergency_contact_name', emp.emergency_contact_name)
#         emp.emergency_contact_relationship = data.get('emergency_contact_relationship', emp.emergency_contact_relationship)
#         return {"message": "Employee updated successfully"}
#     return {"message": "Employee not found"}

# def delete_employee(employee_id):
#     emp = employees_collection.pop(employee_id, None)
#     if emp:
#         return {"message": "Employee deleted successfully"}
#     return {"message": "Employee not found"}




def add_employee():
    emp = Employee(
        employee_id=input("Enter employee ID: "),
        name=input("Enter employee name: "),
        department=input("Enter employee department: "),
        role=input("Enter employee role: "),
        salary=input("Enter employee salary: "),
        email=input("Enter employee email: "),
        phone_number=input("Enter employee phone number: "),
        address=input("Enter employee address: "),
        joining_date=input("Enter employee joining date: "),
        experience=input("Enter employee experience: "),
        gender=input("Enter employee gender: "),
        marital_status=input("Enter employee marital status: "),
        blood_group=input("Enter employee blood group: "),
        emergency_contact=input("Enter emergency contact: "),
        emergency_contact_number=input("Enter emergency contact number: "),
        emergency_contact_name=input("Enter emergency contact name: "),
        emergency_contact_relationship=input("Enter relationship: ")
    )

    employees_collection.insert_one(emp.to_dict())
    print("Employee added successfully")

def get_all_employees():
    employees = employees_collection.find({}, {"_id": 0})
    for emp in employees:
        print(emp)
def get_employee_by_id(employee_id):
    emp = employees_collection.find_one({"employee_id": employee_id}, {"_id": 0})
    if emp:
        print(emp)
    else:
        print("Employee not found")

def update_employee(employee_id):
    field = input("Enter field to update: ")
    value = input("Enter new value: ")

    result = employees_collection.update_one(
        {"employee_id": employee_id},
        {"$set": {field: value}}
    )

    if result.modified_count:
        print("Employee updated successfully")
    else:
        print("Employee not found")

def delete_employee(employee_id):
    result = employees_collection.delete_one({"employee_id": employee_id})

    if result.deleted_count:
        print("Employee deleted successfully")
    else:
        print("Employee not found")



