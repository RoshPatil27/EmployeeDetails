import styled from "styled-components";

export const Container = styled.div`
  background: #e6f7ff;
  min-height: 100vh;
  padding: 30px;
`;

export const Title = styled.h2`
  color: #c94f4f;
  text-align: center;
`;

export const Form = styled.form`
  background: #ffeaea;
  padding: 20px;
  border-radius: 10px;
  max-width: 800px;
  margin: auto;
`;

export const Row = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 14px;
  box-sizing: border-box;
`;

export const Select = styled.select`
  flex: 1;
  padding: 10px;
  border-radius: 5px;
`;

export const Button = styled.button`
  background: skyblue;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 6px;
  width: 100%;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background: #c94f4f;
  }
`;
