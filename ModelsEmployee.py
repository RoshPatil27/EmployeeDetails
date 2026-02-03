class Employee:
    def __init__(self, employee_id, name, department, role, salary, email, phone_number, address, joining_date, experience, gender, marital_status, blood_group, emergency_contact, emergency_contact_number, emergency_contact_name, emergency_contact_relationship):
        self.employee_id = employee_id
        self.name = name
        self.department = department
        self.role = role
        self.salary = salary
        self.email = email
        self.phone_number = phone_number
        self.address = address
        self.joining_date = joining_date
        self.experience = experience
        self.gender = gender
        self.marital_status = marital_status
        self.blood_group = blood_group
        self.emergency_contact = emergency_contact
        self.emergency_contact_number = emergency_contact_number
        self.emergency_contact_name = emergency_contact_name
        self.emergency_contact_relationship = emergency_contact_relationship

    def to_dict(self):
        return self.__dict__
    def display_details(self):
        print("Employee ID:", self.employee_id)
        print("Name:", self.name)
        print("Department:", self.department)
        print("Role:", self.role)
        print("Salary:", self.salary)
        print("Email:", self.email)
        print("Phone Number:", self.phone_number)
        print("Address:", self.address)
        print("Joining Date:", self.joining_date)
        print("Experience:", self.experience)
        print("Gender:", self.gender)
        print("Marital Status:", self.marital_status)
        print("Blood Group:", self.blood_group)
        print("Emergency Contact:", self.emergency_contact)
        print("Emergency Contact Number:", self.emergency_contact_number)
        print("Emergency Contact Name:", self.emergency_contact_name)
        print("Emergency Contact Relationship:", self.emergency_contact_relationship)
