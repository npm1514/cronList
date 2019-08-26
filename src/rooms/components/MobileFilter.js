import React, { Component } from 'react';
import {
  MobFilterWrapper,
  MobFilterHeader,
  HeaderTextWrapper,
  MobileInnerWrapper,
  ResultsButton,
  CloseButtonWrapper,
  CloseButtonText
} from './styled-components/MobileFilter';
import ActionCloseThin from 'overstock-component-library/lib/Icons/action/Close_Thin';
import { filterData } from '../utils';
import MobileOptions from './MobileOptions';

class MobileFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clearedRoom: '',
      pending: props.selectedRoom || '',
      selectedStyles: props.selectedStyles || [],
      showMoreRooms: false,
      showMoreStyles: false
    };
  }
  applyResults = () => {
    this.props.selectFilter(this.state.pending, this.state.selectedStyles);
    this.props.toggleMenu('mobileMenu');
    this.setState({
      clearedRoom: ''
    });
  };
  clearFilters = () => {
    this.setState({
      pending: '',
      clearedRoom: this.props.selectedRoom,
      selectedStyles: []
    });
  };
  handleRoomSelect = room => {
    this.setState(state => ({
      pending: state.pending !== room ? room : '',
      clearedRoom: '',
      selectedStyles: []
    }));
  };
  handleStyleSelect = style => {
    this.setState(state => {
      const { selectedStyles: ss } = state;
      const index = ss.indexOf(style);

      return {
        selectedStyles:
          index !== -1
            ? ss.slice(0, index).concat(ss.slice(index + 1))
            : [...ss, style]
      };
    });
  };
  toggleMore = key => this.setState(state => ({ [key]: !state[key] }));

  resetClearedRoom = () => {
    this.setState({
      clearedRoom: '',
      pending: this.props.selectedRoom,
      selectedStyles: this.props.selectedStyles
    });
    this.props.toggleMenu('mobileMenu');
    this.setState({ clearedRoom: '', pending: this.props.selectedRoom });
  };

  componentWillReceiveProps(next) {
    this.state.selectedStyles !== next.selectedStyles &&
      this.setState({ selectedStyles: next.selectedStyles });
  }

  render() {
    let rooms = filterData.rooms.slice();
    const {
      applyResults,
      clearFilters,
      handleRoomSelect,
      handleStyleSelect,
      props: { selectedRoom, visible },
      resetClearedRoom,
      state: { pending, selectedStyles, showMoreRooms, showMoreStyles },
      toggleMore
    } = this;
    const index = rooms.indexOf(selectedRoom);
    const modifiedRooms =
      index !== -1
        ? rooms.splice(rooms.indexOf(selectedRoom), 1).concat(rooms)
        : rooms;
    const styles = filterData.styles['all-rooms'];
    return (
      <MobFilterWrapper className="mob-filter-wrapper" visible={visible}>
        <MobileInnerWrapper>
          <MobFilterHeader className="mob-filter-header">
            <HeaderTextWrapper className="header-text-wrapper">
              <ResultsButton
                className="results-button"
                onClick={() => applyResults()}
              >
                Show Results
              </ResultsButton>
              <CloseButtonWrapper
                className="close-button-wrapper"
                onClick={resetClearedRoom}
              >
                <ActionCloseThin
                  className="close-logo"
                  height="24px"
                  fill="#545658"
                />
              </CloseButtonWrapper>
            </HeaderTextWrapper>
          </MobFilterHeader>
          <MobileOptions
            arr={modifiedRooms}
            selected={pending}
            selectFunction={handleRoomSelect}
            showAll={showMoreRooms}
            toggleMore={toggleMore}
            type="Rooms"
          />
          <MobileOptions
            arr={styles}
            selected={selectedStyles}
            selectFunction={handleStyleSelect}
            showAll={showMoreStyles}
            toggleMore={toggleMore}
            room={pending}
            type="Styles"
          />
        </MobileInnerWrapper>
      </MobFilterWrapper>
    );
  }
}

export default MobileFilter;
