import styled from "styled-components";

export const Container = styled.label`
  width: 25%;
  background-color: ${({ theme }) => theme.colors.darkenLightBackground};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-right: unset;
  border-radius: 0;

  &:first-child {
    border-radius: 4px 0px 0px 4px;
  }

  &:last-child {
    border-right: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 0px 4px 4px 0px;
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 14px;
`;

export const Radio = styled.input`
  opacity: 0;
  position: absolute;

  &:checked ~ ${Icon} {
    & > svg {
      & > g {
        opacity: ${({ theme }) => theme.opacity};
        & > rect {
          fill: ${({ theme }) => theme.colors.mainColor};
        }
      }
    }
  }
`;
