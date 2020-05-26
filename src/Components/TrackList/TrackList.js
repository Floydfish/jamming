import React from 'react';
import TrackList from './Tracklist.css';

export class TrackList extends React.Component {
    render() {
        return(
            <div className="TrackList">
                {this.props.tracks.map()}
            </div>
        )
    }
}