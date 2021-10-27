import styled from "styled-components";
import { type } from "../utils/types";

interface typeProps {
  typeName: string;
}

export const PokeList = styled.div`
  width: 85%;
  margin: 70px 7.5%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const PokeBox = styled.div`
  padding: 4%;
  display: grid;
  grid-template-columns: 33% 33% 32%;
  grid-gap: 1%;
  align-items: center;
  border: 0.7px inset black;
  height: 120px;
  width: 25%;

  @media (max-width: 1366px) {
    width: 41.7%;
  }
  @media (max-width: 767.9px) {
    width: 100%;
  }
`;

export const PokeName = styled.p`
  font-weight: bold;
  font-size: 22px;

  @media (max-width: 1024px) {
    font-size: 18px;
  }

  @media (max-width: 767.9px) {
    font-size: 16px;
  }
`;

export const PokeImg = styled.img`
  width: 100px;
  height: 100px;

  @media (max-width: 1024px) {
    width: 70px;
    height: 70px;
  }
`;

export const FlexBoxCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PokeType = styled.p`
  color: ${(props: typeProps) => type(props.typeName)};
  font-weight: bold;
  font-size: 20px;
  padding: 0 5px;
  @media (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 767.9px) {
    font-size: 14px;
  }
`;

export const PaginationBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;
