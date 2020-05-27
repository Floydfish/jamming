import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {name: "Preta, preta, pretinha", artist:"artist1", album:"album1", id:"id1"},
        {name: "name2", artist:"artist2", album:"album2", id:"id2"},
        {name: "name3", artist:"artist3", album:"album3", id:"id3"}
      ],
      playlistName: "playlistname1",
      playlistTracks: [
        {name: "playListName1", artist:"playListArtist1", album:"playListAlbum1", id:"playListId1"},
      ]

    };
    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } else {
      this.state.playlistTracks.push(track);
      this.setState({playlistTracks:this.state.playlistTracks})
    }
  }

  render() {
    return(
      <div>
        <h1>Ja<span className="highlight">mm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults 
              searchResults={this.state.searchResults} 
              onAdd={this.addTrack}/>
            <Playlist 
              playlistName={this.state.playlistName} 
              playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App