import React, { Component } from 'react';
import RoomIdeas from './components/RoomIdeas';

class Root extends Component {
    render() {
        return (
          <div id="userActiveRooms">
            <RoomIdeas {...this.props}/>
          </div>
        )
    }
}

export default Root;
