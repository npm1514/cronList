import styled from 'styled-components';

export const FilterBarContainer = styled.div`
  width: 100vw;
  height: max-content;
  height: -moz-max-content;
  background-color: #F9FAFB;
  margin-bottom: 24px;
  -ms-overflow-style: none;
`;
export const FilterBarWrapper = styled.div`
  max-width: 1780px;
  background-color: #F9FAFB;
  box-sizing: border-box;
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  margin: auto;
  @media (min-width: 743px) {
    flex-direction: row;
    justify-content: space-between;
  }
  @media (min-width: 1128px) {
    padding: 16px 80px;
  }
`;
export const FixedFilterButton = styled.div`
  position: fixed;
  width: calc(100vw - 80px);
  height: 48px;
  background-color: #0485cc;
  border-radius: 4px;
  bottom: 22px;
  left: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  z-index: 4;
  cursor: pointer;
  &:hover {
    background-color: #0272a2;
  }
  @media (min-width: 569px) {
    display: none;
  }
`;
export const MainText = styled.h1`
  font-size: 28px;
  line-height: 34px;
  color: #2f3337;
  margin: 0;
  font-weight: 400;
  @media (min-width: 743px) {
    width: 100%;
  }
`;

export const Subtitle = styled.h4`
  margin: 10px 0 0;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
`;

export const TextWrapper = styled.div`
  color: #545658;
  font-family: 'Helvetica Neue', Helvetica, Arial;
  font-style: normal;
  font-weight: bold;
`;
