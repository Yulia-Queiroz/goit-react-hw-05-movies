import styled from 'styled-components';

export const CastSection = styled.section`
  margin: 20px;
`;

export const ErrorMessageBox = styled.div`
  text-align: center;
  font-size: 25px;
`;

export const CastList = styled.ul`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
`;

export const CastMember = styled.li`
  padding: 5px;
  margin: 5px;
  width: calc(14.28% - 10px);
  text-align: center;
  margin: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border-radius: 5px;
`;

export const ActorImage = styled.img`
  max-width: 100%;
  border-radius: 5%;
`;

export const ActorName = styled.p`
  margin-top: 5px;
`;

export const ActorCharacter = styled.p`
  margin-top: 5px;
  color: gray;
`;
