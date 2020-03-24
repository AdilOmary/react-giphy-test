// const App = () => {
//   return <div> Hello ddd ! </div>;
// };

// export default App;

import React, { Component } from 'react';
import SearchBar from './searchBar';
import Gif from "./gif";
import GifList from "./gifList";

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render() {
    const selectedGifId = "5xtDarIHieSzSJdmn0A";
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif gifId={selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList />
        </div>
      </div>
    );
  }
}
