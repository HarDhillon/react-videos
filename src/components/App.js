import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component{
  state = { videos: [] };

  // we could use promises (.then) but we can also use async. We are storing the reponse ONCE it loads
  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({ videos: response.data.items })
  }
  
  render() {

    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit}/>
        There are {this.state.videos.length} videos.
      </div>
    );
  }
}

export default App;