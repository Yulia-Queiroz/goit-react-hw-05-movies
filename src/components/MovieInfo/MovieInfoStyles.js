import styled from 'styled-components';

export const MovieSection = styled.section`
  display: flex;
  align-items: center;

  margin: 20px;
  padding: 20px 40px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

export const MovieImage = styled.img`
  display: block;
  margin-right: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 5px;
`;

export const MovieDetails = styled.div``;

export const MovieTitle = styled.h1`
  text-transform: uppercase;
  font-size: 28px;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 10px;
`;

export const UserScore = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const OverviewHeading = styled.h2`
  text-transform: uppercase;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const OverviewText = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

export const GenresHeading = styled.h2`
  text-transform: uppercase;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const GenresList = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;
