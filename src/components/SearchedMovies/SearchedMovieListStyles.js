import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Section = styled.section`
  padding: 20px;
`;

export const MovieList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const MovieItem = styled.li`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 500;
`;

export const MovieLink = styled(Link)`
  display: block;

  padding: 10px;
  text-decoration: none;
  color: #333;
  background-color: #f8f8f8;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  transition: color 0.3s ease;

  &:hover {
    background-color: #bada55;
  }
`;
