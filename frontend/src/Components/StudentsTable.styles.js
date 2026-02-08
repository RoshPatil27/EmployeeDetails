import styled from "styled-components";

export const Container = styled.div`
  background: #e6f7ff;
  min-height: 100vh;
  padding: 30px;
`;

export const Title = styled.h2`
  text-align: center;
  color: #d9534f;
`;

export const SearchBar = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const Button = styled.button`
  background: skyblue;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  color: white;

  &:hover {
    background: #d9534f;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: #ffeaea;
`;

export const Th = styled.th`
  padding: 10px;
  border: 1px solid #ccc;
  background: #d9534f;
  color: white;
`;

export const Td = styled.td`
  padding: 10px;
  border: 1px solid #ccc;
  text-align: center;
`;

export const Tr = styled.tr``;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-height: 80vh;
  overflow-y: auto;
  width: 400px;
`;

export const CloseBtn = styled.button`
  float: right;
  background: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;
