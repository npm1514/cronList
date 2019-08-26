import React, { Component } from 'react';
import {
  FilterBarContainer,
  FilterBarWrapper,
  FixedFilterButton,
  MainText,
  Subtitle,
  TextWrapper
} from './styled-components/FilterBar';
// import ArrowsMinimalLeft from 'overstock-component-library/lib/Icons/arrows/Minimal_Left';
import FilterButtons from './FilterButtons';

class FilterBar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  roomIdeasText = () => {
    let {selectedRoom, selectedStyles} = this.props;
    if(selectedRoom) {
      if(selectedStyles.length > 0) {
        if(selectedStyles.length === 1) return `${selectedStyles[0]} ${selectedRoom}`
        else if(selectedStyles.length === 2) return `${selectedStyles[0]} & ${selectedStyles[1]} ${selectedRoom}`
        else return `${selectedRoom}`
      }
      else return `${selectedRoom}`
    }
    else if(!selectedRoom && selectedStyles.length > 0) {
      if(selectedStyles.length === 1) return `${selectedStyles[0]}`
      if(selectedStyles.length === 2) return `${selectedStyles[0]} & ${selectedStyles[1]}`
      if(selectedStyles.length > 2) return `Room`
    }
    else return `Room`
  }

  render() {
    const {
      props: { selectedRoom, selectedStyles }
    } = this;
    const threeStyles = selectedStyles.slice(0, 3).join(', ');
    const lastComma = threeStyles.lastIndexOf(',');

    const dynamicText =
      !!selectedRoom + selectedStyles.length > 3
        ? selectedRoom || 'Room'
        : selectedStyles.length <= 2
        ? selectedStyles.slice(0, 2).join(' & ') + ' ' + (selectedRoom || 'Room')
        : threeStyles.slice(0, lastComma) +
            threeStyles.slice(lastComma).replace(',', ', &') || 'Room';
    return (
      <FilterBarContainer className="filter-bar-container">
        <FilterBarWrapper className="filter-bar-wrapper">
          <TextWrapper className="text-wrapper">
            <MainText className="main-text">
              {this.roomIdeasText()}{' '}
              Ideas
            </MainText>
            <Subtitle className='subtitle'>
              Get design inspiration with these {dynamicText.toLowerCase()} ideas.
            </Subtitle>
          </TextWrapper>
          <FilterButtons {...this.props} />
          <FixedFilterButton
            onClick={() => this.props.toggleMenu('mobileMenu')}
            className="fixed-filter-button"
          >
            Filters
          </FixedFilterButton>
        </FilterBarWrapper>
      </FilterBarContainer>
    );
  }
}

export default FilterBar;
