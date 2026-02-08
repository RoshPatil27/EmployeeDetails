import axios from "axios";

const API_URL = "http://127.0.0.1:5000";

// CREATE
export const addEmployee = async (employeeData) => {
  const res = await axios.post(`${API_URL}/create_employees`, employeeData);
  return res.data;
};

// READ ALL  ✅ FIXED
export const getAllEmployees = async () => {
  const res = await axios.get(`${API_URL}/get_all_employees`);
  console.log(res.data);
  return res.data;
};

// SEARCH BY NAME ✅ FIXED
export const searchEmployeeByName = async (name) => {
  const res = await axios.get(`${API_URL}/search_employees_by_name/${name}`);
  return res.data;
};

// SEARCH BY ID ✅ FIXED
export const searchEmployeeById = async (id) => {
  const res = await axios.get(`${API_URL}/search_employees_by_id/${id}`);
  return res.data;
};

// UPDATE ✅ FIXED
export const updateEmployee = async (id, data) => {
  const res = await axios.put(`${API_URL}/update_employees/${id}`, data);
  console.log(res.data);
  return res.data;
};

// DELETE ✅ FIXED
export const deleteEmployee = async (id) => {
  const res = await axios.delete(`${API_URL}/delete_employees/${id}`);
  return res.data;
};

// GET BY ID (for Update form) ✅ FIXED
export const getEmployeeById = async (id) => {
  const res = await axios.get(`${API_URL}/get_employees/${id}`);
  return res.data;
};

