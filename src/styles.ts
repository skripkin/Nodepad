import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const LeftBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
  width: calc(100% - 240px);
  background-color: ${({ theme }) => theme.colors.mainBackground};
`;

export const RightBox = styled.div`
  max-width: 240px;
  padding: 15px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightBackground};
`;