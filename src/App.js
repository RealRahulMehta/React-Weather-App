import React, { Component } from "react";
import Search from "./components/Search";
import Results from "./components/Results";
import "./App.css";
import Axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      result: {}
    };
  }
  showResult = e => {
    if (this.state.city) {
      Axios.get(
        `https://www.mapquestapi.com/geocoding/v1/address?key=vf2R1VpfowlzmDyJQy8yAP0YOV2dMH5j&location=${this.state.city}`
      )
        .then(res => {
          if (res.data.results.length) {
            const lat = res.data.results[0].locations[0].latLng.lat;
            const lon = res.data.results[0].locations[0].latLng.lng;

            // Proxy to by-pass CORS restrictions
            const proxy = "https://cors-anywhere.herokuapp.com/";
            // https://api.darksky.net/forecast/key/latitude,longitude
            Axios.get(
              proxy +
                `https://api.darksky.net/forecast/38946ee167f20884649270c4d1eaf870/${lat},${lon}?units=si`
            )
              .then(res => this.setState({ result: res.data }))
              .catch(error => console.log(error));
          }
        })
        .catch(error => console.log(error));
    }
  };
  updateSearchedCity = e => {
    this.setState({
      city: e.target.value
    });
  };
  defaultCity = () => {
    this.setState({
      city: "",
      result: {}
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
        {Object.keys(this.state.result).length ? (
          <Results result={this.state.result} city={this.state.city} />
        ) : null}
      </div>
    );
  }
}

export default App;
