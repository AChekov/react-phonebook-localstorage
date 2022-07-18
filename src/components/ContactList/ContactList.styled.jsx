import styled from 'styled-components';

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 5px;
  }
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Contact = styled.p`
  margin-right: 10px;
  font-size: 22px;
  font-weight: bold;
  border-bottom: 2px dashed #1d628b;
`;

export const BtnClose = styled.button`
  padding: 5px 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  background-color: inherit;
  border: 1px solid #1d628b;
  border-radius: 5px;
  color: #1d628b;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.07);
  }
`;
