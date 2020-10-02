import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function SearchBox() {
  //   static propTypes = {
  //     placeholder: React.PropTypes.string,
  //     onPlacesChanged: React.PropTypes.func
  //   }

  const onPlacesChanged = () => {
    if (this.props.onPlacesChanged) {
      this.props.onPlacesChanged(this.searchBox.getPlaces());
    }
  };

  useEffect(() => {
    var input = ReactDOM.findDOMNode(this.refs.input);
    this.searchBox = new google.maps.places.SearchBox(input);
    this.searchBox.addListener("places_changed", this.onPlacesChanged);
  });

  useEffect(() => {
    // https://developers.google.com/maps/documentation/javascript/events#removing
    google.maps.event.clearInstanceListeners(this.searchBox);
  });

  return <input ref="input" {...this.props} type="text" />;
}

export default SearchBox;
