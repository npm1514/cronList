import styled from 'styled-components';

export const CheckContainer = styled.div`
  background: ${props => props.visible ? '#0485CC' : '#fff'}
  height: 24px;
  width: 24px;
  border: ${props => props.visible ? '2px solid #0485CC' : '2px solid #DADCDF'};
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;
export const CheckWrapper = styled.div`
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  height: 24px;
  width: 24px;
  display: flex;
  align-items: center;
`;
export const StyleButtonWrapper = styled.div`
  background: #f8f8f8;
  height: 42px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
  box-sizing: border-box;
`;
export const RoomFilterWrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: scroll;
`;
export const FilterOptionContainer = styled.div`
  align-items: center;
  box-sizing: border-box;
  cursor: ${props => (props.grayStyle ? 'default' : 'pointer')};
  display: flex;
  padding: 0 12px;
  position: relative;
  width: 100%;
  height: 48px;
  background-color: ${props => props.grayStyle ? '#F5F6F7' : '#fff'};

  &:hover {
    background-color: #F5F6F7;
  }

`;
export const FilterOptionWrapper = styled.div`
  height: 24px;
  width: 100%;
  display: flex;
  align-items: center;
`;
export const FilterOptionText = styled.p`
  font-family: 'Helvetica Neue', Helvetica, Arial;
  font-size: 14px;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  line-height: 1.71;
  color: #545658;
  margin-left: 8px;
`;
export const StyleFilterWrapper = styled.div`
  height: 264px;
  width: 100%;
`;
//Style Filters
export const StyleFilterContainer = styled.div`
  height: 264px;
  width: 100%;
  overflow: scroll;
`;
export const ApplyButton = styled.div`
  width: 38px;
  height: 24px;
  font-family: 'Helvetica Neue', Helvetica, Arial;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.71;
  color: #0272a2;
  &:hover {
    color: #0485cc;
  }
`;
export const ClearButton = styled.div`
  width: 33px;
  height: 24px;
  font-family: 'Helvetica Neue', Helvetica, Arial;
  font-size: 14px;
  line-height: 1.71;
  color: #000;
`;
