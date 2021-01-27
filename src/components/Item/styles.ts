import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: 1px solid lightblue;
  height: 100%;
  border-radius: 20px;

  button {
    border-radius: 0 0 20px 20px;
  }

  img {
    max-height: 250px;
    object-fit: contain;
    padding-top: 10px;
  }

  div {
    padding: 20px;
    height: 100%;
  }
`;

export const Title = styled.h3`
  text-align: center;
  padding-bottom: 10px;
`;

export const Description = styled.p`
  text-align: justify;
`;

export const Price = styled.h3`
  padding-top: 20px;
`;
