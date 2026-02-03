# Create a program to store and display employee details (ID, name, role, salary) using a class.

from flask import Flask
from RoutesEmployee import employee_routes
from ControllersEmployee import add_employee, update_employee, delete_employee, get_employee_by_id, get_all_employees

# app = Flask(__name__)
# app.register_blueprint(employee_routes)

def main():
    while True:
        print("1. Add Employee")
        print("2. Update Employee")
        print("3. Delete Employee")
        print("4. Get Employee by ID")
        print("5. Get All Employees")
        print("6. Exit")
        choice = int(input("Enter your choice: "))
        if choice == 1:
            print("Enter employee details:")
            add_employee()
        elif choice == 2:
            employee_id = input("Enter employee ID: ")
            update_employee(employee_id)
        elif choice == 3:
            employee_id = input("Enter employee ID: ")
            delete_employee(employee_id)
        elif choice == 4:
            employee_id = input("Enter employee ID: ")
            get_employee_by_id(employee_id)
        elif choice == 5:
            get_all_employees()
        elif choice == 6:
            break

# if __name__ == '__main__':
#     app.run(debug=True)


if __name__ == "__main__":
    main()

