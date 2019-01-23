import React, { useState , useEffect } from "react";
import "./App.css";

const App = () => {
  const [name, setName] = useState(null);

  function handleInput(e) {
    setName(e.target.value);
  }

  return (
    <div className="App-header">
      <h1>Mega Engine</h1>
      <p>Search that you wanna search.</p>
      <p>Search Topic : {name}</p>
      <p id="status"></p>
      <form method="GET" action="https://google.com/search">
        <input
          style={{ borderRadius: 4, height: "40%" }}
          type="search"
          name="q"
          onChange={handleInput}
        />
        <input style={{ margin: "10px" }} type="submit" value="Submit" />
        <div id="first-col">
          <div>
            <input id="search" type="radio" name="tbm" value="" />
            <label for="search">All</label>
          </div>
          <div>
            <input id="imagesearch" type="radio" name="tbm" value="isch" />
            <label for="imagesearch">Image</label>
          </div>
          <div>
            <input id="videosearch" type="radio" name="tbm" value="vid" />
            <label for="videosearch">Video</label>
          </div>
          <div>
            <input id="newssearch" type="radio" name="tbm" value="nws" />
            <label for="newssearch">News</label>
          </div>
        </div>
        <div id="second-col">
          <div>
            <input id="placesearch" type="radio" name="tbm" value="plcs" />
            <label for="placesearch">Place</label>
          </div>
          <div>
            <input id="booksearch" type="radio" name="tbm" value="bks" />
            <label for="booksearch">Books</label>
          </div>
          <div>
            <input id="shopsearch" type="radio" name="tbm" value="shop" />
            <label for="shopsearch">Shop</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default App;
