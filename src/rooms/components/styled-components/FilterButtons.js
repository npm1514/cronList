import styled from 'styled-components';

export const FilterButton = styled.div`
  height: 44px;
  min-width: 100px;
  border: 1px solid #DADCDF;
  width: 184px;
  border-radius: 4px;
  background-color: #fff;
  color: #545658;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  &:nth-child(n + 2) {
    margin-left: 8px;
  }
  &:hover {
    box-shadow: 0px 1px 2px grey;
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;
export const FilterButtonArrow = styled.div`
  margin-right: 16px;
  transform: ${props => props.open && 'rotate(180deg)'};
  display: flex;
  flex-direction: column;
`;
export const FilterButtonInnerCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  &:focus {
    outline: none;
  }
`;
export const FilterButtonInnerWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  width: 100%;
`;
export const FilterButtonText = styled.div`
  font-family: 'Helvetica Neue', Helvetica, Arial;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  padding: 12px 8px;
  line-height: 21px;
  letter-spacing: normal;
`;
export const FilterButtonWrapper = styled.div`
  display: none;
  margin-top: 16px;
  width: max-content;
  width: -moz-max-content;
  z-index: 4;

  @media (min-width: 569px) {
    display: flex;
  }
  @media (min-width: 743px) {
    align-items: flex-end;
    margin-top: 0;
  }
`;
//Drop Downs
export const Dropdown = styled.div`
  height: ${props => (props.open ? '272px' : '0px')};
  width: 227px;
  display: ${props => (props.open ? 'block' : 'none')};
  background-color: #f5f5f5;
  position: absolute;
  right: 0;
  top: 60px;
  transition: height 0.3s ease-in-out;
  padding: 4px;
  box-sizing: border-box;
  border-radius: 0 0 4px 4px;
  z-index: 4;
  @media (max-width: 743px) {
    left: 0;
  }
`;
export const RoomDropdown = styled.div`
  height: ${props => (props.open ? '272px' : '0px')};
  width: 227px;
  display: ${props => (props.open ? 'block' : 'none')};
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: absolute;
  right: 0;
  top: 60px;
  transition: height 0.3s ease-in-out;
  padding: 4px;
  box-sizing: border-box;
  border-radius: 0 0 4px 4px;
  z-index: 4;
  @media (max-width: 743px) {
    left: 0;
  }
`;
export const StyleDropdown = styled.div`
  width: 286px;
  display: ${props => (props.open ? 'block' : 'none')};
  background-color: #fff;
  position: absolute;
  right: 0;
  top: 60px;
  transition: height 0.3s ease-in-out;
  box-sizing: border-box;
  z-index: 4;
  @media (max-width: 743px) {
    left: 0;
  }
`;
