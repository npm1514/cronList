import React from 'react';
import { filterData } from '../utils';
import ActionCheckThin from 'overstock-component-library/lib/Icons/action/Check_Thin';

import {
  CheckContainer,
  CheckWrapper,
  FilterOptionContainer,
  FilterOptionText,
  FilterOptionWrapper
} from './styled-components/Filters';

export default ({
  selectRoom,
  selectedRoom,
  selectedStyles,
  toggleStyle,
  type
}) => {
  let rooms = filterData.rooms.slice();
  const styles = filterData.styles['all-rooms'];
  const index = rooms.indexOf(selectedRoom);
  const modifiedRooms =
    index !== -1
      ? rooms.splice(rooms.indexOf(selectedRoom), 1).concat(rooms.sort())
      : rooms.sort();

  let modifiedRoom = selectedRoom
    ? selectedRoom.toLowerCase().replace(' ', '-')
    : 'all-rooms';
  const acceptableStyles = filterData.styles[modifiedRoom];
  const modifiedStyles = modifiedRoom
    ? acceptableStyles.concat(
        styles.filter(style => acceptableStyles.indexOf(style) === -1)
      )
    : styles;

  return (type === 'room' ? modifiedRooms : modifiedStyles).map((e, i) => {
    const selected =
      type === 'room' ? e === selectedRoom : selectedStyles.indexOf(e) !== -1;
    const grayStyle =
      modifiedRoom && type === 'style'
        ? acceptableStyles.indexOf(e) === -1
        : false;

    return (
      <FilterOptionContainer
        key={e}
        className="filter-option-container"
        grayStyle={grayStyle}
        onClick={
          type === 'room'
            ? selectRoom.bind(this, e)
            : !grayStyle
            ? () => toggleStyle(e)
            : ''
        }
      >
        <FilterOptionWrapper
          className="filter-option-wrapper"
          grayStyle={grayStyle}
        >
          {type === 'room' ? (
            <CheckWrapper className="check-wrapper" visible={selected}>
              <ActionCheckThin
                className="checkmark"
                fill="#545658"
                height="18"
                width="20"
                viewBox="0 0 24 24"
              />
            </CheckWrapper>
          ) : (
            <CheckContainer
              className="check-container"
              visible={selected}
            >
              <CheckWrapper
                className="check-wrapper"
                thing={e}
                visible={selected}
              >
                <ActionCheckThin
                  className="checkmark"
                  fill="#fff"
                  height="18"
                  width="20"
                  viewBox="0 0 24 24"
                />
              </CheckWrapper>
            </CheckContainer>
          )}
          <FilterOptionText
            key={e}
            className="filter-option-text"
            bold={selected}
            grayStyle={grayStyle}
          >
            {e}
          </FilterOptionText>
        </FilterOptionWrapper>
      </FilterOptionContainer>
    );
  });
};
