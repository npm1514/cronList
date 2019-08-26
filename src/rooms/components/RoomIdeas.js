import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  LoadMore,
  LoadWrapper,
  OffClick,
  RoomIdeasDiv
} from './styled-components/RoomIdeas';
import FilterBar from './FilterBar';
import MobileFilter from './MobileFilter';
import { fetchModsData, fetchNextModsData } from './redux/actions';
import ProductGrid from 'lpo-component-library/module/ProductGrid';
import { config } from '../utils';
import LoadingLogo from 'lpo-component-library/module/LoadingLogo';

const pathStringBase = '/welcome/room-ideas/';

class RoomIdeas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileMenu: false,
      roomMenu: false,
      style: this.props.data.style,
      styleMenu: false,
      selectedRoom: this.props.data.room || '',
      selectedStyles: this.props.data.style || []
    };
  }

  loadMore = () => {
    this.props.nextRoomsData &&
      this.props.fetchNextModsData(
        this.props.nextRoomsData,
        this.state.selectedRoom,
        this.state.selectedStyles
      );
  };
  selectRoom = room => {
    this.setState(
      {
        selectedRoom: room === this.state.selectedRoom ? '' : room,
        selectedStyles: []
      },
      () => {
        if (window){
          history.pushState({}, '', `${window.location.origin}${pathStringBase}${this.state.selectedRoom.toLowerCase().replace(/[ ]/g, '-')}?tid=room_ideas`);
          window.s && window.s.track('page load');
        }
        this.props.fetchModsData(this.state.selectedRoom, []);
        this.toggleMenu('roomMenu');
      }
    );
    const titleString = room && room != this.state.selectedRoom ? room + ' Ideas | Overstock.com' : 'Room Ideas | Overstock.com';
    document.getElementsByTagName('title')[0].innerHTML = titleString;
  };

  mobileSelectFilter = (room, styles) => {
    this.setState({ selectedRoom: room, selectedStyles: styles });
    const pathString = [room]
      .concat(styles)
      .filter(el => !!el)
      .join('/')
      .toLowerCase();

    if (window){
      history.pushState({}, '', `${window.location.origin}${pathStringBase}${pathString}?tid=room_ideas`);
      window.s && window.s.track('page load');
    }
    this.props.fetchModsData(room, styles);
  };

  setStyles = styles => {
    const { selectedRoom: room } = this.state;
    const pathString = `${pathStringBase}${
      [room]
      .concat(styles)
      .filter(el => !!el)
      .join('/')
      .replace(/[ ]/g, '-')
      .toLowerCase()
    }`;
    if (window){
      const titleStyle = styles && styles.length && styles.length == 2 ? styles[0] + ' & ' + styles[1] + ' ' : styles && styles.length && styles.length == 1 ? styles[0] + ' ' : '';
      const titleRoom = room ? room : 'Room';
      const titleString = titleStyle + titleRoom +  ' Ideas | Overstock.com';
      document.getElementsByTagName('title')[0].innerHTML = titleString;
      history.pushState({}, '', `${window.location.origin}${pathString}?tid=room_ideas`);
      window.s && window.s.track('page load');
    }
    this.setState({ selectedStyles: styles }, () => {
      this.props.fetchModsData(
        this.state.selectedRoom,
        this.state.selectedStyles
      );
    });
  };

  offClick = () => {
    this.setState({
      roomMenu: false,
      styleMenu: false
    });
  };
  toggleMenu = menu => {
    if (menu === 'mobileMenu') {
      this.setState({
        mobileMenu: !this.state.mobileMenu,
        roomMenu: false,
        styleMenu: false
      });
    }
    if (menu === 'roomMenu')
      this.setState({
        mobileMenu: false,
        roomMenu: !this.state.roomMenu,
        styleMenu: false
      });
    if (menu === 'styleMenu')
      this.setState({
        mobileMenu: false,
        roomMenu: false,
        styleMenu: !this.state.styleMenu
      });
  };

  format = str => {
    return str.toLowerCase().replace(/ /g, '-');
  };
  filterCase = str => {
    return str
      .split('-')
      .map(e => e.charAt(0).toUpperCase() + e.substring(1))
      .join(' ');
  };
  componentDidMount(){
    history.pushState({}, '', `${window.location.origin}${window.location.pathname}?tid=room_ideas`);
  }
  render() {
    config.data =
      this.props && this.props.modsData
        ? this.props.modsData
        : this.props.data.data;

    return (
      <RoomIdeasDiv className="room-ideas-div">
        {this.state.roomMenu || this.state.styleMenu ? (
          <OffClick onClick={this.offClick} className="offclick" />
        ) : (
          ''
        )}
        <MobileFilter
          className="mobile-filter"
          visible={this.state.mobileMenu}
          toggleMenu={this.toggleMenu}
          selectedRoom={this.state.selectedRoom}
          selectedStyles={this.state.selectedStyles}
          selectFilter={this.mobileSelectFilter}
          ref="mobileFilter"
        />
        <FilterBar
          {...this.props}
          setStyles={this.setStyles}
          toggleMenu={this.toggleMenu}
          roomMenu={this.state.roomMenu}
          styleMenu={this.state.styleMenu}
          selectedRoom={this.state.selectedRoom}
          selectedStyles={this.state.selectedStyles}
          selectRoom={this.selectRoom}
        />
        {this.props.isFetching ? (
          <LoadingLogo center />
        ) : (
          <ProductGrid className="product-grid" config={config} />
        )}
        <LoadWrapper>
          {this.props.isFetchingNext && <LoadingLogo center />}
          {this.props.nextRoomsData &&
            !this.props.isFetchingNext &&
            !this.props.isFetching && (
              <LoadMore onClick={this.loadMore} className="load-more">
                See More Rooms
              </LoadMore>
            )}
        </LoadWrapper>
      </RoomIdeasDiv>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  { fetchModsData, fetchNextModsData }
)(RoomIdeas);
