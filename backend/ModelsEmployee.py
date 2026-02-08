class Employee:
    def __init__(self, **kwargs):
        self.employee_id = kwargs.get("employee_id")
        self.name = kwargs.get("name")
        self.department = kwargs.get("department")
        self.role = kwargs.get("role")
        self.salary = kwargs.get("salary")
        self.email = kwargs.get("email")
        self.phone_number = kwargs.get("phone_number")
        self.address = kwargs.get("address")
        self.joining_date = kwargs.get("joining_date")
        self.experience = kwargs.get("experience")
        self.gender = kwargs.get("gender")
        self.marital_status = kwargs.get("marital_status")
        self.blood_group = kwargs.get("blood_group")
        self.emergency_contact = kwargs.get("emergency_contact")
        self.emergency_contact_number = kwargs.get("emergency_contact_number")
        self.emergency_contact_name = kwargs.get("emergency_contact_name")
        self.emergency_contact_relationship = kwargs.get("emergency_contact_relationship")

    def to_dict(self):
        return self.__dict__
