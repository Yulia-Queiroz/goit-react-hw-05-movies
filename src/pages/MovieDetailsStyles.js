import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledGoBack = styled(Link)`
  margin: 20px 20px;
  display: block;
  width: 60px;
  text-decoration: none;
  background-color: transparent;
  color: #133337;
  font-weight: 500;
  border: 2px solid #ffa500;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ffa500;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

export const AdditionalInfoTitle = styled.h2`
  text-transform: uppercase;
`;

export const StyledSection = styled.section`
  margin: 20px;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

export const StyledList = styled.ul`
  display: flex;
  width: 300px;
  padding: 0 20px;
  justify-content: space-around;

  list-style: none;
`;

export const StyledListItem = styled.li``;

export const StyledLink = styled(Link)`
  display: block;
  width: 80px;
  text-decoration: none;
  background-color: transparent;
  color: #133337;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  border: 2px solid #bada55;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #bada55;
  }
`;
