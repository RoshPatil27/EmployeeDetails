import React, { useState } from "react";
import {
  Container,
  Title,
  Form,
  Input,
  Select,
  Button,
  Row
} from "./UpdateStudent.styles";
import { updateEmployee, getEmployeeById } from "../Api/EmployeeApi";

function UpdateStudent() {
  const [employeeId, setEmployeeId] = useState("");
  const [formData, setFormData] = useState({
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

  const handleFetch = async () => {
    try {
      const data = await getEmployeeById(employeeId);
      console.log("Fetched Employee Data:", data);
      setFormData(data);
    } catch {
      alert("Employee not found");
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateEmployee(employeeId, formData);
      alert("Employee Updated Successfully");
    } catch {
      alert("Update failed");
    }
  };

  return (
    <Container>
      <Title>Update Employee</Title>

      <Row>
        <Input
          placeholder="Enter Employee ID"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
        />
        <Button type="button" onClick={handleFetch}>Load</Button>
      </Row>

      <Form onSubmit={handleUpdate}>
        <Row>
          <Input name="name" value={formData.name} placeholder="Name" onChange={handleChange} />
          <Input name="department" value={formData.department} placeholder="Department" onChange={handleChange} />
        </Row>

        <Row>
          <Input name="role" value={formData.role} placeholder="Role" onChange={handleChange} />
          <Input name="salary" value={formData.salary} placeholder="Salary" onChange={handleChange} />
        </Row>

        <Row>
          <Input name="email" value={formData.email} placeholder="Email" onChange={handleChange} />
          <Input name="phone_number" value={formData.phone_number} placeholder="Phone Number" onChange={handleChange} />
        </Row>

        <Input name="address" value={formData.address} placeholder="Address" onChange={handleChange} />

        <Row>
          <Input type="date" name="joining_date" value={formData.joining_date} onChange={handleChange} />
          <Input name="experience" value={formData.experience} placeholder="Experience" onChange={handleChange} />
        </Row>

        <Row>
          <Select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </Select>

          <Select name="marital_status" value={formData.marital_status} onChange={handleChange}>
            <option value="">Marital Status</option>
            <option>Single</option>
            <option>Married</option>
          </Select>
        </Row>

        <Row>
          <Select name="blood_group" value={formData.blood_group} onChange={handleChange}>
            <option value="">Blood Group</option>
            <option>A+</option>
            <option>B+</option>
            <option>O+</option>
            <option>AB+</option>
          </Select>
        </Row>

        <Title>Emergency Contact</Title>

        <Row>
          <Input name="emergency_contact_name" value={formData.emergency_contact_name} placeholder="Contact Name" onChange={handleChange} />
          <Input name="emergency_contact_relationship" value={formData.emergency_contact_relationship} placeholder="Relationship" onChange={handleChange} />
        </Row>

        <Row>
          <Input name="emergency_contact_number" value={formData.emergency_contact_number} placeholder="Contact Number" onChange={handleChange} />
          <Input name="emergency_contact" value={formData.emergency_contact} placeholder="Alternate Contact" onChange={handleChange} />
        </Row>

        <Button type="submit">Update Employee</Button>
      </Form>
    </Container>
  );
}

export default UpdateStudent;
