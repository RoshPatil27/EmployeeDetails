import React, { useEffect, useState } from "react";
import {
  Container,
  Title,
  SearchBar,
  Input,
  Button,
  Table,
  Th,
  Td,
  Tr,
  ModalOverlay,
  ModalContent,
  CloseBtn,
} from "./StudentsTable.styles";
import {
  getAllEmployees,
  searchEmployeeById,
  searchEmployeeByName,
  deleteEmployee,
} from "../Api/EmployeeApi";
import { FaEye } from "react-icons/fa";

function StudentsTable() {
  const [employees, setEmployees] = useState([]);
  const [searchId, setSearchId] = useState("");
  const [searchName, setSearchName] = useState("");
  const [selectedEmp, setSelectedEmp] = useState(null);

  const loadEmployees = async () => {
    try {
      const data = await getAllEmployees();
      setEmployees(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("API ERROR:", err);
    }
  };

  useEffect(() => {
    const fetchEmployees = async () => {
      await loadEmployees();
    };
    fetchEmployees();
  }, []);

  const handleSearchById = async () => {
    if (!searchId) return;
    const data = await searchEmployeeById(searchId);
    setEmployees([data]);
  };

  const handleSearchByName = async () => {
    if (!searchName) return;
    const data = await searchEmployeeByName(searchName);
    setEmployees(Array.isArray(data) ? data : []);
  };

  const handleDelete = async (id) => {
    await deleteEmployee(id);
    loadEmployees();
  };

  return (
    <Container>
      <Title>Employees List</Title>

      <SearchBar>
        <Input
          placeholder="Search by ID"
          onChange={(e) => setSearchId(e.target.value)}
        />
        <Button onClick={handleSearchById}>Search ID</Button>

        <Input
          placeholder="Search by Name"
          onChange={(e) => setSearchName(e.target.value)}
        />
        <Button onClick={handleSearchByName}>Search Name</Button>

        <Button onClick={loadEmployees}>Reset</Button>
      </SearchBar>

      <Table>
        <thead>
          <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Department</Th>
            <Th>View</Th>
            <Th>Delete</Th>
          </Tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <Tr key={emp.employee_id}>
              <Td>{emp.employee_id}</Td>
              <Td>{emp.name}</Td>
              <Td>{emp.department}</Td>
              <Td>
                <FaEye
                  style={{ cursor: "pointer" }}
                  onClick={() => setSelectedEmp(emp)}
                />
              </Td>
              <Td>
                <Button onClick={() => handleDelete(emp.employee_id)}>
                  Delete
                </Button>
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>

      {selectedEmp && (
        <ModalOverlay>
          <ModalContent>
            <CloseBtn onClick={() => setSelectedEmp(null)}>X</CloseBtn>
            <h3>Employee Details</h3>
            {Object.entries(selectedEmp).map(([key, value]) => (
              <p key={key}>
                <b>{key}:</b> {value}
              </p>
            ))}
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
}

export default StudentsTable;
