import styled, { keyframes } from 'styled-components';

export const RoomIdeasDiv = styled.div`
  position: relative;
  width: 100vw;

  @media (max-width: 568px) {
    padding-bottom: 70px;
  }
`;

export const OffClick = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 4;
`;

export const LoadMore = styled.button`
  align-items: center;
  font-size: 16px;
  line-height: 19px;
  background-color: #fff;
  border: 1px solid #2F3337;
  border-radius: 4px;
  color: #2F3337;
  padding: 12px;
  box-sizing: border-box;
  display: flex;
  font-family: 'Helvetica Neue', Helvetica, Arial;
  font-weight: 400;
  justify-content: center;
  margin: auto;
  width: 212px;
  height: 44px;
  &:hover {
    box-shadow: 0px 1px 4px grey;
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

export const LoadWrapper = styled.div`
  margin: -32px auto 32px auto;
  &:focus {
    outline: none;
  }
`;

export const HeroImg = styled.div`
  width: 100vw;
  height: 0;
  padding-bottom: calc(100vw / 1.5);
  max-width: 1780px;
  background-image: url('https://cdn2.webdamdb.com/1280_gLj9PkeYcj79.jpg?1541529106');
  background-size: cover;
  background-position: contain;
  background-repeat: no-repeat;
  @media (min-width: 570px) {
    padding-bottom: calc(100vw / 3);
    background-image: url('https://cdn2.webdamdb.com/1280_Ucd6O2fnKrR3.jpg?1541529112');
  }
  @media (min-width: 1128px) {
    padding-bottom: calc(100vw / 4);
    background-image: url('https://cdn2.webdamdb.com/1280_MOrXT6VOXGO5.jpg?1541529105');
  }
  @media (min-width: 1780px) {
    padding-bottom: calc(1780px / 4);
    margin: auto;
  }
`;
