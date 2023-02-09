import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;

  @media (max-width: 675px) {
    flex-direction: column;
  }
`;

export const LeftBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
  width: calc(100% - 240px);
  background-color: ${({ theme }) => theme.colors.mainBackground};

  @media (max-width: 880px) {
    padding: 24px;
  }

  @media (max-width: 675px) {
    width: 100%;
    height: 100vh;
  }
`;

export const RightBox = styled.div`
  max-width: 240px;
  padding: 15px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightBackground};

  @media (max-width: 675px) {
    max-width: unset;
  }
`;
