import React, { useState } from "react";
import {
  Container,
  Title,
  Form,
  Input,
  Select,
  Button,
  Row
} from "./AddStudent.styles";
import { addEmployee } from "../Api/EmployeeApi";

function AddStudent() {
  const [formData, setFormData] = useState({
    employee_id: "",
    name: "",
    department: "",
    role: "",
    salary: "",
    email: "",
    phone_number: "",
    address: "",
    joining_date: "",
    experience: "",
    gender: "",
    marital_status: "",
    blood_group: "",
    emergency_contact: "",
    emergency_contact_number: "",
    emergency_contact_name: "",
    emergency_contact_relationship: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addEmployee(formData);
      alert("Employee Added Successfully");
    } catch (error) {
      alert("Error adding employee: " + error.message);
    }
  };

  return (
    <Container>
      <Title>Add Employee</Title>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Input name="employee_id" placeholder="Employee ID" onChange={handleChange} />
          <Input name="name" placeholder="Full Name" onChange={handleChange} />
        </Row>

        <Row>
          <Input name="department" placeholder="Department" onChange={handleChange} />
          <Input name="role" placeholder="Role" onChange={handleChange} />
        </Row>

        <Row>
          <Input name="salary" placeholder="Salary" onChange={handleChange} />
          <Input name="experience" placeholder="Experience (Years)" onChange={handleChange} />
        </Row>

        <Row>
          <Input name="email" placeholder="Email" onChange={handleChange} />
          <Input name="phone_number" placeholder="Phone Number" onChange={handleChange} />
        </Row>

        <Input name="address" placeholder="Address" onChange={handleChange} />

        <Row>
          <Input type="date" name="joining_date" onChange={handleChange} />
          <Select name="gender" onChange={handleChange}>
            <option value="">Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </Select>
        </Row>

        <Row>
          <Select name="marital_status" onChange={handleChange}>
            <option value="">Marital Status</option>
            <option>Single</option>
            <option>Married</option>
          </Select>

          <Select name="blood_group" onChange={handleChange}>
            <option value="">Blood Group</option>
            <option>A+</option>
            <option>B+</option>
            <option>O+</option>
            <option>AB+</option>
          </Select>
        </Row>

        <Title>Emergency Contact Details</Title>

        <Row>
          <Input name="emergency_contact_name" placeholder="Contact Name" onChange={handleChange} />
          <Input name="emergency_contact_relationship" placeholder="Relationship" onChange={handleChange} />
        </Row>

        <Row>
          <Input name="emergency_contact_number" placeholder="Contact Number" onChange={handleChange} />
          <Input name="emergency_contact" placeholder="Alternate Contact" onChange={handleChange} />
        </Row>

        <Button type="submit">Add Employee</Button>
      </Form>
    </Container>
  );
}

export default AddStudent;
