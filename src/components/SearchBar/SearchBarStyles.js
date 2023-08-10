import styled from 'styled-components';

export const Section = styled.section`
  padding: 20px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
`;

export const SubmitButton = styled.button`
  background-color: transparent;
  color: #133337;
  font-weight: 600;
  border: 2px solid #ffa500;
  border-radius: 5px;
  padding: 8px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: #ff9900;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

export const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
`;
