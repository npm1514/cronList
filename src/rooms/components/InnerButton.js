import React, { Component } from 'react'
import ActionCaretUpDownThin from 'overstock-component-library/lib/Icons/action/Caret_Up_Down_Thin';
import {
  FilterButtonInnerCont,
  FilterButtonText,
  FilterButtonArrow,
  FilterButtonInnerWrapper
} from './styled-components/FilterButtons'

export default ({ roomMenu, selectedRoom, selectedStyles, styleMenu, toggleMenu, type }) => (
  <FilterButtonInnerWrapper
  className="filter-button-inner-wrapper"
  onClick={() => toggleMenu(type === 'room' ? 'roomMenu' : 'styleMenu')}
  >
    <FilterButtonInnerCont className="filter-button-inner-cont">
      <FilterButtonText className="filter-button-text">
        {type === 'room' ? (selectedRoom ? selectedRoom : 'Room') : (selectedStyles && selectedStyles.length >= 1 ? `Style  ( ${selectedStyles.length} )` : 'Style')}
      </FilterButtonText>
      <FilterButtonArrow
        className="filter-button-arrow"
        open={type === 'room' ? roomMenu : styleMenu}
      >
        <ActionCaretUpDownThin
          className="downArrow"
          style={{ width: '10px' }}
          color="#545658"
        />
      </FilterButtonArrow>
    </FilterButtonInnerCont>
  </FilterButtonInnerWrapper>
)
