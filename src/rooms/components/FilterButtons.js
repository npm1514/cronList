import React, { Component } from 'react'
import {
  FilterButtonWrapper,
  FilterButton,
  RoomDropdown,
  StyleDropdown
} from './styled-components/FilterButtons'
import {
  StyleFilterWrapper,
  RoomFilterWrapper,
  StyleFilterContainer,
  StyleButtonWrapper,
  ClearButton,
  ApplyButton
} from './styled-components/Filters'
import FilterOptions from './FilterOptions'
import InnerButton from './InnerButton'

class FilterButtons extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedStyles: props.selectedStyles || []
    }
  }

  componentWillReceiveProps(next) {
    if (next.styleMenu !== this.props.styleMenu)
      this.setState({ selectedStyles: next.selectedStyles })
  }

  toggleStyle = style => {
    this.setState(state => {
      const { selectedStyles: ss } = state
      const index = ss.indexOf(style)
      const modifiedStyles =
        index !== -1
          ? ss.slice(0, index).concat(ss.slice(index + 1))
          : [style, ...ss]

      return {
        selectedStyles: modifiedStyles
      }
    })
  }

  arraysAreEqual = (a,b) => {
    return a.sort().toString() === b.sort().toString()
  }

  applySelections = () => {
    if(!this.arraysAreEqual(this.state.selectedStyles, this.props.selectedStyles)) {
        this.props.setStyles(this.state.selectedStyles)
    }
    this.props.toggleMenu('styleMenu')
  }
  clearSelections = () => this.setState({ selectedStyles: [] })

  render() {
    const {
      applySelections,
      clearSelections,
      props: { roomMenu, selectedRoom, selectRoom, styleMenu, toggleMenu },
      state: { selectedStyles },
      toggleStyle
    } = this

    return (
      <FilterButtonWrapper className="filter-button-wrapper">
        <FilterButton className="filter-button">
          <InnerButton
            roomMenu={roomMenu}
            selectedRoom={selectedRoom}
            selectedStyles={this.props.selectedStyles}
            styleMenu={styleMenu}
            toggleMenu={toggleMenu}
            type="room"
          />
          <RoomDropdown className="room-menu" open={this.props.roomMenu}>
            <RoomFilterWrapper className="filter-wrapper">
              <FilterOptions
                selectRoom={selectRoom}
                selectedStyles={selectedStyles}
                selectedRoom={selectedRoom}
                type="room"
              />
            </RoomFilterWrapper>
          </RoomDropdown>
        </FilterButton>
        <FilterButton className="filter-button">
          <InnerButton
            roomMenu={roomMenu}
            selectedRoom={selectedRoom}
            selectedStyles={this.props.selectedStyles}
            styleMenu={styleMenu}
            toggleMenu={toggleMenu}
            type="style"
          />
          <StyleDropdown
            onClick={e => e.preventDefault()}
            className="style-menu"
            open={this.props.styleMenu}
          >
            <StyleFilterWrapper>
              <StyleFilterContainer>
                <FilterOptions
                  selectRoom={selectRoom}
                  selectedStyles={selectedStyles}
                  selectedRoom={selectedRoom}
                  toggleStyle={toggleStyle}
                  type="style"
                />
              </StyleFilterContainer>
              <StyleButtonWrapper className="style-button-wrapper">
                <ClearButton className="clear-button" onClick={clearSelections}>
                  Clear
                </ClearButton>
                <ApplyButton className="apply-button" onClick={applySelections}>
                  Apply
                </ApplyButton>
              </StyleButtonWrapper>
            </StyleFilterWrapper>
          </StyleDropdown>
        </FilterButton>
      </FilterButtonWrapper>
    )
  }
}

export default FilterButtons
