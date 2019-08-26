import styled from 'styled-components';

export const MobCheckWrapper = styled.div`
  height: 24px;
  width: 24px;
  display: flex;
  align-items: center;
  padding: 2px 0 0 2px;
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
`;
export const MobFilterOptionText = styled.p`
  font-family: 'Helvetica Neue', Helvetica, Arial;
  font-size: 14px;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-style: normal;
  font-stretch: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color: #545658;
  margin-left: 8px;
  opacity: ${props => (props.grayStyle ? '.5' : '1')};
`;
export const HeaderTextWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderText = styled.p`
  font-family: 'Helvetica Neue', Helvetica, Arial;
  font-size: 28px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.86;
  letter-spacing: normal;
  color: #545658;
`;
export const HeaderClear = styled.p`
  font-family: 'Helvetica Neue', Helvetica, Arial;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color: #545658;
  cursor: pointer;
`;
export const MobileInnerWrapper = styled.div`
  box-sizing: border-box;
  height: 100vh;
  overflow-y: scroll;
  padding-bottom: 72px;
  width: 100%;
`;
export const MobFilterWrapper = styled.div`
  background: white;
  overflow-y: scroll;
  min-height: 100vh;
  position: fixed;
  top: 0;
  transform: ${props =>
    props.visible ? 'translateX(0)' : 'translateX(-100vw)'};
  transition: all 0.3s;
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  width: 100vw;
  z-index: 6000;
`;
export const MobFilterHeader = styled.div`
  height: 68px;
  width: 100%;
  background-color: #f5f5f5;
  padding: 8px 12px;
  box-sizing: border-box;
`;
export const MobFilterFooter = styled.div`
  height: 72px;
  width: 100%;
  background-color: #f5f5f5;
  padding: 14px 24px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
`;
export const ResultsButton = styled.div`
  align-items: center;
  background-color: #0485cc;
  border-radius: 4px;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  font-family: 'Helvetica Neue', Helvetica, Arial;
  font-size: 16px;
  font-stretch: normal;
  font-style: normal;
  font-weight: normal;
  justify-content: center;
  letter-spacing: normal;
  line-height: 1.71;
  padding: 0 16px;
  height: 44px;

  &:hover {
    background-color: #0272a2;
  }
`;
export const CloseButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const CloseButtonText = styled.p`
  margin-left: 10px;
  font-family: 'Helvetica Neue', Helvetica, Arial;
  font-size: 13px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color: #545658;
`;

//Rooms filter
export const RoomsFilterContainer = styled.div`
  width: 100%;
  min-height: 100px;
  border-bottom: 1px solid rgba(151, 151, 151, 0.2);
  padding: 24px;
  box-sizing: border-box;
`;
export const RoomsFilterWrapper = styled.div`
  height: ${props => (props.showMore ? '295px' : 'max-content')};
  height: ${props => (props.showMore ? '295px' : '-moz-max-content')};
  width: 100%;
  overflow: hidden;
`;
export const RoomsFilterLabel = styled.div`
  font-family: 'Helvetica Neue', Helvetica, Arial;
  font-size: 20px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.6;
  letter-spacing: normal;
  color: #545658;
`;
export const RoomsFilterOptionsCont = styled.div`
  height: 24px;
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 24px;
  cursor: ${props => (props.grayStyle ? 'default' : 'pointer')};
`;
export const ToggleMore = styled.div`
  font-family: 'Helvetica Neue', Helvetica, Arial;
  font-size: 14px;
  line-height: 1.71;
  color: #0272a2;
  cursor: pointer;
  display: block;
  margin-top: 28px;
`;
