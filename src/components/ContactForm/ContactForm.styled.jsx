import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

export const Label = styled.label`
  margin: 10px 0 10px 0;
`;

export const Input = styled.input`
  width: 250px;
  height: 40px;
  padding: 0 15px 0 15px;
  border-radius: 5px;
`;

export const Button = styled.button`
  width: 200px;
  height: 40px;
  cursor: pointer;
  margin: 5px 0 5px;
  border-radius: 5px;
  color: #1d628b;
  font-weight: bold;
  background-color: transparent;
  border: 2px solid #1d628b;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.07);
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }
`;
