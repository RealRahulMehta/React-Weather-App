import React, { Component } from "react";
import Search from "./components/Search";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ""
    };
  }
  showResult = e => {};
  updateSearchedCity = e => {
    this.setState({
      city: e.target.value
    });
  };
  defaultCity = () => {
    this.setState({
      city: ""
    });
  };
  render() {
    return (
      <div className="App">
        <Search
          city={this.updateSearchedCity}
          cityValue={this.state.city}
          defaultCity={this.defaultCity}
          showResult={this.showResult}
        />
      </div>
    );
  }
}

export default App;
